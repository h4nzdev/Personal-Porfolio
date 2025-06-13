import React, { useState } from "react";
import skills from "../data/skills.js";
import SkillComponents from "../components/SkillComponents";
import ShowButton from "../components/ShowButton.jsx";

const Skills = () => {
  const [value, setValue] = useState(6);

  return (
    <div className="w-full h-auto bg-fixed bg-gradient-to-br from-slate-900 
    via-slate-800 to-slate-900 flex items-center justify-center" 
    id="skills">
      <div className="w-[80%] h-[90%]">
        <h2 className="text-white text-5xl font-semi-bold text-center">
          <span className="text-blue-500">Skills</span> and{" "}
          <span className="text-blue-500">Tools</span>
        </h2>
        <p className="text-xl text-slate-200 text-center mt-6">
          &mdash; Tech I Love Working With &mdash;
        </p>
        <div className="mt-10">
          <div className="mt-10">
            <ul className="grid md:grid-cols-2 gap-3">
              {skills.slice(0, value).map((skill) => (
                <SkillComponents
                  img={skill.img}
                  title={skill.title}
                  percent={skill.percent}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex w-full items-center justify-center">
          <ShowButton
            isShowMore={value < skills.length}
            onClick={() =>
              value < skills.length
                ? setValue(value + 12)
                : setValue(value - 12)
            }
          />
        </div>
        <div className="py-10"></div>
      </div>
    </div>
  );
};

export default Skills;
