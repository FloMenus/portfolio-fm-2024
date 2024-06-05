export interface Project {
  title: string;
  link: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Sandbox Angular",
    link: "https://fm-ng-sandbox.netlify.app/",
    description: "Sandbox pour tester des fonctionnalités Angular",
  },
  {
    title: "Site vitrine Yvea",
    link: "https://fm-yvea-landing.onrender.com/",
    description:
      "Site vitrine pour une plateforme de gestion automatisée de certificats d'export de marchandises",
  },
  {
    title: "Moovice",
    link: "https://moovice-flomenus.netlify.app/",
    description: "Site de référencement de films, à la manière d'un AlloCiné",
  },
  {
    title: "Portfolio",
    link: "https://florent-menus.com/",
    description: "Portfolio de Florent Menus",
  },
  {
    title: "Todo list",
    link: "https://cosmic-paletas-7dd7b8.netlify.app/",
    description: "Application de gestion de tâches",
  },
  {
    title: "Générateur Pokémon",
    link: "https://random-pokemon-flomenus.netlify.app/",
    description: "Générateur de Pokémon aléatoire",
  },
];
