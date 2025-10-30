import React from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const DarkTheme = () => {
  const [change, setChange] = useState<boolean>(true);

  return (
    <motion.div
      className="relative z-0 flex justify-center items-center p-4 rounded"
      initial={{
        opacity: 0,
        scale: 0.5,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 0.7,
        backgroundColor: "#d1d5db",
      }}
    >
      <motion.button
        onClick={() => setChange(!change)}
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="z-10"
      >
        {change ? <Moon /> : <Sun />}
      </motion.button>
    </motion.div>
  );
};

export default DarkTheme;
