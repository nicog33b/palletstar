import React from "react";
import { motion } from "framer-motion";

const motionTitle = () => {
  const titleh1 = (titulo) => {
    return (
      <motion.h1
        className="text-3xl font-bold text-center mb-4 ff-1 relative inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <span className="relative z-10 framer-title ff-1 ">{titulo}</span>
        <motion.span
          className="absolute bottom-0 left-0 w-full h-2 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 2, duration: 0.5 }}
        />
      </motion.h1>
    );
  };

  return {
    titleh1,
  };
};

export default motionTitle;
