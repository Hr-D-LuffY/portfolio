import { motion } from "framer-motion";

/**
 * Scroll-triggered fade/rise-in wrapper. `once` keeps it from re-firing
 * every time the section re-enters the viewport, which reads as calmer.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
  once = true,
  amount = 0.25,
}) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
