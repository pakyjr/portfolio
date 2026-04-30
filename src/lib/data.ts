export interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  link?: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
}

export const achievements: Achievement[] = [
  {
    title: "StartCup Campania Winner",
    description:
      "Regional startup competition, advancing to the PNI national competition in Ferrara.",
  },
  {
    title: "That\u2019s a Hackathon Winner",
    description: "Hackathon promoted by the US Embassy in Naples.",
  },
  {
    title: "Press Coverage \u2014 Il Mattino",
    description:
      "Clinequal featured for innovation in healthcare AI and clinical trial analysis.",
  },
];

export const education: Education[] = [
  {
    institution: "Apple Developer Academy",
    degree: "iOS Development",
    period: "Sep 2024 \u2014 Jun 2025",
    detail:
      "Swift/SwiftUI, cross-functional collaboration, Agile, business-oriented approach.",
  },
  {
    institution: "Universit\u00E0 di Napoli Federico II",
    degree: "B.Sc. Computer Science",
    period: "Sep 2023 \u2014 Sep 2026",
  },
  {
    institution: "Jagiellonian University Krak\u00F3w",
    degree: "ERASMUS+ Exchange",
    period: "Oct 2025 \u2014 Feb 2026",
    detail:
      "Distributed Systems, Computer Networks, Formal Language Theory, Design Patterns.",
  },
];

export const skills = {
  languages: [
    "TypeScript",
    "Swift",
    "Go",
    "Python",
    "C/C++",
    "Java",
    "SQL",
  ],
  technologies: [
    "Node.js",
    "FastAPI",
    "Next.js",
    "PostgreSQL",
    "DynamoDB",
    "Redis",
    "Docker",
    "AWS",
  ],
  concepts: [
    "Microservices",
    "REST APIs",
    "Distributed Systems",
    "Clean Architecture",
    "Agile",
  ],
};

export const spokenLanguages = [
  { language: "English", level: "Fluent", flag: "/images/flags/gb.png" },
  { language: "Portuguese", level: "Fluent", flag: "/images/flags/br.png" },
  { language: "Italian", level: "Fluent", flag: "/images/flags/it.png" },
  { language: "French", level: "Conversational", flag: "/images/flags/fr.png" },
  { language: "Spanish", level: "Conversational", flag: "/images/flags/es.png" },
];

export const socials = {
  email: "pjr.monto@gmail.com",
  github: "https://github.com/pakyjr",
  linkedin: "https://linkedin.com/in/pasqjr",
  instagram: "https://www.instagram.com/pakyjr/",
};
