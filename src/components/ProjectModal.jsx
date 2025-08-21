import React, { useState } from "react";
import { projects } from "../data/projects";

const ProjectModal = ({ selectedId, setSelectedId }) => {
  const selectedProject = projects.find((proj) => proj.id === selectedId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 3);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 3) % 3);
  };

  console.log(selectedProject);

  return (
    <div onClick={() => setSelectedId(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 md:overflow-y-hidden md:max-h-auto overflow-y-auto rounded-xl max-w-4xl w-full mx-4 overflow-hidden border border-slate-700">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold text-white">
            {selectedProject.title}
          </h2>
          <button
            onClick={() => setSelectedId(null)}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto">
          <div className="p-6">
            {/* Image Carousel */}
            <div className="relative mb-6">
              <div className="relative max-h-[90vh] md:max-h-100 rounded-lg overflow-hidden">
                <img
                  src={`${selectedProject.images[currentImageIndex]}`}
                  alt={`Project screenshot ${currentImageIndex + 1}`}
                  className="object-cover w-full h-full"
                />

                {/* Carousel Navigation */}
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 
                                    bg-black/50 hover:bg-black/70 text-white p-2 rounded-full 
                                    transition-colors duration-200"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 
                                    bg-black/50 hover:bg-black/70 text-white p-2 rounded-full 
                                    transition-colors duration-200"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex
                          ? "bg-blue-500"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Description
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 bg-slate-700/60 
                                        text-slate-200 text-sm font-medium rounded-full 
                                        border border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
