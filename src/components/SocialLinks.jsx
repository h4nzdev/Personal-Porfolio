import React from "react";

const SocialLinks = ({index, url, color, icon, name}) => {
  return (
    <a
      key={index}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-gray-700 ${color} rounded-lg p-4 text-center transition-colors`}
    >
      <i className={`${icon} text-2xl text-white mb-2`}></i>
      <p className="text-white text-sm">{name}</p>
    </a>
  );
};

export default SocialLinks;
