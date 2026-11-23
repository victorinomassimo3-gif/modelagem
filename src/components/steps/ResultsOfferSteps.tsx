import { Calendar, BookOpen, Smartphone, Users, Shield, Moon, Play } from 'lucide-react';
import doctorLabImg from '../../assets/images/angolan_doctor_lab_1794591816917.jpg';
import happyBoyImg from '../../assets/images/angolan_happy_boy_1794591818326.jpg';
import mothersCallImg from '../../assets/images/angolan_mothers_call_1794591819382.jpg';
import type { QuizState } from '../../types/quiz';
import { BONUSES, DELIVERABLES } from '../../data/quizData';
import { CircularGauge } from '../CircularGauge';

interface Step19Props {
  state: QuizState;
  onContinue: () => void;
}

export function ResultsDiagnosticStep({ state, onContinue }: Step19Props) {
  // Subtle deterministic tuning around the screenshot baselines based on responses
  const symptomCount = state.symptoms.length;
  const exposureCount = state.exposures.length;
  const neverDewormed = state.dewormedLast6Months.includes('Não') || state.dewormedLast6Months.includes('mais de 6');

  const parasiteChance = Math.min(96, Math.max(82, 83 + Math.min(8, symptomCount) + (neverDewormed ? 3 : 0)));
  const healthRisk = Math.min(79, Math.max(61, 62 + Math.min(8, exposureCount * 2)));
  const autoimmuneRisk = Math.min(84, Math.max(68, 69 + (neverDewormed ? 3 : 0) + (symptomCount > 2 ? 2 : 0)));

  return (
    <div className="pt-4 pb-8">
      <div className="rounded-xl bg-[#159947] px-4 py-3 text-center text-white shadow-xs">
        <span className="text-[16px] sm:text-[18px] font-bold tracking-wide uppercase">
          OS RESULTADOS FORAM PROCESSADOS
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-2xl border border-red-100 bg-[#FEF2F2] px-4 py-3.5 text-[#B91C1C]">
        <span className="text-2xl shrink-0" aria-hidden="true">🚨</span>
        <p className="text-[14px] sm:text-[15px] font-bold leading-snug uppercase">
          ATENÇÃO: ALTA POSSIBILIDADE DE INFESTAÇÃO PARASITÁRIA
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3.5">
        <CircularGauge
          percentage={parasiteChance}
          color="#DC2626"
          label="Chance de possuir um agente parasitário no organismo"
        />
        <CircularGauge
          percentage={healthRisk}
          color="#EA580C"
          label="Risco para a sua saúde"
        />
        <CircularGauge
          percentage={autoimmuneRisk}
          color="#F59E0B"
          label="Chances de contrair doenças autoimunes caso não ocorra o tratamento em breve"
        />
        <CircularGauge
          percentage={100}
          color="#16A34A"
          label="Chances de desparasitação"
        />
      </div>

      <h2 className="mt-7 text-center text-[22px] sm:text-[24px] font-extrabold leading-tight text-gray-900">
        Possível agente parasitário de acordo com os sintomas informados
      </h2>

      <div className="mt-3 flex justify-center">
        <span className="inline-block bg-black px-3 py-1 text-[17px] font-bold text-white">
          Giardia lamblia
        </span>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 shadow-xs">
        <img
          src="/images/giardia.jpg"
          alt="Visualização microscópica de Giardia lamblia"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover"
        />
      </div>

      <h3 className="mt-6 text-center text-[21px] sm:text-[23px] font-extrabold leading-snug text-gray-900">
        A desparasitação ocorrerá primeiramente através do óleo de orégano com um ingrediente secreto e barato facilmente encontrado nos mercados.
      </h3>

      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 shadow-xs">
        <img
          src="/images/oregano_oil.jpg"
          alt="Óleo natural de orégano com coco"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="sticky bottom-3 z-20 mt-6 rounded-2xl bg-[#E9F9EE] p-2 shadow-md">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-xl bg-[#159947] py-4 text-[16px] font-extrabold tracking-wide text-white hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer uppercase"
        >
          QUERO RECEBER MEU PROTOCOLO
        </button>
      </div>
    </div>
  );
}

export function DeliverablesOfferStep({ onContinue }: { onContinue: () => void }) {
  const renderDeliverableIcon = (icon: string) => {
    switch (icon) {
      case 'book':
        return <BookOpen className="h-6 w-6 text-emerald-950 shrink-0" />;
      case 'calendar':
        return <Calendar className="h-6 w-6 text-emerald-950 shrink-0" />;
      case 'phone':
        return <Smartphone className="h-6 w-6 text-emerald-950 shrink-0" />;
      default:
        return <BookOpen className="h-6 w-6 text-emerald-950 shrink-0" />;
    }
  };

  const renderBonusIcon = (icon: string) => {
    switch (icon) {
      case 'community':
        return <Users className="h-6 w-6 text-emerald-950 shrink-0" />;
      case 'shield':
        return <Shield className="h-6 w-6 text-emerald-950 shrink-0" />;
      case 'sleep':
        return <Moon className="h-6 w-6 text-emerald-950 shrink-0" />;
      default:
        return <Shield className="h-6 w-6 text-emerald-950 shrink-0" />;
    }
  };

  return (
    <div className="pt-4 pb-8">
      <h1 className="text-center text-[24px] sm:text-[26px] font-extrabold leading-tight text-gray-900 uppercase">
        VOCÊ VAI RECEBER TUDO ISSO NO SEU WHATSAPP{' '}
        <span aria-hidden="true">👇🎁</span>
      </h1>

      {/* Angolan Product Ecosystem Showcase */}
      <div className="mt-4 rounded-2xl border border-emerald-100 bg-gradient-to-b from-[#F7FBF8] to-white p-3.5 shadow-xs">
        <p className="text-center text-[13px] font-bold leading-snug text-[#145331]">
          Tudo que você precisa para
          <br />
          seguir o protocolo com segurança e orientação
        </p>

        {/* Top row: WhatsApp Support Phone + Protocol Guides */}
        <div className="mt-3 grid grid-cols-12 gap-2.5 items-stretch">
          {/* WhatsApp Chat Mockup with Angolan Doctor */}
          <div className="col-span-6 rounded-2xl border-2 border-gray-800 bg-[#ECE5DD] p-2 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-1.5 rounded-lg bg-[#075E54] px-2 py-1.5 text-white">
              <img
                src={doctorLabImg}
                alt="Dra. Amina da Silva"
                referrerPolicy="no-referrer"
                className="h-6 w-6 rounded-full object-cover object-top shrink-0 border border-white/50"
              />
              <div className="min-w-0">
                <div className="truncate text-[9px] font-bold">Dra. Amina · Angola</div>
                <div className="text-[7px] text-emerald-200">online</div>
              </div>
            </div>
            <div className="my-2 space-y-1.5 text-[8px] leading-tight">
              <div className="ml-auto max-w-[85%] rounded-lg bg-[#DCF8C6] px-2 py-1 text-gray-900 shadow-2xs">
                Dra., posso começar o protocolo hoje?
              </div>
              <div className="mr-auto max-w-[88%] rounded-lg bg-white px-2 py-1 text-gray-900 shadow-2xs">
                Pode sim! Vou orientar passo a passo no seu WhatsApp.
              </div>
              <div className="ml-auto max-w-[75%] rounded-lg bg-[#DCF8C6] px-2 py-1 text-gray-900 shadow-2xs">
                Obrigada! 🙏
              </div>
            </div>
          </div>

          {/* Protocol Ebooks & Calendar Stack */}
          <div className="col-span-6 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-1.5 flex-1">
              <div className="flex flex-col justify-between rounded-xl border border-emerald-200 bg-gradient-to-b from-white to-emerald-50 p-2 text-center shadow-xs">
                <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#159947] text-white">
                  <Shield className="h-3 w-3" />
                </div>
                <div className="mt-1 text-[8px] font-extrabold leading-tight text-[#145331] uppercase">
                  Protocolo de Desparasitação Infantil
                </div>
                <div className="text-[7px] text-gray-500">Passo a passo</div>
              </div>
              <div className="flex flex-col justify-between rounded-xl border border-emerald-200 bg-gradient-to-b from-white to-emerald-50 p-2 text-center shadow-xs">
                <img
                  src="/images/oregano_oil.jpg"
                  alt="Xarope caseiro"
                  referrerPolicy="no-referrer"
                  className="mx-auto h-7 w-full rounded-md object-cover"
                />
                <div className="mt-1 text-[8px] font-extrabold leading-tight text-[#145331] uppercase">
                  Xarope Caseiro Natural
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-emerald-200 bg-[#F0FDF4] px-2.5 py-2">
              <div>
                <div className="text-[8px] font-extrabold text-[#145331] uppercase">
                  Calendário 21 Dias
                </div>
                <div className="text-[7px] text-gray-600">Doses & horários</div>
              </div>
              <Calendar className="h-4 w-4 text-[#159947] shrink-0" />
            </div>
          </div>
        </div>

        {/* Video Portal Modules Grid + Doctor Badge */}
        <div className="mt-3 rounded-xl border border-gray-800 bg-gray-950 p-2.5 text-white shadow-sm">
          <div className="mb-2 flex items-center justify-between text-[9px] text-gray-400">
            <span className="font-bold text-emerald-400">Área de Membros · Desparasitação Kids</span>
            <span>6 Módulos</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="relative overflow-hidden rounded-lg bg-gray-900">
              <img
                src="/images/giardia.jpg"
                alt="Entendendo os Parasitas"
                referrerPolicy="no-referrer"
                className="h-12 w-full object-cover opacity-80"
              />
              <div className="p-1 text-[7.5px] font-semibold leading-tight">
                Entendendo os Parasitas
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-900">
              <img
                src="/images/oregano_oil.jpg"
                alt="Receita Natural"
                referrerPolicy="no-referrer"
                className="h-12 w-full object-cover opacity-80"
              />
              <div className="p-1 text-[7.5px] font-semibold leading-tight">
                Xarope Caseiro: Receita
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-900">
              <img
                src={happyBoyImg}
                alt="Fortalecendo a Imunidade Infantil"
                referrerPolicy="no-referrer"
                className="h-12 w-full object-cover object-top opacity-85"
              />
              <div className="p-1 text-[7.5px] font-semibold leading-tight">
                Imunidade Infantil
              </div>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-2.5 rounded-lg bg-[#145331] p-2">
            <div className="relative shrink-0">
              <img
                src={doctorLabImg}
                alt="Suporte com a Dra. Amina no WhatsApp"
                referrerPolicy="no-referrer"
                className="h-11 w-11 rounded-lg object-cover object-top border border-emerald-300"
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#159947]">
                <Play className="h-2.5 w-2.5 fill-current" />
              </span>
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-extrabold uppercase text-white">
                SUPORTE COM A DRA. AMINA NO WHATSAPP
              </div>
              <div className="text-[8.5px] text-emerald-100">
                Orientação direta para mães e famílias em Angola
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center text-[13px] font-bold tracking-wide text-gray-700">
        🎁 + TODOS ESTES PRESENTES
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-amber-200 bg-[#FAF6EE] p-2 text-center">
          <div className="text-[10px] font-extrabold uppercase text-amber-700">Bónus 1</div>
          <div className="mt-1 text-[10px] font-extrabold leading-tight text-gray-900">
            COMUNIDADE DE MÃES NO WHATSAPP
          </div>
          <p className="mt-1 text-[9px] leading-tight text-gray-600">
            Grupo exclusivo com outras mães para troca e apoio.
          </p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-[#FAF6EE] p-2 text-center">
          <div className="text-[10px] font-extrabold uppercase text-amber-700">Bónus 2</div>
          <div className="mt-1 text-[10px] font-extrabold leading-tight text-gray-900">
            MANUAL DA IMUNIDADE INFANTIL
          </div>
          <p className="mt-1 text-[9px] leading-tight text-gray-600">
            Estratégias práticas para fortalecer a imunidade.
          </p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-[#FAF6EE] p-2 text-center">
          <div className="text-[10px] font-extrabold uppercase text-amber-700">Bónus 3</div>
          <div className="mt-1 text-[10px] font-extrabold leading-tight text-gray-900">
            MANUAL DO SUPER SONO
          </div>
          <p className="mt-1 text-[9px] leading-tight text-gray-600">
            Técnicas para melhorar o sono do seu filho.
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {DELIVERABLES.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 rounded-2xl bg-[#10E261] px-4 py-3.5 shadow-xs"
          >
            {renderDeliverableIcon(item.icon)}
            <span className="flex-1 text-center text-[14px] sm:text-[15px] font-extrabold leading-snug text-gray-950 uppercase">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <h2 className="mt-6 text-center text-[22px] font-extrabold text-gray-900">
        + TODOS estes <span className="text-[#159947]">PRESENTES</span>{' '}
        <span aria-hidden="true">🎁</span>
      </h2>

      <div className="mt-4 space-y-2.5">
        {BONUSES.map((bonus) => (
          <div
            key={bonus.title}
            className="flex items-center gap-3 rounded-2xl bg-[#10E261] px-4 py-3.5 shadow-xs"
          >
            {renderBonusIcon(bonus.icon)}
            <p className="flex-1 text-center text-[14px] sm:text-[15px] font-extrabold leading-snug text-gray-950 uppercase">
              <span className="mr-1.5 text-red-600 line-through decoration-2">
                {bonus.oldPrice}
              </span>
              {bonus.title}
            </p>
          </div>
        ))}
      </div>

      <div className="sticky bottom-3 z-20 mt-6 rounded-2xl bg-white/90 p-1.5 backdrop-blur-xs">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-2xl bg-[#159947] py-4 text-[17px] font-bold tracking-wide text-white shadow-md hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer uppercase"
        >
          PEGAR TODOS OS BÔNUS
        </button>
      </div>
    </div>
  );
}

export function ScarcityStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="pt-4 pb-8">
      <div className="flex items-center justify-center gap-3">
        <span className="text-3xl" aria-hidden="true">🚨</span>
        <h1 className="text-[28px] font-extrabold tracking-tight text-gray-900 uppercase">
          ATENÇÃO
        </h1>
        <span className="text-3xl" aria-hidden="true">🚨</span>
      </div>

      <p className="mt-2 text-center text-[20px] font-extrabold text-[#DC2626] uppercase">
        AS VAGAS SÃO LIMITADAS
      </p>

      <div className="mt-4 rounded-2xl border border-red-100 bg-[#FEF2F2] px-4 py-4 text-center">
        <p className="text-[15px] font-bold leading-relaxed text-[#DC2626] uppercase">
          <span aria-hidden="true">❌ </span>
          EXISTE UM LIMITE MÁXIMO DE <span className="font-extrabold">MAMÃES</span> QUE CONSIGO DAR
          <br />
          <span className="text-gray-900">SUPORTE E TIRAR AS DÚVIDAS</span>
        </p>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border-2 border-orange-500 bg-black shadow-sm">
        <img
          src={mothersCallImg}
          alt="Sessão de suporte em vídeo com mães angolanas acompanhadas pela especialista"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-5 rounded-2xl bg-[#FF2E2E] px-4 py-3.5 text-center shadow-xs">
        <p className="text-[16px] font-extrabold leading-snug text-white uppercase">
          POR ISSO, SEJA RÁPIDA E ENTRE LOGO!
        </p>
      </div>

      <button
        type="button"
        onClick={onContinue}
        className="mt-5 w-full rounded-2xl bg-[#159947] py-4 text-[17px] font-bold tracking-wide text-white shadow-md hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer uppercase"
      >
        CONTINUAR
      </button>
    </div>
  );
}
