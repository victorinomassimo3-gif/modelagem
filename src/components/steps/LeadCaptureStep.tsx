import { useState, type FormEvent } from 'react';

interface LeadCaptureStepProps {
  initialName: string;
  initialWhatsapp: string;
  onSubmit: (name: string, whatsapp: string) => void;
}

function formatAngolaPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 9);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
}

export function LeadCaptureStep({
  initialName,
  initialWhatsapp,
  onSubmit,
}: LeadCaptureStepProps) {
  const [name, setName] = useState(initialName);
  const [phone, setPhone] = useState(formatAngolaPhone(initialWhatsapp));
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanDigits = phone.replace(/\D/g, '');

    if (cleanName.length < 2) {
      setError('Por favor, insira o seu nome.');
      return;
    }

    if (cleanDigits.length !== 9 || !cleanDigits.startsWith('9')) {
      setError('Insira um número de WhatsApp de Angola válido (9 dígitos, ex: 923 456 789).');
      return;
    }

    setError('');
    onSubmit(cleanName, cleanDigits);
  };

  return (
    <div className="pt-8 pb-10">
      <h1 className="text-center text-[22px] font-bold tracking-tight text-gray-900">
        Seu protocolo está pronto!
      </h1>
      <p className="mt-3 text-center text-[17px] leading-snug text-gray-500">
        Só um último passo para receber seu protocolo personalizado direto no seu WhatsApp
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4" noValidate>
        <div>
          <label htmlFor="parent-name" className="block text-[15px] font-medium text-gray-500 mb-1.5">
            Nome
          </label>
          <input
            id="parent-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError('');
            }}
            placeholder="Qual o seu nome..."
            autoComplete="name"
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder:italic placeholder:text-gray-400 focus:border-[#159947] focus:outline-none focus:ring-2 focus:ring-[#159947]/20"
          />
        </div>

        <div>
          <label htmlFor="parent-whatsapp" className="block text-[15px] font-medium text-gray-500 mb-1.5">
            Telemóvel / WhatsApp (Angola)
          </label>
          <div className="flex items-center overflow-hidden rounded-2xl border border-gray-300 bg-white focus-within:border-[#159947] focus-within:ring-2 focus-within:ring-[#159947]/20">
            <div className="flex items-center gap-1.5 border-r border-gray-200 bg-gray-50 px-3.5 py-4 text-sm font-semibold text-gray-700 shrink-0">
              <span aria-hidden="true">🇦🇴</span>
              <span>+244</span>
            </div>
            <input
              id="parent-whatsapp"
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => {
                setPhone(formatAngolaPhone(e.target.value));
                if (error) setError('');
              }}
              placeholder="Qual o seu WhatsApp (923 456 789)..."
              autoComplete="tel"
              className="w-full bg-transparent px-4 py-4 text-base text-gray-900 placeholder:italic placeholder:text-gray-400 focus:outline-none tabular-nums"
            />
          </div>
        </div>

        {error && (
          <p role="alert" className="text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="mt-2 w-full rounded-2xl bg-[#34B764] py-4 text-[17px] font-bold text-white shadow-sm hover:bg-[#159947] active:scale-[0.99] transition-all cursor-pointer"
        >
          Continuar
        </button>
      </form>
    </div>
  );
}
