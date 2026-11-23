export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center select-none">
      <svg
        width={compact ? 40 : 48}
        height={compact ? 42 : 50}
        viewBox="0 0 64 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="8" y1="6" x2="56" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E7B48" />
            <stop offset="100%" stopColor="#145331" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="18" y1="16" x2="42" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9EDB3B" />
            <stop offset="60%" stopColor="#5BB847" />
            <stop offset="100%" stopColor="#26874A" />
          </linearGradient>
        </defs>
        {/* Outer shield */}
        <path
          d="M32 4C22 10 12 11 8 11.5V30C8 46.5 18.5 58.2 32 64C45.5 58.2 56 46.5 56 30V11.5C52 11 42 10 32 4Z"
          fill="#FFFFFF"
          stroke="url(#shieldGrad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Inner shield hairline */}
        <path
          d="M32 8.5C23.5 13.5 15 14.5 12 15V30C12 43.8 20.8 53.8 32 58.8C43.2 53.8 52 43.8 52 30V15C49 14.5 40.5 13.5 32 8.5Z"
          fill="#F7FBF7"
          stroke="#2E9653"
          strokeWidth="1.2"
        />
        {/* Leaf */}
        <path
          d="M32.5 15C22.5 22 19 33 23 44C24.5 48 27.5 51 31.5 52.5C36.5 47.5 41 39 40 28C39.2 21 36 17.2 32.5 15Z"
          fill="url(#leafGrad)"
        />
        {/* Leaf vein */}
        <path
          d="M31.5 52C30.5 40 31.5 28 33 19"
          stroke="#ECFCCB"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M31 38C28 35 26 32.5 24.5 30"
          stroke="#ECFCCB"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M31.5 31C34 28.5 36 26.5 37.2 24"
          stroke="#ECFCCB"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Molecule nodes on top-right */}
        <circle cx="44" cy="21" r="2.2" fill="#1E7B48" />
        <circle cx="48.5" cy="25.5" r="1.8" fill="#2E9653" />
        <circle cx="42.5" cy="27.5" r="2" fill="#1E7B48" />
        <line x1="44" y1="21" x2="48.5" y2="25.5" stroke="#1E7B48" strokeWidth="1.3" />
        <line x1="48.5" y1="25.5" x2="42.5" y2="27.5" stroke="#1E7B48" strokeWidth="1.3" />
        <line x1="44" y1="21" x2="42.5" y2="27.5" stroke="#1E7B48" strokeWidth="1.3" />
      </svg>
      <div className="mt-0.5 text-center leading-none">
        <div className="text-[13px] font-bold tracking-tight text-[#145331]">
          Desparasitação
        </div>
        <div className="mt-0.5 flex items-center justify-center gap-1.5 text-[15px] font-extrabold text-[#1E7B48]">
          <span className="h-[1.5px] w-3 bg-[#78B856] inline-block" />
          <span className="relative inline-flex items-baseline">
            <span>K</span>
            <span className="relative">
              i
              <span
                aria-hidden="true"
                className="absolute -top-0.5 left-1/2 -translate-x-1/2 text-[7px] text-[#F59E0B]"
              >
                ♥
              </span>
            </span>
            <span>ds</span>
          </span>
          <span className="h-[1.5px] w-3 bg-[#78B856] inline-block" />
        </div>
      </div>
    </div>
  );
}
