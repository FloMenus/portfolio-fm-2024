export interface Project {
  title: string;
  link: string;
  description: string;
  company?: string;
  year?: string;
  skills?: string[];
}

// Références professionnelles
export const professionalProjects: Project[] = [
  {
    title: "Prestimone",
    link: "https://prestimoine.fr/",
    description: "Site vitrine pour une société de gestion de patrimoine",
    company: "Shin Agency",
    year: "2025",
    skills: ["WordPress", "PHP", "CSS", "JavaScript"],
  },
  {
    title: "Hanammi",
    link: "https://hanammi.com/",
    description: "Site vitrine pour un cabinet de conseil en innovation",
    company: "Shin Agency",
    year: "2025",
    skills: ["WordPress", "PHP", "Scss", "JavaScript"],
  },
  {
    title: "Dr Lumbroso",
    link: "https://dr-david-lumbroso.com/",
    description: "Site vitrine pour un chirurgien-dentiste",
    company: "Shin Agency",
    year: "2025",
    skills: ["WordPress", "PHP", "Scss", "JavaScript"],
  },
  {
    title: "Heliovie",
    link: "https://heliovie.fr/",
    description: "Site vitrine pour une entreprise d'installation de panneaux photovoltaiques",
    company: "Shin Agency",
    year: "2025",
    skills: ["WordPress", "PHP", "Scss", "JavaScript"],
  },
  {
    title: "Bureaux Boissy",
    link: "https://bureaux-boissy.fr/",
    description: "Site de location de bureaux et espaces de coworking",
    company: "Shin Agency",
    year: "2024",
    skills: ["WordPress", "PHP", "Scss", "JavaScript"],
  },
  {
    title: "VoyagePro",
    link: "https://voyagepro.fr/",
    description: "Site vitrine pour une agence de voyages et évènements professionnels",
    company: "Shin Agency",
    year: "2024",
    skills: ["WordPress", "PHP", "Scss", "JavaScript"],
  },
];

// Projets personnels
export const projects: Project[] = [
  {
    title: "Sandbox Angular",
    link: "https://fm-ng-sandbox.netlify.app/",
    description: "Sandbox pour tester des fonctionnalités Angular",
    skills: ["Angular", "TypeScript", "RxJS", "CSS"],
  },
  {
    title: "Site vitrine Yvea",
    link: "https://fm-yvea-landing.onrender.com/",
    description:
      "Site vitrine pour une plateforme de gestion automatisée de certificats d'export de marchandises",
    skills: ["Next.js", "TypeScript", "SCSS", "Vite"],
  },
  {
    title: "Moovice",
    link: "https://moovice-flomenus.netlify.app/",
    description: "Site de référencement de films, à la manière d'un AlloCiné",
    skills: ["React", "JavaScript", "API REST", "CSS"],
  },
  {
    title: "Todo list",
    link: "https://cosmic-paletas-7dd7b8.netlify.app/",
    description: "Application de gestion de tâches",
    skills: ["React", "JavaScript", "LocalStorage", "CSS"],
  },
  {
    title: "Générateur Pokémon",
    link: "https://random-pokemon-flomenus.netlify.app/",
    description: "Générateur de Pokémon aléatoire",
    skills: ["React", "JavaScript", "API REST", "CSS"],
  },
];
