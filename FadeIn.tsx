import { useMemo, type ElementType } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type FadeInProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  children: React.ReactNode;
} & HTMLMotionProps<any>;

export function FadeIn<T extends ElementType = "div">({
  as,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  ...props
}: FadeInProps<T>) {
  const Component = useMemo(() => {
    const el = as || "div";
    return (motion as any)[el as string] || motion.div;
  }, [as]);

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
}
