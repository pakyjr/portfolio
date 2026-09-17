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
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
}

export const projects: Project[] = [
  {
    "number": "01",
    "name": "CLINEQUAL",
    "category": "Clinical-trial analysis",
    "description": "A clinical-trial analysis platform for detecting and quantifying potential sources of bias, with privacy-preserving ingestion and auditable statistical analysis.",
    "role": "Co-founder & Sole Technical Founder",
    "highlights": [
      "Architected a Python/FastAPI modular monolith with independently testable authentication, ingestion, analysis, persistence, and reporting modules.",
      "Built CSV, Excel, JSON, and SAS XPT ingestion with local-LLM-assisted SDTM mapping of column metadata, keeping patient rows out of model prompts.",
      "Implemented analyzers for representation, treatment balance, recruitment, attrition, survivorship, and consent withdrawal using statistical tests and diversity measures.",
      "Designed tenant isolation with PostgreSQL RLS, JWT/RBAC, Redis rate limiting, S3-compatible storage, and audit logs.",
      "Validated core ingestion and analysis workflows with 103 automated tests."
    ],
    "featured": true,
    "tech": [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker"
    ],
    "image": "/images/projects/clinequal.png"
  },
  {
    "number": "02",
    "name": "PLAYLIST CONVERTER",
    "category": "Music utility",
    "description": "A Spotify ↔ Apple Music playlist converter built around provider-independent models and resilient third-party API integrations.",
    "role": "Backend architecture & API integrations",
    "highlights": [
      "Normalized Spotify and Apple Music responses through provider adapters and a shared internal model.",
      "Matched tracks through ISRC lookup with metadata-similarity fallback.",
      "Integrated Spotify OAuth, Apple Music authentication, Redis-backed tokens, and live conversion progress through Server-Sent Events.",
      "Handled partial matches, pagination, request pacing, and exponential-backoff retries."
    ],
    "featured": true,
    "tech": [
      "TypeScript",
      "Node.js",
      "Redis"
    ],
    "image": "/images/projects/iuly.png",
    "github": "https://github.com/pakyjr/playlist-converter"
  },
  {
    "number": "03",
    "name": "BEEHIVE MONITORING SYSTEM",
    "category": "Embedded / IoT",
    "description": "An IoT prototype for remote hive monitoring and exploring acoustic and vibration signals associated with colony health and swarming.",
    "role": "Sensing architecture & cross-functional team lead",
    "highlights": [
      "Led the prototype from beekeeper interviews and academic research to sensing architecture and a SwiftUI monitoring app.",
      "Built an ESP32 node with an I2S microphone and ADXL345 accelerometer for acoustic and vibration capture.",
      "Explored local frequency-domain processing and streamed processed telemetry over MQTT to a backend.",
      "Organized embedded code into modular sensor components for additional environmental inputs."
    ],
    "featured": true,
    "tech": [
      "C++",
      "ESP32",
      "MQTT",
      "SwiftUI"
    ],
    "image": "/images/projects/beezzz.jpg",
    "github": "https://github.com/pakyjr/noizee"
  },
  {
    "number": "04",
    "name": "ISWING",
    "category": "Golf swing motion prototype",
    "description": "An iOS motion prototype using SwiftUI and CoreMotion to explore golf-swing motion capture and visualization.",
    "tech": [
      "Swift",
      "SwiftUI",
      "CoreMotion"
    ],
    "image": "/images/projects/iSwing.png",
    "github": "https://github.com/pakyjr/iSwing"
  },
  {
    "number": "05",
    "name": "TERMINAL TEXT EDITOR",
    "category": "Systems programming",
    "description": "A terminal text editor written from scratch in C, with raw terminal mode, cursor navigation, file I/O, incremental rendering, and syntax highlighting using POSIX APIs.",
    "tech": [
      "C",
      "POSIX",
      "Terminal"
    ],
    "image": "/images/projects/txted.png",
    "github": "https://github.com/pakyjr/text_editor"
  },
  {
    "number": "06",
    "name": "CONTAINER C++ LIBRARY",
    "category": "Data structures",
    "description": "A generic C++ data-structures library with reusable containers, iterators, templates, and STL-inspired interfaces.",
    "tech": [
      "C++",
      "Templates",
      "Data Structures"
    ],
    "image": "",
    "github": "https://github.com/pakyjr/LASDPrj"
  }
];

export const experiences: Experience[] = [
  {
    "role": "Co-Founder & Sole Technical Founder",
    "company": "Clinequal",
    "location": "Naples, ITA",
    "period": "Jul 2025 — Present",
    "highlights": [
      "Owned technical direction across architecture, backend development, infrastructure, testing, and product demos.",
      "Worked with a biostatistics co-founder to translate clinical-trial methodology into software and analysis workflows.",
      "Balanced fast iteration with modularity, tenant isolation, and testability under startup constraints.",
      "Represented the technical product in partner and investor conversations, competitions, and Tech Arena Stockholm."
    ]
  },
  {
    "role": "Software Engineer",
    "company": "IdeaSolutions",
    "location": "Naples, ITA",
    "period": "Mar 2023 — Dec 2023",
    "highlights": [
      "Developed TypeScript/Node.js backend services for SuperGuidaTV, a production streaming guide serving 500,000+ monthly users.",
      "Built public/private watchlists with follows, imports, follower-based ranking, pagination, and asynchronous aggregation through SQS-triggered Lambda functions.",
      "Implemented property-level audit logs for nested content changes, recording operators, timestamps, entity hierarchy, and modified fields in DynamoDB.",
      "Integrated content changes with Amazon Personalize, selectively synchronizing metadata and marking deleted titles unavailable.",
      "Delivered production services across AWS Lambda, DynamoDB, SQS, S3, API Gateway, and Step Functions."
    ]
  }
];

export const achievements: Achievement[] = [
  {
    "title": "StartCup Campania — Winner",
    "description": "Won the regional startup competition with Clinequal and advanced to the national PNI competition in Ferrara."
  },
  {
    "title": "That’s a Hackathon — Winner",
    "description": "Winner of the hackathon promoted by the US Embassy in Naples."
  },
  {
    "title": "Il Mattino — Press Coverage",
    "description": "Clinequal featured for its work on bias in clinical-trial analysis.",
    "link": "https://www.ilmattino.it/en/bias_free_clinical_trials_a_new_era-9170860.html"
  }
];

export const education: Education[] = [
  {
    "institution": "Apple Developer Academy",
    "degree": "Product Development & iOS Engineering",
    "period": "Sep 2024 — Jun 2025",
    "detail": "One-year program in rapid prototyping, user research, product thinking, iOS development, and multidisciplinary teamwork. Swift · SwiftUI · Hardware/IoT prototyping."
  },
  {
    "institution": "Università di Napoli Federico II",
    "degree": "B.Sc. Computer Science — In progress",
    "period": "Sep 2023 — Expected 2026"
  },
  {
    "institution": "Jagiellonian University Kraków",
    "degree": "Erasmus+ Exchange — Computer Science",
    "period": "Oct 2025 — Feb 2026",
    "detail": "Distributed Systems · Computer Networks · Formal Languages & Automata · Design Patterns."
  }
];

export const skills = {
  "languages": [
    "Python",
    "TypeScript",
    "C/C++",
    "Swift",
    "Java",
    "Go",
    "SQL"
  ],
  "backend": [
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "DynamoDB",
    "Redis",
    "REST APIs"
  ],
  "infrastructure": [
    "AWS Lambda",
    "SQS",
    "Step Functions",
    "S3",
    "API Gateway",
    "Docker"
  ],
  "concepts": ["APIs", "Data Modeling", "Distributed Systems", "Testing"]
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
