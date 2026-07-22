export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  role?: string;
  highlights?: string[];
  featured?: boolean;
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

export const projects: Project[] = [
  {
    number: "01",
    name: "CLINEQUAL",
    category: "Health-tech platform",
    description:
      "A regulatory-minded platform for finding, measuring, and correcting bias in clinical-trial data — built to make complex statistical evidence understandable and auditable.",
    role: "Co-founder & lead software engineer",
    highlights: [
      "Designed the Python/FastAPI platform across ingestion, analysis, reporting, and shared services.",
      "Built a hybrid SDTM normalization pipeline with deterministic validation and AI-assisted column detection.",
      "Implemented tenant isolation, encrypted file storage, role-based access, and immutable audit trails for sensitive health data.",
      "Created a plugin-based analysis engine covering the first tier of statistical bias checks from a 74-bias research catalog.",
    ],
    featured: true,
    tech: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker"],
    image: "/images/projects/clinequal.png",
    link: "https://clinequal.com",
  },
  {
    number: "02",
    name: "IULY",
    category: "Music utility",
    description:
      "A two-way playlist converter that moves music between Spotify and Apple Music while preserving a clean, provider-independent data model.",
    role: "Backend architecture & API integrations",
    highlights: [
      "Normalized provider responses through adapters, then selected conversion flows through a strategy registry.",
      "Matched tracks across catalogs using stable music metadata, including ISRC identifiers.",
      "Handled OAuth sessions, Redis-backed tokens, playlist creation, progress reporting, and partial-match results.",
      "Added playlist-size tiers, paced requests, and exponential-backoff retries for third-party API limits.",
    ],
    featured: true,
    tech: ["TypeScript", "Node.js", "Redis", "React"],
    image: "/images/projects/iuly.png",
    github: "https://github.com/pakyjr",
  },
  {
    number: "03",
    name: "BEEZZZ",
    category: "Embedded / IoT",
    description:
      "An early-warning beehive monitoring prototype that combines an ESP32 sensing node with a companion iOS experience.",
    role: "Firmware & iOS prototyping",
    highlights: [
      "Captured hive audio from an I2S microphone at 16 kHz / 16-bit for acoustic analysis experiments.",
      "Built resilient Wi-Fi and MQTT connection handling for the ESP32 monitoring node.",
      "Integrated an ADXL345 accelerometer path over I2C for motion and vibration experiments.",
      "Designed the hardware code as small sensor modules so additional environmental inputs can be added later.",
    ],
    featured: true,
    tech: ["C++", "ESP32", "MQTT", "SwiftUI"],
    image: "/images/projects/beezzz.jpg",
    github: "https://github.com/pakyjr/Beezz-iOS",
  },
  {
    number: "04",
    name: "ISWING",
    category: "iOS experiment",
    description:
      "An iOS app built with SwiftUI exploring motion and interaction patterns.",
    tech: ["Swift", "SwiftUI", "CoreMotion"],
    image: "/images/projects/iSwing.png",
    github: "https://github.com/pakyjr/iSwing",
  },
  {
    number: "05",
    name: "TERMINAL TEXT EDITOR",
    category: "Systems programming",
    description:
      "A terminal-based text editor written from scratch in C. Raw mode terminal handling, syntax highlighting, and file I/O.",
    tech: ["C", "POSIX", "Terminal"],
    image: "/images/projects/txted.png",
    github: "https://github.com/pakyjr/text_editor",
  },
  {
    number: "06",
    name: "CONTAINER C++ LIBRARY",
    category: "Computer science",
    description:
      "A generic container library implementing core data structures with iterators, following STL conventions.",
    tech: ["C++", "Templates", "Data Structures"],
    image: "",
    github: "https://github.com/pakyjr/LASDPrj",
  },
];

export const experiences: Experience[] = [
  {
    role: "Lead Software Engineer & Co-Founder",
    company: "Clinequal",
    location: "Naples, ITA",
    period: "Jul 2025 \u2014 2026",
    link: "https://clinequal.com",
    highlights: [
      "Architected a regulatory-ready (FDA/EMA) health-tech platform using Python/FastAPI, supporting a \u20AC400K pre-seed round and multi-tenant B2B pilots.",
      "Built an AI-powered ingestion pipeline utilizing a local LLM (Phi-3) to map clinical data to CDISC SDTM standards with strict PHI privacy.",
      "Developed a plugin-based statistical engine with 15+ bias tests paired with an XAI layer for regulatory-aligned narratives.",
      "Represented the company at Tech Arena Stockholm, translating complex AI architecture to VC funds and investment banks.",
    ],
  },
  {
    role: "Software Engineer",
    company: "IdeaSolutions",
    location: "Naples, ITA",
    period: "Mar 2023 \u2014 Dec 2023",
    highlights: [
      "Contributed to SuperGuidaTV (500,000+ monthly active users), integrating core features like user watchlists.",
      "Set up serverless AWS DynamoDB, implemented Data Access Layer, and used SQS for background tasks.",
      "Developed an automatic logging system following clean architecture for full traceability.",
    ],
  },
];

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
