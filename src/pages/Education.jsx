import React from "react";
import lahug from "/public/lahug.jpg";
import uspf from "/public/uspf.webp";

const educations = [
  {
    img: lahug,
    level: "High School - Senior High",
    name: "Lahug Night High School",
    year: "2018 - 2022",
    address: "Gorordo Avenue, Lahug",
  },
  {
    img: uspf,
    level: "Ongoing",
    name: "University of Southern Philippines Foundation",
    year: "2023 - ongoing",
    address: "Salinas Drive, Lahug",
  },
];

const Education = () => {
  return (
    <div className="w-full h-auto bg-fixed bg-gradient-to-br from-slate-900 
    via-slate-800 to-slate-900 flex flex-col items-center justify-center"
    id="education">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            My <span className="text-blue-400">Education</span>
          </h2>
          <p className="text-lg text-gray-300">
            &mdash; Building My Foundation in Learning &mdash;
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((education) => (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 w-90 shadow-xl border border-gray-700">
              <div className="flex items-center gap-4">
                <img
                  src={education.img}
                  alt="Lahug Night High School"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="text-blue-400 text-sm font-medium">
                    {education.level}
                  </p>
                  <h3 className="text-lg font-bold text-white">
                    {education.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{education.year}</p>
                  <p className="text-gray-400 text-sm">{education.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-10"></div>
    </div>
  );
};

export default Education;
