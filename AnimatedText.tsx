import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        // Calculate the start and end of this word's progress based on total words
        const start = i / words.length;
        const end = start + (1 / words.length);

        return (
          <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
}

interface WordProps {
  word: string;
  progress: any;
  range: [number, number];
}

function Word({ word, progress, range }: WordProps) {
  const characters = word.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="relative mr-[0.25em] mt-[0.25em]">
      {characters.map((char, i) => {
        const start = range[0] + (step * i);
        const end = range[0] + (step * (i + 1));
        return (
          <Character key={i} char={char} progress={progress} range={[start, end]} />
        );
      })}
    </span>
  );
}

interface CharacterProps {
  char: string;
  progress: any;
  range: [number, number];
}

function Character({ char, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-20 absolute">{char}</span>
      <motion.span style={{ opacity }}>{char}</motion.span>
    </span>
  );
}
