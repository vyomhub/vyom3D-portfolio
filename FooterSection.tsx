
import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/ContactButton';

export function FooterSection() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 px-5 border-t border-[#D7E2EA]/10 flex flex-col items-center justify-center text-center">
      <FadeIn y={20}>
        <h2 className="text-[#D7E2EA] font-black uppercase tracking-tight text-[clamp(2.5rem,8vw,5rem)] mb-6">
          Ready to Start?
        </h2>
      </FadeIn>
      
      <FadeIn delay={0.2} y={20}>
        <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-md mx-auto mb-10 text-[clamp(1rem,2vw,1.25rem)] opacity-80">
          Let's create something striking and unforgettable together.
        </p>
      </FadeIn>

      <FadeIn delay={0.4} y={20}>
        {/* Let's build button with WhatsApp link */}
        <ContactButton href="https://wa.me/916267598929" className="!px-12 !py-5 sm:!px-16 sm:!py-6 text-base sm:text-lg">
          Let's Build
        </ContactButton>
      </FadeIn>

      <FadeIn delay={0.6} y={20} className="mt-20 sm:mt-24 w-full flex justify-between items-center text-[#D7E2EA] opacity-40 text-xs sm:text-sm font-medium uppercase tracking-widest max-w-7xl">
        <span>© 2026 Vyom.</span>
        <span>All Rights Reserved.</span>
      </FadeIn>
    </footer>
  );
}
