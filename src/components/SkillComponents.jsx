import React from "react";
import { motion } from "framer-motion";

const SkillComponents = ({ img, title, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 100, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
      key={index}
    >
      <img src={img} className="w-12 h-12 mb-2 object-contain" alt={title} />
      <p className="text-slate-200 text-sm text-center">{title}</p>
    </motion.li>
  );
};

export default SkillComponents;
