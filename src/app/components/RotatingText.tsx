"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RotatingTextProps = {
  texts: string[];
  transition?: object;
  initial?: "initial" | "animate" | "exit"; // Expect strings here to refer to variant keys
  animate?: "initial" | "animate" | "exit"; // Expect strings here to refer to variant keys
  exit?: "initial" | "animate" | "exit"; // Expect strings here to refer to variant keys
  animatePresenceMode?: "sync" | "wait" | "popLayout";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
};

const RotatingText = forwardRef<unknown, RotatingTextProps>((props, ref) => {
  const {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = "initial", // Default to "initial" string
    animate = "animate", // Default to "animate" string
    exit = "exit", // Default to "exit" string
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
  }, [texts.length]);

  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto]);

  // Define the variants object with keys 'initial', 'animate', and 'exit'
  const variants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-120%", opacity: 0 },
  };

  return (
    <motion.span className={mainClassName} {...rest}>
      <AnimatePresence
        mode={animatePresenceMode}
        initial={animatePresenceInitial}
      >
        <motion.span
          key={texts[currentTextIndex]}
          initial={variants[initial]} // Access the variant object by key
          animate={variants[animate]} // Access the variant object by key
          exit={variants[exit]} // Access the variant object by key
          transition={transition}
        >
          {texts[currentTextIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = "RotatingText";
export default RotatingText;
