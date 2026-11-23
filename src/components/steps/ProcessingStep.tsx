import { useEffect, useState } from 'react';

interface ProcessingStepProps {
  title: string;
  subtitle: string;
  startPercent?: number;
  durationMs?: number;
  onComplete: () => void;
}

export function ProcessingStep({
  title,
  subtitle,
  startPercent = 12,
  durationMs = 2400,
  onComplete,
}: ProcessingStepProps) {
  const [percent, setPercent] = useState(startPercent);

  useEffect(() => {
    let completed = false;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const ratio = Math.min(1, elapsed / durationMs);
      // Ease-out curve so it feels organic like the screenshots (passes 40% / 65% smoothly)
      const eased = 1 - Math.pow(1 - ratio, 2);
      const nextValue = Math.round(startPercent + (100 - startPercent) * eased);
      setPercent(nextValue);

      if (ratio < 1) {
        frameId = requestAnimationFrame(tick);
      } else if (!completed) {
        completed = true;
        timeoutId = window.setTimeout(onComplete, 280);
      }
    };

    let frameId = requestAnimationFrame(tick);
    let timeoutId: number | undefined;

    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [durationMs, onComplete, startPercent]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center py-20 px-1">
      <div className="w-full max-w-md">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-[20px] sm:text-[23px] font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          <span className="text-base font-bold text-gray-900 tabular-nums shrink-0">
            {percent}%
          </span>
        </div>

        <div className="mt-3 h-[11px] w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-[#159947] transition-[width] duration-75 ease-linear"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="mt-5 text-center text-[17px] leading-relaxed text-gray-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
