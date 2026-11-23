import { useCallback, useEffect, useState } from 'react';
import { TOTAL_STEPS } from './data/quizData';
import { INITIAL_QUIZ_STATE, type LegalDocType, type QuizState } from './types/quiz';
import { QuizHeader } from './components/QuizHeader';
import { LegalModal } from './components/LegalModal';
import {
  AuthorityStep,
  BeliefStep,
  ChildrenCountStep,
  ChildSexStep,
  CommitmentStep,
  ComparisonStep,
  ConcentrationStep,
  DewormedStep,
  DietaryRestrictionStep,
  DislikedFoodsStep,
  ExposureStep,
  IntroStep,
  NewsAlertStep,
  NoticedBeforeStep,
  SymptomsGridStep,
} from './components/steps/QuestionSteps';
import { ProcessingStep } from './components/steps/ProcessingStep';
import { LeadCaptureStep } from './components/steps/LeadCaptureStep';
import {
  DeliverablesOfferStep,
  ResultsDiagnosticStep,
  ScarcityStep,
} from './components/steps/ResultsOfferSteps';
import { AngolaCheckoutStep } from './components/steps/AngolaCheckoutStep';

const STORAGE_KEY = 'desparasitacao_kids_angola_v1';

function loadSavedState(): QuizState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_QUIZ_STATE;
    const parsed = JSON.parse(raw) as Partial<QuizState>;
    let safeStep = typeof parsed.step === 'number' ? parsed.step : 1;
    if (safeStep < 1 || safeStep > TOTAL_STEPS) safeStep = 1;
    return { ...INITIAL_QUIZ_STATE, ...parsed, step: safeStep };
  } catch {
    return INITIAL_QUIZ_STATE;
  }
}

export default function App() {
  const [state, setState] = useState<QuizState>(loadSavedState);
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors
    }
  }, [state]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [state.step]);

  const updateState = useCallback((patch: Partial<QuizState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  const goToStep = useCallback((nextStep: number) => {
    setState((prev) => ({
      ...prev,
      step: Math.max(1, Math.min(TOTAL_STEPS, nextStep)),
    }));
  }, []);

  const handleBack = useCallback(() => {
    setState((prev) => {
      // Skip automatic loading steps when navigating backward
      let target = prev.step - 1;
      if (target === 15) target = 14;
      if (target === 18) target = 17;
      return { ...prev, step: Math.max(1, target) };
    });
  }, []);

  const handleRestart = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setState(INITIAL_QUIZ_STATE);
  }, []);

  const toggleArrayItem = useCallback((field: 'exposures' | 'symptoms' | 'dislikedFoods', value: string) => {
    setState((prev) => {
      const current = prev[field];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [field]: next };
    });
  }, []);

  const progressPercent = Math.round((state.step / TOTAL_STEPS) * 100);
  const showLogo = state.step !== 1 && state.step !== 3;
  const canGoBack = state.step > 1 && !state.orderCompleted;

  return (
    <div className="min-h-screen w-full bg-slate-50 sm:py-6 flex flex-col items-center">
      <main className="flex w-full max-w-[480px] flex-1 flex-col bg-white px-5 pb-6 sm:rounded-3xl sm:border sm:border-gray-200 sm:shadow-sm">
        <QuizHeader
          progressPercent={progressPercent}
          canGoBack={canGoBack}
          onBack={handleBack}
          showLogo={showLogo}
        />

        <div className="flex flex-1 flex-col">
          {state.step === 1 && (
            <IntroStep
              onContinue={() => goToStep(2)}
              onOpenLegal={(doc) => setLegalDoc(doc)}
            />
          )}

          {state.step === 2 && (
            <ExposureStep
              selected={state.exposures}
              onToggle={(id) => toggleArrayItem('exposures', id)}
              onContinue={() => goToStep(3)}
            />
          )}

          {state.step === 3 && (
            <NewsAlertStep onContinue={() => goToStep(4)} />
          )}

          {state.step === 4 && (
            <ChildrenCountStep
              selected={state.childrenCount}
              onSelect={(val) => {
                updateState({ childrenCount: val, step: 5 });
              }}
            />
          )}

          {state.step === 5 && (
            <ChildSexStep
              selected={state.childSex}
              onSelect={(val) => {
                updateState({ childSex: val, step: 6 });
              }}
            />
          )}

          {state.step === 6 && (
            <DewormedStep
              selected={state.dewormedLast6Months}
              onSelect={(val) => {
                updateState({ dewormedLast6Months: val, step: 7 });
              }}
            />
          )}

          {state.step === 7 && (
            <SymptomsGridStep
              selected={state.symptoms}
              onToggle={(sym) => toggleArrayItem('symptoms', sym)}
              onContinue={() => goToStep(8)}
            />
          )}

          {state.step === 8 && (
            <ConcentrationStep
              selected={state.concentration}
              onSelect={(val) => {
                updateState({ concentration: val, step: 9 });
              }}
            />
          )}

          {state.step === 9 && (
            <NoticedBeforeStep
              selected={state.noticedBefore}
              onSelect={(val) => {
                updateState({ noticedBefore: val, step: 10 });
              }}
            />
          )}

          {state.step === 10 && (
            <ComparisonStep
              selected={state.knowsNaturalDifference}
              onSelect={(val) => {
                updateState({ knowsNaturalDifference: val, step: 11 });
              }}
            />
          )}

          {state.step === 11 && (
            <DislikedFoodsStep
              selected={state.dislikedFoods}
              onToggle={(food) => toggleArrayItem('dislikedFoods', food)}
              onContinue={() => goToStep(12)}
            />
          )}

          {state.step === 12 && (
            <DietaryRestrictionStep
              selected={state.dietaryRestriction}
              onSelect={(val) => {
                updateState({ dietaryRestriction: val, step: 13 });
              }}
            />
          )}

          {state.step === 13 && (
            <AuthorityStep onContinue={() => goToStep(14)} />
          )}

          {state.step === 14 && (
            <CommitmentStep
              selected={state.agreesDecision}
              onSelect={(val) => {
                updateState({ agreesDecision: val, step: 15 });
              }}
            />
          )}

          {state.step === 15 && (
            <ProcessingStep
              title="Processando suas respostas"
              subtitle="Processando"
              startPercent={15}
              durationMs={2200}
              onComplete={() => goToStep(16)}
            />
          )}

          {state.step === 16 && (
            <BeliefStep
              state={state}
              onSelect={(val) => {
                updateState({ believesChange: val, step: 17 });
              }}
            />
          )}

          {state.step === 17 && (
            <LeadCaptureStep
              initialName={state.parentName}
              initialWhatsapp={state.whatsappNumber}
              onSubmit={(name, whatsapp) => {
                updateState({
                  parentName: name,
                  whatsappNumber: whatsapp,
                  mcxPhone: whatsapp,
                  step: 18,
                });
              }}
            />
          )}

          {state.step === 18 && (
            <ProcessingStep
              title="Gerando protocolo personalizado"
              subtitle="Analisando respostas e adequando o melhor tipo de tratamento"
              startPercent={10}
              durationMs={2500}
              onComplete={() => goToStep(19)}
            />
          )}

          {state.step === 19 && (
            <ResultsDiagnosticStep
              state={state}
              onContinue={() => goToStep(20)}
            />
          )}

          {state.step === 20 && (
            <DeliverablesOfferStep onContinue={() => goToStep(21)} />
          )}

          {state.step === 21 && (
            <ScarcityStep onContinue={() => goToStep(22)} />
          )}

          {state.step === 22 && (
            <AngolaCheckoutStep
              state={state}
              onUpdate={updateState}
              onRestart={handleRestart}
            />
          )}
        </div>
      </main>

      <LegalModal docType={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
