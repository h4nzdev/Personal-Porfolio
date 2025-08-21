import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Start", href: "#start" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute top-5 flex items-center justify-center w-full h-15 z-100">
        <div className="w-[80%] h-full flex items-center justify-between">
          <h1 className="text-4xl font-bold text-blue-500">HM</h1>

          <button
            onClick={toggleMenu}
            className="w-12 flex items-center justify-between flex-col h-7 cursor-pointer transition-all duration-300"
          >
            {/* Top line */}
            <span
              className={`bg-slate-400 w-full h-1 rounded transition-all duration-500 ${
                isOpen ? "rotate-45 translate-y-3" : ""
              }`}
            ></span>

            {/* Middle line */}
            <span
              className={`bg-slate-400 w-full h-1 rounded transition-all duration-500 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            {/* Bottom line */}
            <span
              className={`bg-slate-400 w-full h-1 rounded transition-all duration-500 ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-20 left-0 w-full bg-gray-900/95 backdrop-blur-md z-50">
          <div className="w-[80%] mx-auto py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-blue-400 transition-colors py-3 text-lg font-medium border-b border-gray-700 last:border-b-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
