import { X } from 'lucide-react';
import type { LegalDocType } from '../types/quiz';

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

const LEGAL_CONTENT: Record<Exclude<LegalDocType, null>, { title: string; body: string[] }> = {
  terms: {
    title: 'Termos de Utilização e Serviço',
    body: [
      'O programa Desparasitação Kids Angola fornece orientações educativas e protocolos naturais de bem-estar intestinal infantil elaborados com base em literatura científica e fitoterapia tradicional.',
      'As informações apresentadas na avaliação têm caráter educativo e informativo e não substituem consultas médicas presenciais em casos de urgência pediátrica.',
      'Ao avançar na avaliação, o utilizador confirma que fornece dados verdadeiros para personalização das recomendações alimentares e de rotina infantil.',
    ],
  },
  privacy: {
    title: 'Política de Privacidade (Angola)',
    body: [
      'Respeitamos a sua privacidade em conformidade com a Lei n.º 22/11 de Protecção de Dados Pessoais da República de Angola.',
      'Os dados recolhidos (nome, número de WhatsApp +244 e respostas sobre hábitos e sintomas da criança) são utilizados exclusivamente para gerar e enviar o protocolo personalizado.',
      'Não partilhamos, vendemos nem cedemos os seus contactos telefónicos a terceiros.',
    ],
  },
  subscription: {
    title: 'Política de Subscrição e Acesso',
    body: [
      'O acesso ao Protocolo de Desparasitação Infantil e aos bónus digitais é realizado mediante pagamento único em Kwanzas (Kz), sem renovação automática nem cobranças mensais ocultas.',
      'Após a confirmação do pagamento (Multicaixa Express, Referência ou Transferência Bancária), todo o material é disponibilizado de imediato via WhatsApp e área de acesso digital.',
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    body: [
      'Utilizamos armazenamento local essencial apenas para guardar o progresso da sua avaliação para que não perca as suas respostas caso a ligação à internet oscile.',
      'Pode limpar ou reiniciar a sua avaliação a qualquer momento voltando ao início.',
    ],
  },
};

export function LegalModal({ docType, onClose }: LegalModalProps) {
  if (!docType) return null;
  const content = LEGAL_CONTENT[docType];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-3">
          <h2 id="legal-modal-title" className="text-lg font-bold text-gray-900">
            {content.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
          {content.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-[#159947] py-3 text-sm font-bold text-white hover:bg-[#12823c] active:scale-[0.99] transition-all cursor-pointer"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
