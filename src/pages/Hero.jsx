import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br bg-fixed from-slate-900
    via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 relative"
      id="start"
    >
      <Navbar />
      <div className="max-w-4xl mx-auto text-center mt-10">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl text-slate-200 font-light leading-tight mb-6"
        >
          Hi, I'm <span className="text-blue-500 font-bold">Hanz</span>
          <br />
          Your next favorite{" "}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-blue-400 font-semibold"
          >
            Full Stack Developer
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          I build beautiful, functional websites and applications. Let's create
          something amazing together!
        </p>
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full mx-auto mb-2">
            <div className="w-1 h-3 bg-slate-500 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
          <p className="text-slate-500 text-sm">Scroll to explore</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
