import React from "react";

const QuickLinks = ({index, href, name}) => {
  return (
    <a
      key={index}
      href={href}
      className="block bg-gray-700 hover:bg-blue-600 rounded-lg p-3 text-center transition-colors"
    >
      <span className="text-white">{name}</span>
    </a>
  );
};

export default QuickLinks;
