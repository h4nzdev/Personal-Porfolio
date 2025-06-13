import { motion } from "framer-motion";

const ProjectCard = ({ img, title, description, tech, github, link, delay }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, filter: "blur(5px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: delay }}
      viewport={{once: true}}
      className="w-full h-[300px] bg-slate-900 flex flex-col rounded-lg p-3 
      hover:border hover:border-blue-500 duration:1000 transition-all"
    >
      <div
        className="bg-cover bg-center w-full h-[60%] rounded-lg"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="flex flex-col justify-between mt-2">
        <div className="flex justify-between">
          <h2 className="text-xl text-white font-medium">{title}</h2>
          <div>
            <a
              href={link}
              target="_blank"
              className="text-slate-400 mr-2 cursor-pointer hover:text-blue-600"
            >
              <i className="fa-solid fa-link"></i>
            </a>
            <a
              href={github}
              target="_blank"
              className="text-slate-400 cursor-pointer hover:text-blue-600"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <p className="text-slate-400">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          {tech.map((tech) => (
            <span className="py-1 px-2 bg-slate-600 text-slate-100 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
