import React from "react";
import { motion } from "framer-motion";

const ShowButton = ({ isShowMore, onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 , delay: 0.5}}
      className="text-white py-3 px-5 bg-slate-700 rounded-full cursor-pointer hover:bg-blue-500"
      onClick={onClick}
    >
      <i
        className={`fa-solid ${isShowMore ? "fa-caret-down" : "fa-caret-up"}`}
      ></i>
      {isShowMore ? " Show More" : " Show Less"}
    </motion.button>
  );
};

export default ShowButton;
