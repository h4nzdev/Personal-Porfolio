import React from "react";
import { motion } from "framer-motion";

const Certificates = ({ img, title, issuer, date, description, index, delay }) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: delay}}
      viewport={{once: true}}
      key={index}
      className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 w-90 md:w-full shadow-xl border border-gray-700 hover:border-blue-400 transition-colors"
    >
      <div className="flex items-start gap-4">
        {/* Certificate Image */}
        <div className="flex-shrink-0">
          <img
            src={img}
            alt={title}
            className="w-20 h-20 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Certificate Details */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-blue-400 text-sm font-medium mb-1">{issuer}</p>
          <p className="text-gray-300 text-sm mb-2">{date}</p>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;
