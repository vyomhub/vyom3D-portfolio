import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../ui/LiveProjectButton';

const projects = [
  {
    id: "01",
    client: "Client",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    id: "02",
    client: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    id: "03",
    client: "Client",
    name: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-32 relative z-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-24 md:mb-32 text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Project
        </h2>

        <div className="flex flex-col relative">
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              totalCards={projects.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const { scrollYProgress: scaleProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scaleProgress, [0, 1], [1, targetScale]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <div ref={containerRef} className="h-[85vh] md:h-[90vh] flex items-start justify-center sticky" style={{ top: `${96 + index * 28}px` }}>
      <motion.div 
        style={{ scale, opacity, y }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col h-[75vh] md:h-[80vh] overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-black text-[#D7E2EA] leading-none text-[clamp(3rem,10vw,100px)]">
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="uppercase font-medium text-[#D7E2EA] opacity-60 tracking-wider text-sm sm:text-base">
                {project.client}
              </span>
              <h3 className="uppercase font-medium text-[#D7E2EA] text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          
          <LiveProjectButton href="#" />
        </div>

        {/* Bottom row: Image grid */}
        <div className="flex-1 flex gap-3 sm:gap-4 md:gap-6 min-h-0">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div className="h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img 
                src={project.images.col1_1} 
                alt="" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img 
                src={project.images.col1_2} 
                alt="" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
          
          <div className="w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
            <img 
              src={project.images.col2} 
              alt="" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
