export const profile = {
  name: "Sameer Jung Chhetri",
  role: "Frontend Engineer, QA & UI/UX",
  tagline:
    "I design interfaces, build them in code, then break them on purpose to make sure they hold up. Frontend engineering, QA, and UI/UX across SaaS and web platforms.",
  location: "Pokhara, Nepal",
  email: "sameerchhetri2060@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/samirchh",
    linkedin: "https://www.linkedin.com/in/sameer-chhetri-46106b1b9/",
  },
};

export const about = {
  paragraphs: [
    "I'm a final-year BSc CSIT student and QA intern working across frontend development, UI/UX design, and quality assurance. My work sits at three points of the same product: designing the interface, building it in React, and testing it until it holds up.",
    "Currently I work on a multi-tenant gym SaaS ERP platform, handling QA and frontend work, and I design interfaces in Figma before shipping them. I've also run authorized load and security testing engagements on production systems, including rate-limit penetration testing for a client travel platform.",
    "I like interfaces that feel obvious to use and systems that hold up under real pressure, concurrent users, malformed input, and the edge cases nobody wrote a spec for.",
  ],
};

export const skills = [
  {
    category: "UI/UX & Design",
    items: ["Figma", "Wireframing", "Design Systems", "Prototyping"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "QA & Testing",
    items: ["Manual Test Design", "k6 Load Testing", "Bug Tracking", "Regression Testing"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Security",
    items: ["Rate-Limit Testing", "Basic Pen Testing", "OWASP Fundamentals"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Postman", "Jira"],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
  status?: string;
};

export const projects: Project[] = [
  {
    title: "Vyam — Gym SaaS ERP",
    description:
      "Multi-tenant ERP for gym businesses. Worked across UI design, QA test design, and frontend feature development for membership, billing, and staff-management modules.",
    stack: ["Figma", "React", "TypeScript", "PostgreSQL"],
    status: "Internship project",
  },
  {
    title: "Load & Security Testing — app.aindalabs.com",
    description:
      "Assigned by the CTO to run structured load testing and surface performance bottlenecks under concurrent load using k6, plus basic security checks.",
    stack: ["k6", "JavaScript", "CI"],
    status: "Client engagement",
  },
  {
    title: "Travel Platform Rate-Limit Testing",
    description:
      "Authorized penetration testing focused on rate-limiting and abuse-prevention controls for a production travel booking client site.",
    stack: ["Python", "Burp Suite", "REST APIs"],
    status: "Client engagement",
  },
  {
    title: "Vyapar Margdarshan",
    description:
      "Final-year group project: an SME expense management platform with a rule-based financial advisory engine to help small businesses make sense of their spending.",
    stack: ["React", "Python-Django", "PostgreSQL"],
    status: "Academic project",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];