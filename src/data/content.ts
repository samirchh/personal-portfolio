export const profile = {
  name: "Sameer Jung Chhetri",
  role: "Full-Stack Developer, QA & Security Testing",
  tagline:
    "Final-year CSIT student who builds web apps with React, Next.js and Django, then tests them with Playwright, Postman, OWASP ZAP and k6. I like finding the bugs that actually matter.",
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
    "I'm a final-year BSc CSIT student in Pokhara. I've done internships in QA, full-stack development and AI/ML, and I build with the MERN and PERN stacks and Django.",
    "Most of my recent work was on Vyam, a multi-tenant gym ERP. I tested it, fixed bugs, built frontend features, and traced a data access flaw that let staff in one branch see another branch's members. I also ran authorized load and security tests on company and client web apps using k6, Postman and OWASP ZAP.",
    "I'm looking for a junior full-stack or QA role where I can keep doing both: building features, and checking that they hold up.",
  ],
  education: [
    {
      title: "BSc. Computer Science and Information Technology",
      place: "Soch College of IT, Tribhuvan University",
      when: "Final year",
      note: "Database Management Systems, Software Project Management (Agile), Web Technologies, AI",
    },
    {
      title: "+2 in Science",
      place: "Janapriya Multiple College",
      when: "",
      note: "",
    },
  ],
};

export const skills = [
  {
    category: "Full-stack",
    items: [
      "React.js",
      "Next.js",
      "MERN",
      "PERN",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "HTML5/CSS3",
      "Tailwind",
    ],
  },
  {
    category: "Languages",
    items: ["JavaScript", "Java", "C/C++", "Python (basic)"],
  },
  {
    category: "QA & Security",
    items: [
      "Playwright",
      "Postman",
      "OWASP ZAP",
      "k6 load testing",
      "Manual QA (test cases, bug reports)",
    ],
  },
  {
    category: "Design & Tools",
    items: ["Figma (UI/UX design, prototyping)", "Git", "GitHub"],
  },
];

export type Job = {
  role: string;
  company: string;
  place: string;
  when: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "QA and Frontend Intern",
    company: "Aankhijhyal Technologies Pvt. Ltd.",
    place: "Pokhara",
    when: "2026",
    points: [
      "Tested and fixed bugs on Vyam, a multi-tenant gym SaaS ERP platform, and built responsive frontend features.",
      "Ran authorized load and security testing on company and client web apps using k6, Postman and OWASP ZAP.",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Aakar eSolutions",
    place: "Ranipauwa, Pokhara",
    when: "2025",
    points: [
      "Applied Python and fundamental machine learning techniques to develop and evaluate AI/ML solutions.",
      "Tested and integrated AI-powered applications, checking model outputs for accuracy, consistency and reliability.",
    ],
  },
  {
    role: "Senior Test Center Administrator",
    company: "Prometric Testing and Assessment Solutions",
    place: "Ranipauwa, Pokhara",
    when: "2025",
    points: [
      "Ran daily test-center operations and resolved technical issues with testing software and hardware.",
    ],
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
    title: "Vyam: Multi-tenant Gym SaaS ERP",
    description:
      "Found and fixed a critical authorization flaw where branch-scoped staff could see other branches' member data. Also fixed member status not auto-expiring by adding a scheduled node-cron job, and audited the UI/UX over several cycles, documenting broken flows and branding issues for the project manager.",
    stack: ["Next.js 14", "Fastify", "PostgreSQL", "Prisma", "Tailwind"],
    status: "Internship project",
  },
  {
    title: "Vyapar Margdarshan: Expense Tracking & Advisory System",
    description:
      "An expense tracker for SMEs with a rule-based financial advisory engine and an analytics dashboard. Role-based access control for Admin, Staff and Owner, with secure authentication and REST APIs.",
    stack: ["React.js", "Django", "PostgreSQL", "REST API"],
    status: "Final year project",
  },
  {
    title: "WovenWay: Online Hemp Clothing Store",
    description:
      "An e-commerce store with an analytics dashboard and role-based access for Admin, Customer and Owner.",
    stack: ["React.js", "Django", "PostgreSQL", "REST API"],
    status: "Minor project",
  },
  {
    title: "Job Application Tracker",
    description:
      "A web app to log job and internship applications and track their status.",
    stack: ["MongoDB", "Express", "React", "Node.js", "TypeScript"],
    status: "Personal project",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
