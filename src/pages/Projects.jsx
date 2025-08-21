import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div
      className="w-full h-auto bg-fixed bg-gradient-to-br from-slate-900 
    via-slate-800 to-slate-900 flex items-center justify-center"
      id="projects"
    >
      <div className="w-[90%] md:w-[80%] h-[90%] px-4 md:px-0">
        <h2 className="text-white text-3xl md:text-5xl font-semi-bold text-center">
          <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-200 text-center mt-6">
          &mdash; Ideas Turned Into Code &mdash;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              img={project.images[0]}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              link={project.link}
              setSelectedId={setSelectedId}
              delay={index * 0.3}
            />
          ))}
        </div>
        {selectedId && (
          <ProjectModal selectedId={selectedId} setSelectedId={setSelectedId} />
        )}
        <div className="py-10"></div>
      </div>
    </div>
  );
};

export default Projects;
