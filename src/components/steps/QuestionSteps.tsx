import { useState } from 'react';
import {
  Brain,
  Check,
  ChevronRight,
  Frown,
  Heart,
  Meh,
  Play,
  Smile,
  X,
} from 'lucide-react';
import handwashImg from '../../assets/images/angolan_handwash_1794591816354.jpg';
import doctorLabImg from '../../assets/images/angolan_doctor_lab_1794591816917.jpg';
import doctorConfImg from '../../assets/images/angolan_doctor_conference_1794591817657.jpg';
import happyBoyImg from '../../assets/images/angolan_happy_boy_1794591818326.jpg';
import {
  CHILDREN_COUNT_OPTIONS,
  COMPARISON_ROWS,
  CONCENTRATION_OPTIONS,
  DEWORMED_OPTIONS,
  DIETARY_RESTRICTION_OPTIONS,
  EXPOSURE_OPTIONS,
  FOOD_OPTIONS,
  SYMPTOM_OPTIONS,
} from '../../data/quizData';
import type { LegalDocType, QuizState } from '../../types/quiz';
import { FoodIcon, GenderBadge } from '../FoodIcon';

/* ---------------- STEP 1: INTRO GATE ---------------- */
export function IntroStep({
  onContinue,
  onOpenLegal,
}: {
  onContinue: () => void;
  onOpenLegal: (doc: LegalDocType) => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-20 text-center">
      <h1 className="max-w-xs text-[30px] sm:text-[34px] font-extrabold leading-[1.15] tracking-tight text-gray-900">
        Toque no botão para continuar
      </h1>

      <button
        type="button"
        onClick={onContinue}
        className="mt-7 w-full rounded-2xl bg-[#159947] py-4 text-[18px] font-medium text-white shadow-sm hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer"
      >
        Continuar
      </button>

      <p className="mt-10 max-w-sm text-[13.5px] leading-relaxed text-gray-500">
        Ao clicar em alguma das opções, você concorda com os{' '}
        <button
          type="button"
          onClick={() => onOpenLegal('terms')}
          className="font-bold text-gray-700 underline decoration-gray-300 underline-offset-2 hover:text-gray-900 cursor-pointer"
        >
          Termos de utilização e serviço
        </button>
        ,{' '}
        <button
          type="button"
          onClick={() => onOpenLegal('privacy')}
          className="font-bold text-gray-700 underline decoration-gray-300 underline-offset-2 hover:text-gray-900 cursor-pointer"
        >
          Política de privacidade
        </button>
        ,{' '}
        <button
          type="button"
          onClick={() => onOpenLegal('subscription')}
          className="font-bold text-gray-700 underline decoration-gray-300 underline-offset-2 hover:text-gray-900 cursor-pointer"
        >
          Política de subscrição
        </button>{' '}
        e{' '}
        <button
          type="button"
          onClick={() => onOpenLegal('cookies')}
          className="font-bold text-gray-700 underline decoration-gray-300 underline-offset-2 hover:text-gray-900 cursor-pointer"
        >
          Política de cookies
        </button>
      </p>
    </div>
  );
}

/* ---------------- STEP 2: EXPOSURE MULTI-SELECT ---------------- */
export function ExposureStep({
  selected,
  onToggle,
  onContinue,
}: {
  selected: string[];
  onToggle: (id: string) => void;
  onContinue: () => void;
}) {
  return (
    <div className="pt-4 pb-8">
      <h1 className="text-center text-[23px] sm:text-[25px] font-extrabold leading-tight text-gray-900">
        Essas são formas comuns de uma criança se contaminar com parasitas. O seu filho foi exposto a alguma delas?
      </h1>
      <p className="mt-3 text-center text-[15px] text-gray-500">
        Selecione para avançar.
      </p>

      <div className="mt-5 space-y-3">
        {EXPOSURE_OPTIONS.map((opt) => {
          const isChecked = selected.includes(opt.id);
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onToggle(opt.id)}
              className={`flex w-full items-center gap-3.5 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                isChecked
                  ? 'border-[#159947] bg-[#F0FDF4] shadow-xs'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <span className="text-[28px] leading-none shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors ${
                  isChecked
                    ? 'border-[#159947] bg-[#159947] text-white'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {isChecked && <Check className="h-4 w-4 stroke-[3]" />}
              </span>
              <span className="text-[16px] leading-snug text-gray-800">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="sticky bottom-3 z-20 mt-6 rounded-2xl bg-white/90 pt-2 pb-1 backdrop-blur-xs">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-2xl bg-[#159947] py-4 text-[17px] font-bold text-white shadow-md hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

/* ---------------- STEP 3: ANGOLA NEWS REPORT ---------------- */
export function NewsAlertStep({ onContinue }: { onContinue: () => void }) {
  const [showVideoInfo, setShowVideoInfo] = useState(false);

  return (
    <div className="pt-4 pb-8">
      <div className="flex items-center gap-3 rounded-2xl border border-red-100 bg-[#FEF2F2] px-4 py-4 text-[#DC2626]">
        <span className="text-2xl shrink-0" aria-hidden="true">🚨</span>
        <p className="text-center text-[17px] font-medium leading-snug">
          Sabia disto? Angola tem um dos maiores índices de parasitas intestinais em crianças
        </p>
      </div>

      {/* Angolan News Card modeled faithfully on the G1/JN card layout */}
      <article className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between bg-[#B91C1C] px-4 py-2 text-white">
          <span className="font-black tracking-tight text-lg">JA</span>
          <span className="text-[13px] font-semibold tracking-wide uppercase">
            SAÚDE EM ANGOLA
          </span>
          <span className="w-6" />
        </div>

        <div className="p-4">
          <div className="text-[11px] text-gray-500">
            <div>Edição Especial de Saúde Infantil · Luanda</div>
            <div>Atualizado para famílias angolanas</div>
          </div>

          <h2 className="mt-2.5 text-[22px] font-extrabold leading-tight tracking-tight text-gray-900">
            Mais de 50% das crianças em idade escolar são afetadas por parasitas intestinais
          </h2>

          <p className="mt-2 text-[13.5px] leading-snug text-gray-600">
            Casos são frequentes tanto nas províncias como nos grandes centros urbanos. Informação e prevenção natural são fundamentais para mudar hábitos.
          </p>

          {/* Interactive Video Thumbnail */}
          <div className="relative mt-4 overflow-hidden rounded-lg bg-black">
            <img
              src={handwashImg}
              alt="Crianças angolanas a lavar as mãos para prevenção de parasitas intestinais"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover opacity-90"
            />
            <button
              type="button"
              onClick={() => setShowVideoInfo((prev) => !prev)}
              aria-label="Reproduzir nota informativa sobre higiene infantil"
              className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition-colors cursor-pointer"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-lg">
                <Play className="h-6 w-6 fill-current ml-0.5" />
              </span>
            </button>
          </div>

          {showVideoInfo && (
            <div className="mt-3 flex items-start justify-between gap-2 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-950">
              <p>
                <strong>Nota de Prevenção Pediátrica:</strong> Mesmo crianças com boa higiene podem contrair parasitas através de água não fervida, areia, animais ou frutas mal lavadas. A desparasitação preventiva natural ajuda a proteger o intestino.
              </p>
              <button
                type="button"
                onClick={() => setShowVideoInfo(false)}
                aria-label="Fechar nota"
                className="text-amber-800 hover:text-amber-950 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          <p className="mt-3 text-[12px] leading-relaxed text-gray-600">
            Os desconfortos provocados por parasitas são uma preocupação crescente em Angola. A contaminação está ligada às condições da água, clima tropical e à falta de informação preventiva.
          </p>
        </div>
      </article>

      <div className="sticky bottom-3 z-20 mt-5 rounded-2xl bg-white/90 pt-2 pb-1 backdrop-blur-xs">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-2xl bg-[#159947] py-4 text-[18px] font-semibold text-white shadow-md hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer"
        >
          NÃO sabia <span aria-hidden="true">😔</span>
        </button>
      </div>
    </div>
  );
}

/* ---------------- STEP 4: NUMBER OF CHILDREN ---------------- */
export function ChildrenCountStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: string) => void;
}) {
  return (
    <div className="pt-8 pb-8">
      <h1 className="text-center text-[24px] font-extrabold text-gray-900">
        Você tem quantos filhos?
      </h1>

      <div className="mt-6 space-y-3.5">
        {CHILDREN_COUNT_OPTIONS.map((option, idx) => {
          const isSelected = selected === option || (!selected && idx === 0);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                selected === option
                  ? 'border-[#159947] bg-[#159947] text-white shadow-sm'
                  : isSelected && !selected
                  ? 'border-[#159947] bg-[#159947] text-white shadow-sm hover:bg-[#12823c]'
                  : 'border-gray-200 bg-white text-gray-800 shadow-xs hover:border-[#159947] hover:bg-green-50/40'
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                  selected === option || (isSelected && !selected)
                    ? 'border-white bg-white text-gray-900'
                    : 'border-gray-200 bg-white text-gray-700'
                }`}
              >
                <ChevronRight className="h-4 w-4" />
              </span>
              <span className="text-[18px] font-normal">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STEP 5: CHILD SEX ---------------- */
export function ChildSexStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: 'Masculino' | 'Feminino') => void;
}) {
  return (
    <div className="pt-12 pb-8">
      <h1 className="text-center text-[25px] font-extrabold text-gray-900">
        Qual o sexo do seu filho?
      </h1>

      <div className="mt-6 space-y-4">
        {(['Masculino', 'Feminino'] as const).map((sex) => {
          const isSelected = selected === sex;
          return (
            <button
              key={sex}
              type="button"
              onClick={() => onSelect(sex)}
              className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] shadow-sm'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <GenderBadge sex={sex} />
              <span className="text-[19px] italic text-gray-800">{sex}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STEP 6: DEWORMED LAST 6 MONTHS ---------------- */
export function DewormedStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: string) => void;
}) {
  return (
    <div className="pt-6 pb-8">
      <h1 className="text-center text-[25px] font-extrabold leading-tight text-gray-900">
        O seu filho(a) foi desparasitado nos últimos 6 meses?
      </h1>
      <p className="mt-3 text-center text-[15px] italic text-gray-600">
        (Com desparasitante de farmácia ou protocolo natural)
      </p>

      <div className="mt-6 space-y-3.5">
        {DEWORMED_OPTIONS.map((opt) => {
          const isSelected = selected === opt.label;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelect(opt.label)}
              className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] shadow-sm'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <span className="text-[32px] leading-none shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span className="text-[17px] italic leading-snug text-gray-800">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STEP 7: 12 SYMPTOMS GRID ---------------- */
export function SymptomsGridStep({
  selected,
  onToggle,
  onContinue,
}: {
  selected: string[];
  onToggle: (symptom: string) => void;
  onContinue: () => void;
}) {
  return (
    <div className="pt-4 pb-8">
      <h1 className="text-center text-[25px] font-extrabold leading-tight text-gray-900">
        Dos sinais listados abaixo, quais você mais percebe no seu filho(a)?
      </h1>
      <p className="mt-3 text-center text-[15px] leading-snug text-gray-500">
        Esses sinais parecem normais no dia a dia, mas quando acontecem juntos podem indicar um desequilíbrio interno.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {SYMPTOM_OPTIONS.map((symptom) => {
          const isSelected = selected.includes(symptom);
          return (
            <button
              key={symptom}
              type="button"
              onClick={() => onToggle(symptom)}
              className={`flex items-center gap-2.5 rounded-2xl border p-3.5 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] ring-1 ring-[#159947]/30'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full shadow-inner transition-colors ${
                  isSelected
                    ? 'bg-[#159947] text-white'
                    : 'bg-radial from-[#FF6B57] to-[#DC2626]'
                }`}
              >
                {isSelected && <Check className="h-4 w-4 stroke-[3]" />}
              </span>
              <span className="text-[14px] leading-snug text-gray-800">
                {symptom}
              </span>
            </button>
          );
        })}
      </div>

      <div className="sticky bottom-3 z-20 mt-6 rounded-2xl bg-white/90 pt-2 pb-1 backdrop-blur-xs">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-2xl bg-[#159947] px-4 py-4 text-[17px] font-semibold leading-snug text-white shadow-md hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer"
        >
          Sim, percebo pelo menos 1 desses sinais
        </button>
      </div>
    </div>
  );
}

/* ---------------- STEP 8: CONCENTRATION ---------------- */
export function ConcentrationStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: string) => void;
}) {
  return (
    <div className="pt-6 pb-8">
      <h1 className="text-center text-[25px] font-extrabold leading-tight text-gray-900">
        O seu filho tem alguma dificuldade de concentração?
      </h1>
      <p className="mt-3 text-center text-[15px] text-gray-500">
        Sono, Escola, Convivência familiar...
      </p>

      <div className="mt-6 space-y-3.5">
        {CONCENTRATION_OPTIONS.map((opt) => {
          const isSelected = selected === opt.label;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelect(opt.label)}
              className={`flex w-full items-center gap-3.5 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] shadow-sm'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <span className="text-[30px] leading-none shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                  isSelected
                    ? 'border-[#159947] bg-[#159947]'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
              </span>
              <span className="text-[17px] font-bold leading-snug text-gray-900">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STEP 9: THOUGHT IT WAS NORMAL ---------------- */
export function NoticedBeforeStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: string) => void;
}) {
  const options = [
    { emoji: '😮', label: 'Sim, nunca pensei nisso antes!' },
    { emoji: '🤔', label: 'Já desconfiei, mas não tinha certeza.' },
  ];

  return (
    <div className="pt-6 pb-8">
      <h1 className="text-center text-[24px] sm:text-[26px] font-extrabold leading-tight text-gray-900">
        Você também achou que era “normal” ou era coisa da idade o seu filho ter birras, irritação ou dificuldade na escola... sem imaginar que isso podia ter relação com parasitas?
      </h1>

      <div className="mt-7 space-y-3.5">
        {options.map((opt) => {
          const isSelected = selected === opt.label;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onSelect(opt.label)}
              className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] shadow-sm'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <span className="text-[32px] leading-none shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span className="text-[17px] leading-snug text-gray-800">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STEP 10: COMPARISON TABLE ---------------- */
export function ComparisonStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: string) => void;
}) {
  const options = [
    {
      emoji: '😫',
      label: 'Sim, eu entendi que a Desparasitação Natural é muito mais eficiente',
    },
    {
      emoji: '😰',
      label: 'Não me importo com esse assunto',
    },
  ];

  return (
    <div className="pt-4 pb-8">
      <h1 className="text-center text-[24px] sm:text-[26px] font-extrabold leading-tight text-gray-900">
        Você sabe a diferença da{' '}
        <span className="text-[#159947]">Desparasitação Natural</span> e dos métodos tradicionais?
      </h1>
      <p className="mt-2.5 text-center text-[16px] text-gray-500">
        Por favor, seja sincera.
      </p>

      {/* Comparison Table */}
      <div className="relative mt-6 px-2">
        <div className="relative grid grid-cols-2 gap-0.5 overflow-visible rounded-lg border border-gray-200 bg-white shadow-xs">
          {/* Corner badges matching screenshot */}
          <div className="absolute -left-2 -top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#F26A8D] text-white shadow-sm">
            <X className="h-6 w-6 stroke-[3]" />
          </div>
          <div className="absolute -right-2 -top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#8CB828] text-white shadow-sm">
            <Check className="h-6 w-6 stroke-[3]" />
          </div>

          <div className="flex items-center justify-center bg-[#CCDAB4] px-3 py-4 text-center text-[15px] font-extrabold text-gray-900">
            Remédios
          </div>
          <div className="flex items-center justify-center bg-[#CCDAB4] px-3 py-4 text-center text-[15px] font-extrabold leading-tight text-gray-900">
            Desparasitação Natural
          </div>

          {COMPARISON_ROWS.map((row) => (
            <div key={row.traditional} className="contents">
              <div className="flex items-center justify-center bg-[#EC3815] px-2.5 py-3.5 text-center text-[14px] font-bold leading-snug text-gray-950">
                {row.traditional}
              </div>
              <div className="flex items-center justify-center bg-[#8CE84B] px-2.5 py-3.5 text-center text-[14px] font-bold leading-snug text-gray-950">
                {row.natural}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-3.5">
        {options.map((opt) => {
          const isSelected = selected === opt.label;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onSelect(opt.label)}
              className={`flex w-full items-center gap-3.5 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] shadow-sm'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <span className="text-[30px] leading-none shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                  isSelected
                    ? 'border-[#159947] bg-[#159947]'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
              </span>
              <span className="text-[16px] leading-snug text-gray-800">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STEP 11: DISLIKED FOODS 2x6 ---------------- */
export function DislikedFoodsStep({
  selected,
  onToggle,
  onContinue,
}: {
  selected: string[];
  onToggle: (food: string) => void;
  onContinue: () => void;
}) {
  return (
    <div className="pt-4 pb-8">
      <h1 className="text-center text-[25px] font-extrabold leading-tight text-gray-900">
        Qual desses alimentos o seu filho(a) NÃO gosta?
      </h1>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {FOOD_OPTIONS.map((food) => {
          const isSelected = selected.includes(food.id);
          return (
            <button
              key={food.id}
              type="button"
              onClick={() => onToggle(food.id)}
              className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3.5 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] ring-1 ring-[#159947]/30'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <FoodIcon id={food.id} />
              <span className="text-[16px] font-normal text-gray-900">
                {food.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="sticky bottom-3 z-20 mt-6 rounded-2xl bg-white/90 pt-2 pb-1 backdrop-blur-xs">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-2xl bg-[#159947] py-4 text-[17px] font-bold text-white shadow-md hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

/* ---------------- STEP 12: DIETARY RESTRICTIONS ---------------- */
export function DietaryRestrictionStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: string) => void;
}) {
  return (
    <div className="pt-6 pb-8">
      <h1 className="text-center text-[25px] font-extrabold leading-tight text-gray-900">
        O seu filho tem alguma restrição alimentar?
      </h1>

      <div className="mt-6 space-y-3.5">
        {DIETARY_RESTRICTION_OPTIONS.map((opt) => {
          const isSelected = selected === opt.label;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelect(opt.label)}
              className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] shadow-sm'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <span className="text-[32px] leading-none shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span className="text-[17px] font-bold leading-snug text-gray-900">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STEP 13: DRA AMINA DA SILVA AUTHORITY ---------------- */
export function AuthorityStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="pt-4 pb-8">
      <h1 className="text-center text-[24px] sm:text-[26px] font-extrabold leading-tight text-gray-900">
        O protocolo será gerado pela Dra. Amina da Silva - Criadora do Protocolo Natural Desparasite-se
      </h1>
      <p className="mt-2.5 text-center text-[15px] text-gray-500">
        (Você pode adaptar durante o processo)
      </p>

      {/* Collage layout mirroring original Step 13 with Angolan specialist */}
      <div className="mt-5 relative">
        <div className="w-[62%] overflow-hidden rounded-xl border border-gray-200 shadow-xs">
          <img
            src={doctorLabImg}
            alt="Dra. Amina da Silva, Biomédica angolana no laboratório clínico"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover object-top"
          />
        </div>

        <div className="relative -mt-12 grid grid-cols-12 gap-2 items-start">
          {/* Scientific Paper Snippet */}
          <div className="col-span-6 rounded-xl border border-gray-200 bg-white p-2.5 shadow-md text-left">
            <div className="text-[10px] font-serif font-bold text-gray-900 leading-none">
              nature
              <br />
              communications
            </div>
            <div className="mt-2 rounded bg-[#0277BD] px-2 py-1 text-center text-[8px] font-bold text-white">
              Download PDF
            </div>
            <div className="mt-1.5 text-[7px] text-gray-500">
              Article · Open access · Investigação Clínica
            </div>
            <p className="mt-1 text-[8.5px] font-bold leading-tight text-gray-900">
              Microbiota-derived acetate protects intestinal barrier &amp; immune response in children
            </p>
            <p className="mt-1.5 text-[7.5px] leading-tight text-blue-700">
              <span className="bg-yellow-200 px-0.5 font-semibold text-gray-900">
                Amina da Silva
              </span>
              , Luanda Biomedical Research Group
            </p>
          </div>

          {/* Conference Poster Photo */}
          <div className="col-span-6 -mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <img
              src={doctorConfImg}
              alt="Dra. Amina da Silva a apresentar estudo científico em conferência médica"
              referrerPolicy="no-referrer"
              className="w-full h-44 object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-center text-[16px] leading-relaxed text-gray-600">
        <p>
          Dra. Amina é Biomédica Especialista em Saúde Intestinal Infantil em Angola, com investigação científica dedicada ao impacto dos parasitas intestinais no desenvolvimento e na qualidade de vida das crianças.
        </p>
        <p>
          Possui mestrado internacional em Ciências Biomédicas e coordena programas de orientação natural para famílias angolanas 🇦🇴.
        </p>
      </div>

      <div className="sticky bottom-3 z-20 mt-6 rounded-2xl bg-white/90 pt-2 pb-1 backdrop-blur-xs">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-2xl bg-[#159947] py-4 text-[17px] font-bold text-white shadow-md hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

/* ---------------- STEP 14: COMMITMENT ---------------- */
export function CommitmentStep({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: string) => void;
}) {
  const options = [
    { emoji: '😃', label: 'Sim, concordo plenamente' },
    {
      emoji: '😁',
      label:
        'Eu concordo. Cuidar do meu filho hoje é um investimento que fará diferença por toda a vida dele.',
    },
    { emoji: '🙁', label: 'Não concordo' },
  ];

  return (
    <div className="pt-4 pb-8">
      <h1 className="text-center text-[24px] sm:text-[26px] font-extrabold leading-tight text-gray-900">
        Você concorda que uma pequena decisão hoje pode fazer uma grande diferença na saúde e no{' '}
        <span className="text-[#159947]">desenvolvimento do seu filho amanhã?</span>
      </h1>
      <p className="mt-3 text-center text-[16px] leading-snug text-gray-500">
        O tempo passa rápido. Por isso, cuidar dos sinais hoje pode fazer toda a diferença no futuro dos nossos filhos.
      </p>

      <div className="mt-6 space-y-3.5">
        {options.map((opt) => {
          const isSelected = selected === opt.label;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onSelect(opt.label)}
              className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] shadow-sm'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <span className="text-[32px] leading-none shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span className="text-[17px] font-bold leading-snug text-gray-900">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STEP 16: BELIEF + HAPPY CHILD CARD ---------------- */
export function BeliefStep({
  state,
  onSelect,
}: {
  state: QuizState;
  onSelect: (val: string) => void;
}) {
  const options = [
    { emoji: '🤩', label: 'Eu acredito demais!' },
    { emoji: '😥', label: 'Eu acredito pouco!' },
  ];

  return (
    <div className="pt-4 pb-8">
      <h1 className="text-center text-[26px] font-extrabold leading-tight text-gray-900">
        Você acredita que a vida do seu filho pode começar a mudar{' '}
        <span className="text-[#159947]">hoje mesmo?</span>
      </h1>

      <div className="mt-6 space-y-3.5">
        {options.map((opt) => {
          const isSelected = state.believesChange === opt.label;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onSelect(opt.label)}
              className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#159947] bg-[#F0FDF4] shadow-sm'
                  : 'border-gray-200 bg-white shadow-xs hover:border-gray-300'
              }`}
            >
              <span className="text-[32px] leading-none shrink-0" aria-hidden="true">
                {opt.emoji}
              </span>
              <span className="text-[18px] font-normal text-gray-800">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Cream & Green Editorial Card with Happy Angolan Boy */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-[#F9F6EC] via-[#F5F3E8] to-[#E6EFE0] shadow-xs">
        <div className="grid grid-cols-12 items-stretch">
          <div className="col-span-7 p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-[17px] font-extrabold leading-tight text-[#145331]">
                Você acredita que a vida do seu filho pode começar a mudar hoje mesmo?
              </h2>
              <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#DAE7C9] px-2.5 py-1 text-[10px] font-bold text-[#145331]">
                <Heart className="h-3 w-3 fill-[#4B8B3B] text-[#4B8B3B]" />
                <span>Acreditar é o primeiro passo.</span>
              </div>
              <p className="mt-2.5 text-[10.5px] leading-snug text-gray-700">
                Muitas vezes, sinais como irritabilidade, desconfortos intestinais, inchaço, dificuldade de concentração e alterações no comportamento podem melhorar quando a causa é identificada e cuidada da forma adequada.
              </p>
            </div>

            <div className="mt-3 grid grid-cols-5 gap-1 text-center">
              {[
                { Icon: Frown, label: 'Irritabilidade' },
                { Icon: Meh, label: 'Desconfortos intestinais' },
                { Icon: Smile, label: 'Inchaço' },
                { Icon: Brain, label: 'Dificuldade de concentração' },
                { Icon: Frown, label: 'Alterações' },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6AA34E] bg-white/80 text-[#4B8B3B]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="mt-1 text-[6.5px] leading-tight text-gray-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-5 relative min-h-[210px]">
            <img
              src={happyBoyImg}
              alt="Criança angolana sorridente após cuidado intestinal adequado"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="h-2.5 w-full bg-[#8BBF4F]" />
      </div>
    </div>
  );
}
