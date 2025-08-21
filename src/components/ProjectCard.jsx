import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  img,
  title,
  description,
  tech,
  github,
  link,
  delay,
  setSelectedId,
}) => {
  return (
    <motion.div
      onClick={() => setSelectedId(id)}
      initial={{ y: 50, opacity: 0, filter: "blur(5px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: delay }}
      viewport={{ once: true }}
      className="w-full bg-slate-900 flex flex-col rounded-xl overflow-hidden 
      hover:border hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 
      duration-300 transition-all group"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div
          className="bg-cover bg-center w-full h-48 transition-transform duration-300 
          group-hover:scale-105"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title and Links Row */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl text-white font-semibold leading-tight flex-1 mr-4">
            {title}
          </h2>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 
              hover:scale-110 transform"
              aria-label="Visit project"
            >
              <i className="fa-solid fa-link text-lg"></i>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 
              hover:scale-110 transform"
              aria-label="View source code"
            >
              <i className="fa-brands fa-github text-lg"></i>
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1 line-clamp-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tech.map((techItem, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 bg-slate-700/60 
                text-slate-200 text-xs font-medium rounded-full 
                hover:bg-slate-600/60 transition-colors duration-200
                border border-slate-600/50"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
