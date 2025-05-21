export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    de: string;
  };
  image: string;
  techStack?: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Scout Properties",
    description: {
      en: "A real estate platform for posting property listings and searching for properties to buy or rent.",
      de: "Eine Immobilienplattform zum Einstellen von Immobilienangeboten und zur Suche nach Immobilien zum Kauf oder zur Miete.",
    },
    image: "/images/scout-properties.png",
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "OpenAPI",
    ],
    link: "https://www.scout-properties.com/",
    github: "https://github.com/Mupa1/scoutproperties",
  },
  {
    id: "2",
    title: "Shooter Game",
    description: {
      en: "An RPG shooter game built with Phaser 3, a JavaScript game framework designed to create 2D games.",
      de: "Ein RPG-Shooter-Spiel, das mit Phaser 3, einem JavaScript-Spielframework für 2D-Spiele, entwickelt wurde.",
    },
    image: "/images/shooter-game.png",
    techStack: ["JavaScript", "Phaser3"],
    link: "https://mupa-shooter-game.netlify.app/",
    github: "https://github.com/Mupa1/rpg-shooter-game",
  },
  {
    id: "3",
    title: "Tasty Recipes",
    description: {
      en: "A single-page application that lets the user discover or filter through a variety of recipes by fetching data from Spoonacular API.",
      de: "Eine Single-Page-Anwendung, die es dem Benutzer ermöglicht, verschiedene Rezepte zu entdecken oder zu filtern, indem Daten von der Spoonacular API abgerufen werden.",
    },
    image: "/images/tasty.png",
    techStack: ["React", "Redux"],
    link: "https://tasty-yummy-recipes-app.netlify.app/",
    github: "https://github.com/Mupa1/tasty-recipes",
  },
  {
    id: "4",
    title: "Portfolio",
    description: {
      en: "A responsive personal web development portfolio built using react.",
      de: "Ein responsives persönliches Webentwicklungsportfolio, das mit React erstellt wurde.",
    },
    image: "/images/portfolio.png",
    techStack: ["React", "TypeScript", "Material UI"],
    link: "https://mupa-dev.netlify.app/",
    github: "https://github.com/Mupa1/my-portfolio",
  },
];
