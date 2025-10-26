interface Subskill {
  name: string;
  value: number;
}
interface SkillCategory {
  name: string;
  subskills: Subskill[];
}
export interface Skills {
  title: string;
  subtitle: string;
  image: string;
  categories: SkillCategory[];
}

export const skills: Skills[] = [
  {
    title: "FRONT-END",
    subtitle: "Sites statiques & interfaces utilisateur dynamiques",
    image: "/assets/skills/front.png",
    categories: [
      {
        name: "Frameworks",
        subskills: [
          {
            name: "React",
            value: 80,
          },
          {
            name: "Next",
            value: 70,
          },
          {
            name: "Angular",
            value: 55,
          },
          {
            name: "Svelte",
            value: 40,
          },
        ],
      },
      {
        name: "Gestion d'état",
        subskills: [
          {
            name: "Redux",
            value: 65,
          },
          {
            name: "NgRx",
            value: 40,
          },
        ],
      },
      {
        name: "Design",
        subskills: [
          {
            name: "Responsive",
            value: 90,
          },
          {
            name: "SaSS",
            value: 60,
          },
          {
            name: "CSS",
            value: 90,
          },
          {
            name: "Librairies",
            value: 70,
          },
        ],
      },
    ],
  },
  {
    title: "BACK-END",
    subtitle: "APIs, bases de données & sécurité",
    image: "/assets/skills/api.png",
    categories: [
      {
        name: "Frameworks",
        subskills: [
          {
            name: "Node",
            value: 80,
          },
          {
            name: "Express",
            value: 70,
          },
          {
            name: "Nest",
            value: 60,
          },
        ],
      },
      {
        name: "Bases de données",
        subskills: [
          {
            name: "MySQL",
            value: 65,
          },
          {
            name: "MongoDB",
            value: 60,
          },
          {
            name: "PostgreSQL",
            value: 40,
          },
        ],
      },
      {
        name: "Sécurité",
        subskills: [
          {
            name: "JWT",
            value: 85,
          },
          {
            name: "Chiffrement",
            value: 80,
          },
        ],
      },
    ],
  },
  {
    title: "DÉPLOIEMENT & MAINTENANCE",
    subtitle: "Déploiement, versioning & maintenance",
    image: "/assets/skills/maintenance.png",
    categories: [
      {
        name: "Déploiement",
        subskills: [
          {
            name: "CI/CD",
            value: 60,
          },
          {
            name: "Docker",
            value: 70,
          },
        ],
      },
      {
        name: "Versioning & PR",
        subskills: [
          {
            name: "Git",
            value: 60,
          },
          {
            name: "GitHub",
            value: 80,
          },
        ],
      },
      {
        name: "Testing",
        subskills: [
          {
            name: "Postman",
            value: 75,
          },
          {
            name: "Jest",
            value: 55,
          },
        ],
      },
    ],
  },
];
