import Certificates from "../components/Certificates";
import { certificates } from "../data/certificates.js";
const Achievements = () => {
  return (
    <div className="w-full h-auto bg-fixed bg-gradient-to-br from-slate-900
    via-slate-800 to-slate-900 flex flex-col items-center justify-center"
    id="achievements">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            My <span className="text-blue-400">Achievements</span>
          </h2>
          <p className="text-lg text-gray-300">
            &mdash; Certifications & Accomplishments &mdash;
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Certificates
              img={cert.image}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
              index={index}
              delay={index * 0.3}
            />
          ))}
        </div>
      </div>
      <div className="p-10"></div>
    </div>
  );
};

export default Achievements;
