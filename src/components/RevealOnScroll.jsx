import { motion } from "framer-motion";

/**
 * RevealOnScroll.jsx — enveloppe un élément pour le faire apparaître
 * en douceur lorsqu'il entre dans le viewport.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  y = 20,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
