import { useState, type FormEvent } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  Lock,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Building2,
  Receipt,
  BookOpen,
} from 'lucide-react';
import type { PaymentMethod, QuizState } from '../../types/quiz';

interface AngolaCheckoutStepProps {
  state: QuizState;
  onUpdate: (patch: Partial<QuizState>) => void;
  onRestart: () => void;
}

const OFFER_PRICE_KZ = '9.500 Kz';
const OLD_PRICE_KZ = '30.000 Kz';
const MULTICAIXA_ENTITY = '00548';
const ANGOLA_IBAN = 'AO06 0040 0000 8492 0134 1012 8';

export function AngolaCheckoutStep({
  state,
  onUpdate,
  onRestart,
}: AngolaCheckoutStepProps) {
  const [mcxPhone, setMcxPhone] = useState(
    state.mcxPhone || state.whatsappNumber || ''
  );
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showProtocolPreview, setShowProtocolPreview] = useState(false);

  const generatedReference =
    state.orderCode || `942 ${Math.floor(100 + Math.random() * 899)} ${Math.floor(100 + Math.random() * 899)}`;

  const handleCopy = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handleConfirmOrder = (e: FormEvent) => {
    e.preventDefault();
    if (state.paymentMethod === 'mcx') {
      const digits = mcxPhone.replace(/\D/g, '');
      if (digits.length !== 9 || !digits.startsWith('9')) {
        setError('Informe um número Multicaixa Express válido de Angola (9 dígitos, ex: 923456789).');
        return;
      }
    }
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      const code = `DK-AO-${Math.floor(100000 + Math.random() * 899999)}`;
      onUpdate({
        mcxPhone: mcxPhone.replace(/\D/g, ''),
        orderCompleted: true,
        orderCode: code,
      });
      setIsSubmitting(false);
    }, 650);
  };

  const whatsappSummaryUrl = (() => {
    const childLabel = state.childSex === 'Feminino' ? 'filha' : 'filho';
    const msg = encodeURIComponent(
      `Olá Dra. Amina! Sou ${state.parentName || 'mãe em Angola'}. Concluí o meu pedido (${state.orderCode || 'Desparasitação Kids'}) para o meu ${childLabel}. Quero receber o Protocolo de Desparasitação Infantil + Bónus no meu WhatsApp (+244 ${state.whatsappNumber}).`
    );
    return `https://wa.me/244${state.whatsappNumber || '923000000'}?text=${msg}`;
  })();

  if (state.orderCompleted) {
    return (
      <div className="pt-6 pb-10">
        <div className="rounded-2xl border border-green-200 bg-[#F0FDF4] p-5 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#159947] text-white">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="mt-3 text-[22px] font-extrabold text-gray-900">
            Inscrição Confirmada, {state.parentName || 'Mamã'}!
          </h1>
          <p className="mt-1.5 text-sm text-gray-600">
            Pedido <span className="font-bold text-gray-900 tabular-nums">{state.orderCode}</span> registado para envio imediato ao WhatsApp{' '}
            <span className="font-semibold text-gray-900 tabular-nums">+244 {state.whatsappNumber}</span>.
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-gray-900">
            Resumo do Protocolo Personalizado (Angola)
          </h2>
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <div className="rounded-xl bg-gray-50 p-3">
              <div className="text-gray-500">Perfil Infantil</div>
              <div className="mt-0.5 font-bold text-gray-900">
                {state.childSex || 'Criança'} · {state.childrenCount || '1 filho'}
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              <div className="text-gray-500">Foco Principal</div>
              <div className="mt-0.5 font-bold text-gray-900">
                Giardia lamblia · Natural
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              <div className="text-gray-500">Restrição Alimentar</div>
              <div className="mt-0.5 font-bold text-gray-900 truncate">
                {state.dietaryRestriction || 'Sem restrições'}
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              <div className="text-gray-500">Pagamento ({state.paymentMethod.toUpperCase()})</div>
              <div className="mt-0.5 font-bold text-[#159947] tabular-nums">
                {OFFER_PRICE_KZ}
              </div>
            </div>
          </div>

          {state.dislikedFoods.length > 0 && (
            <p className="text-xs text-gray-600">
              <span className="font-semibold text-gray-900">Adaptação alimentar:</span>{' '}
              Receitas ajustadas sem {state.dislikedFoods.join(', ')}.
            </p>
          )}
        </div>

        <div className="mt-5 space-y-3">
          <a
            href={whatsappSummaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#159947] py-4 text-[16px] font-bold text-white shadow-md hover:bg-[#12823c] active:scale-[0.99] transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            ABRIR PROTOCOLO NO WHATSAPP
          </a>

          <button
            type="button"
            onClick={() => setShowProtocolPreview((v) => !v)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white py-3.5 text-[15px] font-bold text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <BookOpen className="h-4 w-4 text-[#159947]" />
            {showProtocolPreview ? 'Ocultar Prévia do Protocolo' : 'Ver Prévia do Guia e Calendário'}
          </button>
        </div>

        {showProtocolPreview && (
          <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-3 text-sm text-gray-700">
            <h3 className="font-bold text-emerald-950">
              Prévia: Fase 1 — Preparação Intestinal (Dias 1 a 3)
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs leading-relaxed">
              <li>
                <strong>Hidratação reforçada:</strong> água fervida ou mineral ao longo do dia e chás suaves adequados à idade infantil.
              </li>
              <li>
                <strong>Base do Xarope Caseiro:</strong> combinação natural com óleo de orégãos diluído + ingrediente simples de mercado local (sementes de abóbora / alho triturado e mel para maiores de 2 anos).
              </li>
              <li>
                <strong>Calendário de 21 dias:</strong> ciclo completo para eliminar parasitas adultos e impedir a eclosão de novos ovos.
              </li>
            </ul>
          </div>
        )}

        <button
          type="button"
          onClick={onRestart}
          className="mt-6 w-full text-center text-xs font-medium text-gray-500 underline hover:text-gray-800 cursor-pointer"
        >
          Fazer uma nova avaliação
        </button>
      </div>
    );
  }

  return (
    <div className="pt-4 pb-10">
      <div className="rounded-2xl border border-emerald-200 bg-[#F0FDF4] p-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#159947]">
              Vaga Reservada · Angola
            </p>
            <h1 className="mt-0.5 text-[20px] font-extrabold text-gray-900">
              Protocolo Desparasitação Kids + Todos os Bónus
            </h1>
          </div>
        </div>

        <div className="mt-3 flex items-baseline justify-between border-t border-emerald-200/70 pt-3">
          <div>
            <span className="text-xs text-gray-500 line-through tabular-nums">
              De {OLD_PRICE_KZ}
            </span>
            <p className="text-xs font-medium text-gray-700">
              Pagamento único · Sem mensalidades
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-extrabold text-[#159947] tabular-nums">
              {OFFER_PRICE_KZ}
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleConfirmOrder} className="mt-5 space-y-4">
        <div>
          <h2 className="text-sm font-bold text-gray-900">
            Escolha o método de pagamento em Angola
          </h2>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {(
              [
                { id: 'mcx', label: 'MCX Express', icon: Smartphone },
                { id: 'reference', label: 'Referência', icon: Receipt },
                { id: 'iban', label: 'Transf. IBAN', icon: Building2 },
              ] as { id: PaymentMethod; label: string; icon: typeof Smartphone }[]
            ).map(({ id, label, icon: Icon }) => {
              const active = state.paymentMethod === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setError('');
                    onUpdate({ paymentMethod: id });
                  }}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'border-[#159947] bg-[#F0FDF4] text-[#145331] shadow-xs'
                      : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="whitespace-nowrap">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {state.paymentMethod === 'mcx' && (
          <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-3">
            <p className="text-xs leading-relaxed text-gray-600">
              Receba o pedido de confirmação diretamente no seu aplicativo{' '}
              <strong className="text-gray-900">Multicaixa Express</strong>.
            </p>
            <div>
              <label htmlFor="mcx-phone" className="block text-xs font-semibold text-gray-700 mb-1">
                Número associado ao Multicaixa Express
              </label>
              <div className="flex items-center overflow-hidden rounded-xl border border-gray-300 focus-within:border-[#159947]">
                <span className="border-r border-gray-200 bg-gray-50 px-3 py-3 text-xs font-bold text-gray-700">
                  🇦🇴 +244
                </span>
                <input
                  id="mcx-phone"
                  type="tel"
                  inputMode="numeric"
                  value={mcxPhone}
                  onChange={(e) => {
                    setMcxPhone(e.target.value.replace(/\D/g, '').slice(0, 9));
                    if (error) setError('');
                  }}
                  placeholder="923456789"
                  className="w-full px-3 py-3 text-sm text-gray-900 focus:outline-none tabular-nums"
                />
              </div>
            </div>
          </div>
        )}

        {state.paymentMethod === 'reference' && (
          <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-2.5 text-xs">
            <p className="text-gray-600">
              Pague em qualquer ATM Multicaixa ou Internet Banking (BAI Directo, BFA Net, Atlântico) com os dados abaixo:
            </p>
            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2.5">
              <div>
                <span className="text-gray-500">Entidade: </span>
                <strong className="text-gray-900 tabular-nums">{MULTICAIXA_ENTITY}</strong>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('entidade', MULTICAIXA_ENTITY)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#159947] cursor-pointer"
              >
                {copiedField === 'entidade' ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copiedField === 'entidade' ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2.5">
              <div>
                <span className="text-gray-500">Referência: </span>
                <strong className="text-gray-900 tabular-nums">{generatedReference}</strong>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('ref', generatedReference.replace(/\s/g, ''))}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#159947] cursor-pointer"
              >
                {copiedField === 'ref' ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copiedField === 'ref' ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2.5">
              <span className="text-gray-500">Valor exato:</span>
              <strong className="text-gray-900 tabular-nums">{OFFER_PRICE_KZ}</strong>
            </div>
          </div>
        )}

        {state.paymentMethod === 'iban' && (
          <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-2.5 text-xs">
            <p className="text-gray-600">
              Faça transferência interbancária expressa (Kwanza) para o IBAN abaixo e confirme para liberar no WhatsApp:
            </p>
            <div className="rounded-xl bg-gray-50 p-3 space-y-1.5">
              <div className="text-gray-500">Banco BAI / BFA · Desparasitação Kids Angola</div>
              <div className="flex items-center justify-between gap-2">
                <strong className="text-gray-900 tabular-nums break-all">{ANGOLA_IBAN}</strong>
                <button
                  type="button"
                  onClick={() => handleCopy('iban', ANGOLA_IBAN)}
                  className="inline-flex shrink-0 items-center gap-1 font-bold text-[#159947] cursor-pointer"
                >
                  {copiedField === 'iban' ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedField === 'iban' ? 'Copiado' : 'Copiar'}
                </button>
              </div>
            </div>
          </div>
        )}

        {error && (
          <p role="alert" className="text-xs font-semibold text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#159947] py-4 text-[16px] font-extrabold text-white shadow-md hover:bg-[#12823c] active:scale-[0.99] disabled:opacity-70 transition-all cursor-pointer uppercase"
        >
          <Lock className="h-4 w-4" />
          {isSubmitting ? 'A processar...' : `CONFIRMAR E RECEBER POR ${OFFER_PRICE_KZ}`}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
          <ShieldCheck className="h-4 w-4 text-[#159947]" />
          <span>Garantia de 7 dias · Entrega imediata no WhatsApp (+244)</span>
        </div>
      </form>
    </div>
  );
}
