import React from "react";
import { socialLinks } from "../data/social";
import SocialLinks from "../components/SocialLinks";
import QuickLinks from "../components/QuickLinks";
const Contact = () => {
  const quickLinks = [
    { name: "Start", href: "#start" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
  ];

  return (
    <div className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-2">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-300">Let's connect!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Follow Me
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <SocialLinks
                  url={social.url}
                  color={social.color}
                  index={index}
                  name={social.name}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <QuickLinks name={link.name} href={link.href}/>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-8 text-center">
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300 mb-4">Have a project in mind?</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:hanzhmagbal@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i>
                Send Email
              </a>
              <a
                href="tel:+639927870100"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <i className="fas fa-phone mr-2"></i>
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
