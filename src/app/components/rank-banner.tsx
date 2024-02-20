"use client";
import React, { useState } from "react";
import { Variants, motion } from "framer-motion";
import clsx from "clsx";
import useSound from "use-sound";

export default function RankBanner() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [playUnfurl] = useSound("/unfurl.mp4", {
    playbackRate: 2,
    volume: 0.5,
    interrupt: true,
  });

  const [playFurl] = useSound("/furl.mp4", {
    playbackRate: 3,
    volume: 0.5,
    interrupt: true,
  });

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "retracted"}
      whileHover={{ scale: 1.1 }}
      onClick={() => {
        isExpanded ? playFurl() : playUnfurl();
        setIsExpanded((prev) => !prev);
      }}
      whileTap={{ scale: 0.95 }}
      variants={variants}
      transition={{ easings: ["easeIn", "easeOut"] }}
      className="absolute flex flex-col right-[20%] top-0 z-[9999] w-[80px] "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded((prev) => !prev);
        }}
        className="absolute bottom-[-16px] left-0 h-[16px] w-[80px] z-10 cursor-pointer"
      />
      <div
        className={clsx(
          "relative flex-1 w-full border  border-t-0 cursor-pointer  flex justify-center rounded-b-md",
          isExpanded
            ? "bg-blue-nyanza border-secondary-100 drop-shadow-glow-bg"
            : "bg-bg-50 border-blue-tiffany"
        )}
      >
        {isExpanded ? (
          <motion.p
            className="text-bg-100"
            animate={isExpanded ? "expanded" : "retracted"}
            variants={textVariants}
            transition={{ easings: ["easeIn", "easeOut"], duration: 500 }}
          >
            Rank 1
          </motion.p>
        ) : null}
      </div>
    </motion.div>
  );
}

const variants: Variants = {
  expanded: {
    height: 160,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  retracted: {
    height: 20,
    transition: {
      y: { stiffness: 1000 },
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const textVariants: Variants = {
  expanded: {
    opacity: 1,
    y: 74,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  retracted: {
    opacity: 0,
    y: -10,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
