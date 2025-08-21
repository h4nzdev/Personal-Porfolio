import segbin1 from "/project1/segbin1.jpg";
import segbin2 from "/project1/segbin2.jpg";
import segbin3 from "/project1/segbin3.png";

import clinika1 from "/project2/clinika1.png";
import clinika2 from "/project2/clinika2.jfif";
import clinika3 from "/project2/clinika3.jfif";

import filmpeek1 from "/project3/filmpeek1.png";
import filmpeek2 from "/project3/filmpeek2.png";
import filmpeek3 from "/project3/filmpeek3.png";

import petrest1 from "/project4/petrest1.png";
import petrest2 from "/project4/petrest2.jpg";
import petrest3 from "/project4/petrest3.jpg";

import savvi1 from "/project5/savvi1.png";
import savvi2 from "/project5/savvi2.png";
import savvi3 from "/project5/savvi3.png";

import gymmo1 from "/project6/gymmo1.png";
import gymmo2 from "/project6/gymmo2.png";
import gymmo3 from "/project6/gymmo3.png";

export const projects = [
  {
    id: 1,
    images: [segbin1, segbin2, segbin3],
    title: "SegBin",
    description:
      "An Arduino-powered smart waste segregation system designed to automatically classify waste into appropriate categories, promoting sustainability and environmental responsibility.",
    tech: ["Arduino", "IoT"],
  },
  {
    id: 2,
    images: [clinika1, clinika2, clinika3],
    title: "Clinika",
    description:
      "A comprehensive clinic management system that streamlines patient records, appointments, and billing using PHP and MySQL, built with a clean and modern Tailwind CSS interface.",
    tech: ["PHP", "MySQL", "JS", "TailwindCss"],
    github: "https://github.com/Cmhanz99/Clinika",
  },
  {
    id: 3,
    images: [filmpeek1, filmpeek2, filmpeek3],
    title: "FilmPeek",
    description:
      "A movie discovery web application that allows users to explore trending films, search by category, and save favorites for later. Built with React and integrated with a third-party REST API.",
    tech: ["ReactJs", "TailwindCss", "RestAPI"],
    github: "https://github.com/Cmhanz99/FilmPeek",
    link: "https://hanz-filmpeek.vercel.app/",
  },
  {
    id: 4,
    images: [gymmo1, gymmo2, gymmo3],
    title: "GYMMO",
    description:
      "A modern fitness web platform offering workout programs, progress tracking, and health tips. Developed with React and REST API integration to provide real-time exercise content.",
    tech: ["ReactJs", "TailwindCss", "RestAPI"],
    github: "https://github.com/Cmhanz99/Gymmo",
    link: "https://gymmo-hanz.vercel.app/",
  },
  {
    id: 5,
    images: [savvi1, savvi2, savvi3],
    title: "Savvi",
    description:
      "A community reporting application based in Cebu that empowers citizens to report safety concerns, hazards, and incidents in real-time. Built with the MERN stack, it promotes safer and more connected neighborhoods through community-driven reporting.",
    tech: ["ReactJs", "TailwindCss", "NodeJs", "ExpressJS", "MongoDB"],
    github: "https://github.com/h4nzdev/SafetyApp",
    link: "#",
  },
  {
    id: 6,
    images: [petrest1, petrest2, petrest3],
    title: "PetRest",
    description:
      "An online booking system for pet burials that provides pet owners with a respectful and convenient way to schedule burial services. Developed in Laravel, it includes booking management, scheduling, and a user-friendly dashboard.",
    tech: ["Laravel", "TailwindCss", "JS", "Blade"],
    github: "https://github.com/Cmhanz99/RestPet",
  },
];
