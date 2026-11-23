interface CircularGaugeProps {
  percentage: number;
  color: string;
  label: string;
}

export function CircularGauge({ percentage, color, label }: CircularGaugeProps) {
  const size = 104;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-3 py-5 shadow-xs">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <span className="absolute text-xl font-extrabold text-gray-900 tabular-nums">
          {percentage}%
        </span>
      </div>
      <p className="mt-4 text-center text-[13.5px] leading-snug text-gray-500">
        {label}
      </p>
    </div>
  );
}
