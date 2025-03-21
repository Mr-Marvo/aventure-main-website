"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RotatingTextProps = {
  texts: string[];
  transition?: object;
  initial?: keyof typeof variants; // Ensure initial, animate, and exit use valid variant keys
  animate?: keyof typeof variants;
  exit?: keyof typeof variants;
  animatePresenceMode?: "sync" | "wait" | "popLayout";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  auto?: boolean;
  onNext?: (index: number) => void;
  mainClassName?: string;
};

const variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-120%", opacity: 0 },
};

const RotatingText = forwardRef<HTMLSpanElement, RotatingTextProps>(
  (
    {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = "initial",
      animate = "animate",
      exit = "exit",
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      auto = true,
      onNext,
      mainClassName,
      ...rest
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const next = useCallback(() => {
      setCurrentTextIndex((prev) => {
        const nextIndex = (prev + 1) % texts.length;
        onNext?.(nextIndex); // Call onNext if provided
        return nextIndex;
      });
    }, [texts.length, onNext]);

    useEffect(() => {
      if (!auto) return;
      const intervalId = setInterval(next, rotationInterval);
      return () => clearInterval(intervalId);
    }, [next, rotationInterval, auto]);

    return (
      <motion.span className={mainClassName} ref={ref} {...rest}>
        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.span
            key={texts[currentTextIndex]}
            initial={variants[initial]}
            animate={variants[animate]}
            exit={variants[exit]}
            transition={transition}
          >
            {texts[currentTextIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
