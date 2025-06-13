import segbin from "/public/segbin.jpg";
import clinika from "/public/clinika.png";
import filmpeek from "/public/filmpeek.png";
import gymmo from "/public/gymmo.png";
import nexus from "/public/nexus.png";
import petrest from "/public/petrest.png";

export const projects = [
  {
    img: segbin,
    title: "SegBin",
    description: "Arduino based waste segragation system.",
    tech: ["Arduino", "IoT"],
  },
  {
    img: clinika,
    title: "Clinika",
    description: "Clinika a clinic management system.",
    tech: ["PHP", "MySQL", "JS", "TailwindCss"],
    github: "https://github.com/Cmhanz99/Clinika",
  },
  {
    img: filmpeek,
    title: "FilmPeek",
    description: "Find the best movies and save it for later.",
    tech: ["ReactJs", "TailwindCss", "RestAPI"],
    github: "https://github.com/Cmhanz99/FilmPeek",
    link: "https://hanz-filmpeek.vercel.app/"
  },
  {
    img: gymmo,
    title: "GYMMO",
    description: "Grow stronger with GYMMO.",
    tech: ["ReactJs", "TailwindCss", "RestAPI"],
    github: "https://github.com/Cmhanz99/Gymmo",
    link: "https://gymmo-hanz.vercel.app/"
  },
  {
    img: nexus,
    title: "Nexus",
    description: "A clone with a bit of difference website.",
    tech: ["ReactJs", "TailwindCss", "Framer"],
    github: "https://github.com/Cmhanz99/CopyWeb",
    link: "https://nexuscopy.vercel.app/"
  },
  {
    img: petrest,
    title: "PetRest",
    description: "Give your pet a proper burial.",
    tech: ["Laravel", "TailwindCss", "JS"],
    github: "https://github.com/Cmhanz99/RestPet",
  },
];
