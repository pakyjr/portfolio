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

export const socials = {
  email: "pjr.monto@gmail.com",
  github: "https://github.com/pakyjr",
  linkedin: "https://linkedin.com/in/pasqjr",
  instagram: "https://www.instagram.com/pakyjr/",
};
