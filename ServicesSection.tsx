
import { FadeIn } from '../ui/FadeIn';

const services = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    name: "🤖AI Automation",
    desc: "High-quality, “We build AI systems that run your business 24/7.”."
  },
  {
    num: "03",
    name: "🔥 AI Voice Agent",
    desc: "AI voice agent that answers property calls, qualifies buyers, and books site visits automatically.."
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <FadeIn y={40}>
        <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[clamp(3rem,12vw,160px)]">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            y={30}
            className={`flex flex-col md:flex-row md:items-start py-8 sm:py-10 md:py-12 border-[#0C0C0C] ${
              i !== services.length - 1 ? 'border-b-[1px] border-opacity-15' : ''
            }`}
          >
            <div className="md:w-[25%] mb-4 md:mb-0">
              <span className="font-black text-[#0C0C0C] leading-none text-[clamp(3rem,10vw,140px)]">
                {service.num}
              </span>
            </div>
            
            <div className="md:w-[75%] flex flex-col pt-2 md:pt-4">
              <h3 className="font-medium uppercase mb-4 text-[clamp(1rem,2.2vw,2.1rem)]">
                {service.name}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
