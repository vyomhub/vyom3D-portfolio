
import { cn } from './ContactButton';

interface LiveProjectButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export function LiveProjectButton({ children = "Live Project", className, ...props }: LiveProjectButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors hover:bg-[#D7E2EA]/10 active:scale-95",
        "px-8 py-3 sm:px-10 sm:py-3.5",
        "text-sm sm:text-base",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
