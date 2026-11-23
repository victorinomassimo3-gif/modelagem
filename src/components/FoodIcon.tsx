export function FoodIcon({ id }: { id: string }) {
  switch (id) {
    case 'Beterraba':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M21 10C23 6 27 5 28 7C29 9 25 12 22 12" fill="#4D9E3A" />
          <path d="M18 11C17 6 20 3 22 5C23 6 21 10 19 12" fill="#6BBF47" />
          <path d="M18 11C11 11 8 18 10 24C11.5 28.5 17 31 19 32C21 30 25.5 26 26 20C26.5 14 23 11 18 11Z" fill="#B91C4A" />
          <path d="M10 31C12 31 15 29 17 28" stroke="#9F1239" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'Feijão':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <ellipse cx="14" cy="12" rx="6.5" ry="3.8" transform="rotate(-28 14 12)" fill="#993018" />
          <ellipse cx="23" cy="17" rx="6.5" ry="3.8" transform="rotate(35 23 17)" fill="#7C2410" />
          <ellipse cx="14" cy="24" rx="6.5" ry="3.8" transform="rotate(14 14 24)" fill="#8B2A14" />
          <circle cx="14" cy="11.5" r="1.2" fill="#FDE68A" />
          <circle cx="22.5" cy="17" r="1.2" fill="#FDE68A" />
          <circle cx="14" cy="24" r="1.2" fill="#FDE68A" />
        </svg>
      );
    case 'Brócolos':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M15 20H21L19.5 31H16.5L15 20Z" fill="#84CC16" />
          <circle cx="12" cy="14" r="6" fill="#4D7C0F" />
          <circle cx="24" cy="14" r="6" fill="#3F6212" />
          <circle cx="18" cy="10" r="6.5" fill="#65A30D" />
          <circle cx="15" cy="17" r="4.5" fill="#65A30D" />
          <circle cx="21" cy="17" r="4.5" fill="#4D7C0F" />
        </svg>
      );
    case 'Frutas':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M18 6C15 12 12 16 11 21" stroke="#4D7C0F" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M18 6C21 12 24 16 25 21" stroke="#4D7C0F" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M18 6C22 5 25 7 24 10C21 10 19 8 18 6Z" fill="#65A30D" />
          <circle cx="11.5" cy="24.5" r="5.5" fill="#DC2626" />
          <circle cx="24.5" cy="24.5" r="5.5" fill="#B91C1C" />
          <circle cx="9.8" cy="22.8" r="1.3" fill="#FCA5A5" />
          <circle cx="22.8" cy="22.8" r="1.3" fill="#FCA5A5" />
        </svg>
      );
    case 'Espinafre':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M9 28C9 17 17 9 27 8C26 19 19 27 9 28Z" fill="#4D9E3A" />
          <path d="M9 28C15 22 21 15 26 9" stroke="#D9F99D" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="15" cy="20" r="2.2" fill="#84CC16" />
          <circle cx="19" cy="16" r="2" fill="#84CC16" />
          <circle cx="22.5" cy="12.5" r="1.7" fill="#84CC16" />
        </svg>
      );
    case 'Ovo':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M18 5C12.5 5 8.5 14 8.5 21.5C8.5 27.5 12.8 31.5 18 31.5C23.2 31.5 27.5 27.5 27.5 21.5C27.5 14 23.5 5 18 5Z" fill="#FDBA74" />
          <circle cx="14" cy="15" r="1" fill="#EA580C" opacity="0.5" />
          <circle cx="21" cy="20" r="1.2" fill="#EA580C" opacity="0.45" />
          <circle cx="16" cy="25" r="0.9" fill="#EA580C" opacity="0.45" />
        </svg>
      );
    case 'Cenoura':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M23 11C25 7 29 6 30 8C30 10 26 12 23 12" fill="#22C55E" />
          <path d="M22 10C22 6 25 4 27 6" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M22 11C25 14 24 18 20 22L10 30C8.5 31 6.5 29 7.5 27.5L15 17C18 13 20 10 22 11Z" fill="#F97316" />
          <path d="M16 17L19 19M13 21L15.5 23" stroke="#C2410C" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'Peixe':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M27 18L33 12V24L27 18Z" fill="#0284C7" />
          <path d="M5 18C9 11 20 10 28 18C20 26 9 25 5 18Z" fill="#38BDF8" />
          <path d="M15 12L19 7L21 12" fill="#0284C7" />
          <circle cx="10.5" cy="16.5" r="1.5" fill="#0F172A" />
        </svg>
      );
    case 'Tomate':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <circle cx="18" cy="20" r="11" fill="#EF4444" />
          <path d="M18 9L15 13L11 11L15 14L18 11L21 14L25 11L21 13L18 9Z" fill="#16A34A" />
          <circle cx="13.5" cy="17" r="2" fill="#FCA5A5" opacity="0.65" />
        </svg>
      );
    case 'Fígado':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M9 22C7 17 11 10 18 9C25 8 29 14 27 20C25 26 17 29 12 26L8 29L6 26L9 22Z" fill="#DC6B4A" />
          <ellipse cx="19" cy="18" rx="6" ry="4.5" fill="#FDE68A" />
          <circle cx="19" cy="18" r="2.2" fill="#B91C1C" />
        </svg>
      );
    case 'Alface':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M18 6C12 6 8 12 9 20C10 26 14 30 18 30C22 30 26 26 27 20C28 12 24 6 18 6Z" fill="#65A30D" />
          <path d="M12 13C14 19 16 25 18 30C20 25 22 19 24 13" stroke="#ECFCCB" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M18 8V30" stroke="#ECFCCB" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'Pepino':
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
          <rect
            x="6"
            y="14"
            width="24"
            height="9"
            rx="4.5"
            transform="rotate(-38 18 18.5)"
            fill="#16A34A"
          />
          <circle cx="14" cy="21" r="1" fill="#14532D" />
          <circle cx="18" cy="17" r="1" fill="#14532D" />
          <circle cx="22" cy="14" r="1" fill="#14532D" />
        </svg>
      );
    default:
      return null;
  }
}

export function GenderBadge({ sex }: { sex: 'Masculino' | 'Feminino' }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B66C3] text-white shadow-xs">
      {sex === 'Masculino' ? (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="5.5" r="2.3" />
          <path d="M9.5 9C8.4 9 7.5 9.9 7.5 11V15.2H9.2V21H11.4V15.8H12.6V21H14.8V15.2H16.5V11C16.5 9.9 15.6 9 14.5 9H9.5Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="5.5" r="2.3" />
          <path d="M9.8 9C8.8 9 8 9.7 7.7 10.7L6.5 15.5H8.8L8.2 18H10.3V21H11.8V18H12.2V21H13.7V18H15.8L15.2 15.5H17.5L16.3 10.7C16 9.7 15.2 9 14.2 9H9.8Z" />
        </svg>
      )}
    </div>
  );
}
