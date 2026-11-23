import { ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';

interface QuizHeaderProps {
  progressPercent: number;
  canGoBack: boolean;
  onBack: () => void;
  showLogo?: boolean;
}

export function QuizHeader({
  progressPercent,
  canGoBack,
  onBack,
  showLogo = true,
}: QuizHeaderProps) {
  const clamped = Math.max(4, Math.min(100, progressPercent));

  return (
    <header className="w-full pt-3 pb-2 bg-white">
      {showLogo ? (
        <div className="relative flex items-center justify-center min-h-[68px] px-1">
          {canGoBack && (
            <button
              type="button"
              onClick={onBack}
              aria-label="Voltar ao passo anterior"
              className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full text-gray-800 hover:bg-gray-100 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5 stroke-[2.2]" />
            </button>
          )}
          <Logo />
        </div>
      ) : (
        <div className="h-3" />
      )}

      <div className="mt-2 h-[7px] w-full overflow-hidden rounded-full bg-[#E6F4EA]">
        <div
          className="h-full rounded-full bg-[#159947] transition-all duration-300 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </header>
  );
}
