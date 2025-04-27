"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Overlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const overlayVariants = {
    initial: { y: "0%" },
    exit: {
      y: "-100%",
      transition: {
        ease: [0.65, 0, 0.35, 1],
        duration: 1.5,
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 dark:bg-neutral-100"
        >
          <div className="animate-[spin_1s_linear_2] p-8 text-center">
            <Image
              src="/images/logo.svg"
              width={36}
              height={36}
              alt="Site Logo"
              className="invert dark:invert-0"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
