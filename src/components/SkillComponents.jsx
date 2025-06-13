import React from "react";
import {motion} from "framer-motion";

const SkillComponents = ({ img, title, percent }) => {
  return (
    <motion.li
    initial={{opacity: 0, y: 100, filter: "blur(5px)"}}
    whileInView={{opacity: 1, y: 0, filter: "blur(0)"}}
    transition={{duration: 1}}
    viewport={{once: true}}
    className="flex w-full p-2 items-center">
      <img src={img} className="w-10" />
      <div className="w-full ml-2 mb-1">
        <div className="flex justify-between mb-1">
          <p className="text-slate-200">{title}</p>
          <p className="text-slate-400">{percent}%</p>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded overflow-hidden">
          <motion.div
            initial={{width: 0}}
            animate={{width: percent + "%"}}
            transition={{duration: 1, delay: 1.2}}
            className="h-full bg-slate-400 rounded transition-all duration-700"
          ></motion.div>
        </div>
      </div>
    </motion.li>
  );
};

export default SkillComponents;
