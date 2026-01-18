"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const Overlay = () => {
  const t = useTranslations("Accessibility");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const overlayVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
        duration: 1,
        opacity: { duration: 0.3 },
        y: { duration: 1, delay: 0.2 },
      },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -180 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="initial"
          exit="exit"
          variants={overlayVariants}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 dark:bg-neutral-50"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={logoVariants}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 blur-2xl dark:from-primary-400/30 dark:via-secondary-400/30 dark:to-accent-400/30" />
            <div className="p-8">
              <Image
                src="/images/logo.svg"
                width={64}
                height={64}
                alt={t("mupaLogo")}
                priority
                className="drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
