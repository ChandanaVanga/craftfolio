import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  mobilepng,
  web,
  javascript,
  typescript,
  html,
  css,
  git,
  figma,
  docker,
  gtet,
  carrent,
  jobit,
  tripguide,
  csharp,
  dotnetcore,
  angular,
  postgresql,
  bootstrap,
  restapi,
  code,
  oracle
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Database Systems",
    icon: backend,
  },
  {
    title: "Full Stack Applications",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "dotnetcore",
    icon: dotnetcore,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "restapi",
    icon: restapi,
  },

];

const experiences: TExperience[] = [
  {
    title: "Jr Software Developer (App-1)",
    companyName: "Greater Than Educational Technologies",
    icon: gtet,
    iconBg: "#383E56",
    date: "Dec 2021 - Mar 2023",
    points: [
      "Developed responsive web interfaces using Angular 14 with component-based architecture and reactive forms.",
      "Built RESTful APIs using ASP.NET Core and C# for seamless frontend-backend communication.",
      "Designed and optimized PostgreSQL database schemas, stored procedures, and queries for improved performance.",
      "Participated in Agile/Scrum development cycles including sprint planning, standups, and code reviews.",
      "Improved application performance through query optimization and frontend optimizations.",
    ],
  },
  {
    title: "Software Developer (App-2)",
    companyName: "Greater Than Educational Technologies",
    icon: gtet,
    iconBg: "#383E56",
    date: "Apr 2023 - May 2025",
    points: [
      "Developed full-stack features for the Online Question Bank (OQB) platform using Angular 14, C#, and .NET Framework.",
      "Designed responsive UI components using Angular, Bootstrap, HTML, and CSS.",
      "Integrated backend services with Oracle databases to support question management and automated paper generation.",
      "Collaborated with cross-functional teams to deliver scalable and reliable software solutions.",
    ],
  },
  {
    title: "Application Developer (App-3)",
    companyName: "Oracle India Private Limited",
    icon: oracle,
    iconBg: "#0F172A",
    date: "Jun 2025 - Present",
    points: [
      "Developing enterprise insurance applications using ASP.NET Web Forms (ASPX), C#, and DevExpress UI components.",
      "Building interactive UI modules using DevExpress GridView, DataGrid, Reports, and TreeView components.",
      "Integrating backend systems using ADO.NET and stored procedures for optimized database operations.",
      "Modernizing legacy modules and improving application performance and maintainability.",
      "Collaborating with QA, BA, and backend teams to ensure stable and high-quality software delivery.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    companyName: "Independent Projects",
    icon: code,
    iconBg: "#E6DEDD",
    date: "Freelance Work",
    points: [
      "Developed custom full-stack web applications for personal and client projects.",
      "Designed responsive user interfaces using modern frontend technologies.",
      "Implemented backend services and API integrations using .NET technologies.",
      "Focused on performance optimization, clean code practices, and scalable solutions.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Chandana consistently delivers well-structured and maintainable code. She has a strong ability to understand requirements quickly and implement efficient solutions.",
    name: "Team Lead",
    designation: "Senior Software Engineer",
    company: "Nspira ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Chandana demonstrates excellent problem-solving skills and a strong understanding of full-stack development. She collaborates effectively with the team and always focuses on delivering quality work.",
    name: "Project Manager",
    designation: "Software Development Team",
    company: "Oracle",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Chandana is a quick learner who adapts to new technologies and challenges efficiently. Her dedication to building scalable and user-friendly applications makes her a valuable developer.",
    name: "Senior Developer",
    designation: "Engineering Team",
    company: "Greater Than Educational Technologies",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Enterprise Insurance Rating Platform",
    description:
      "An enterprise insurance rating and underwriting platform developed as part of Oracle’s Insbridge system. It enables insurance companies to configure pricing rules and manage product rating logic. I contributed to building ASP.NET Web Forms modules using C#, DevExpress UI components, and optimized backend integrations.",
    tags: [
      { name: "asp.net", color: "blue-text-gradient" },
      { name: "c#", color: "green-text-gradient" },
      { name: "devexpress", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Online Question Bank (OQB)",
    description:
      "A full-stack educational platform designed to simplify question paper generation for institutions. The system allows administrators and teachers to manage question banks, categorize questions, and generate customized exam papers. Built using Angular and .NET with Oracle database integration.",
    tags: [
      { name: "angular", color: "blue-text-gradient" },
      { name: ".net", color: "green-text-gradient" },
      { name: "oracle", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "nConnect Communication Platform",
    description:
      "A web and mobile communication platform for educational institutions to connect staff, parents, and management. The system includes attendance tracking, exam results, announcements, and ticketing features. Developed using Angular, ASP.NET Core, and PostgreSQL with REST APIs.",
    tags: [
      { name: "angular", color: "blue-text-gradient" },
      { name: "asp.net core", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
  // {
  //   name: "Shopping Web Application",
  //   description:
  //     "A full-stack e-commerce web application that allows users to browse products, view details, add items to a cart, and place orders. The system includes authentication, product management, and REST API integration to support a responsive shopping experience.",
  //   tags: [
  //     { name: "angular", color: "blue-text-gradient" },
  //     { name: "restapi", color: "green-text-gradient" },
  //     { name: "scss", color: "pink-text-gradient" },
  //   ],
  //   image: jobit,
  //   sourceCodeLink: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
