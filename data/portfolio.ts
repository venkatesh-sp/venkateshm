import {
  Cloud,
  Database,
  FileCode,
  Layers,
  Mail,
  MonitorSmartphone,
  Newspaper,
  Radio,
  Rocket,
  Server,
  Timer,
  type LucideIcon,
} from "lucide-react";

import type { EducationItem, ExperienceItem, Project, SkillGroup } from "@/types/portfolio";

/** Opening line of the hero, shown beneath the roles. */
export const heroIntro =
  "Results-driven Full Stack Developer with over 7 years of experience designing, developing, optimizing and deploying scalable, secure and high-performance web applications. Skilled in building robust backend architectures, RESTful APIs, dynamic front-end experiences and cloud-based application infrastructure.";

/** The rest of the profile, shown in the About section. */
export const aboutParagraphs: string[] = [
  "I specialise in backend development using Python, Django, Django REST Framework and Flask, alongside modern front-end technologies such as Next.js and Node.js. My experience spans the complete software development lifecycle, from translating business requirements into technical solutions to implementation, integration, deployment and ongoing maintenance.",
  "Throughout my career, I have developed and integrated RESTful APIs, implemented real-time Telegram messaging and chat update processing, and automated asynchronous email notifications using Django CRON jobs. I have also configured reliable transactional email services using Amazon SES and deployed production applications on AWS EC2 and Heroku.",
  "Beyond conventional application development, I have built custom WordPress themes and extended platform functionality to deliver tailored web solutions. I focus on writing clean, maintainable and reusable code, and I prioritise application performance, scalability, security and seamless user experiences.",
  "My approach combines strong backend engineering, modern front-end development, API integration, automation and cloud deployment to deliver reliable, production-ready software.",
];

/** Professional highlights shown as cards in the About section. */
export const professionalHighlights: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Full Stack Engineering",
    description: "End-to-end web application development using Python, Django, Flask, Next.js and Node.js.",
    icon: Layers,
  },
  {
    title: "Backend & API Development",
    description: "Designing scalable backend systems and secure RESTful APIs using Django REST Framework.",
    icon: Server,
  },
  {
    title: "Real-Time Integrations",
    description: "Processing Telegram messages and real-time chat updates.",
    icon: Radio,
  },
  {
    title: "Task Automation",
    description: "Implementing scheduled background tasks and automated email notifications using Django CRON.",
    icon: Timer,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Deploying and managing applications using AWS EC2, Amazon SES and Heroku.",
    icon: Cloud,
  },
  {
    title: "Email Infrastructure",
    description: "Configuring transactional email delivery and notification workflows.",
    icon: Mail,
  },
  {
    title: "CMS Development",
    description: "Building custom WordPress themes and tailored web experiences.",
    icon: Newspaper,
  },
];

/** Full profile text, used by the resume and the README. */
export const profileSummary = [heroIntro, ...aboutParagraphs].join(" ");

/** Keywords for search-engine structured data (SEO `knowsAbout`). */
export const headlineSkills: string[] = ["Python", "Django", "NodeJs", "NextJS", "Devops", "AWS Services"];

/** Each core stack is one card; its items are the frameworks and services used with it. Every name appears once. */
export const coreStack: SkillGroup[] = [
  {
    title: "Python",
    items: ["Flask", "FastAPI", "Django", "Django Rest Framework", "Streamlit", "Django CRON jobs"],
    icon: FileCode,
  },
  {
    title: "Node.js",
    items: ["ExpressJS", "React (Vite)", "NextJS", "UI Components (Shadcn)"],
    icon: MonitorSmartphone,
  },
  {
    title: "AWS",
    items: ["EC2", "S3", "SES", "Lambda", "RDS"],
    icon: Cloud,
  },
  {
    title: "Deployment services",
    items: ["Heroku", "Vercel", "Docker"],
    icon: Rocket,
  },
  {
    title: "Databases",
    items: ["Postgres", "MongoDB"],
    icon: Database,
  },
];

export const alsoComfortableWith: string[] = ["HL7 / FHIR", "Elixir / Phoenix", "SMTP & email", "Message queues"];

export const projects: Project[] = [
  {
    title: "Vulcan",
    subtitle: "Healthcare pipeline that converts HL7 messages into FHIR JSON",
    period: "Present",
    tags: ["Healthcare", "Cloud", "Full Stack"],
    summary:
      "Vulcan is a healthcare data pipeline that ingests raw HL7 messages, converts them to FHIR JSON, validates the output and stores the results. It is built as a set of services with clearly separated responsibilities, so each stage can be maintained and reasoned about on its own.",
    points: [
      {
        label: "Watcher",
        text: "Triggered by an S3 notification whenever a new file is uploaded. It computes the file's hash and checks the database for an existing copy: duplicates are recorded and processing stops, while new files are pushed onto a queue.",
      },
      {
        label: "Consumer",
        text: "Reads messages from the queue, validates their type and confirms that each one is HL7. It sends the message to the Converter's HL7 API and posts the resulting FHIR JSON to the Finisher.",
      },
      { label: "Converter", text: "Converts HL7 messages into FHIR JSON." },
      {
        label: "Validator",
        text: "Validates incoming FHIR JSON payloads and returns a response describing the result.",
      },
      {
        label: "Finisher",
        text: "Saves each response to the database and stores the FHIR JSON in S3 and MongoDB.",
      },
      {
        label: "FHIR API (ExpressJS)",
        text: "A Node.js service for handling FHIR JSON, documented and explorable through Swagger UI.",
      },
      {
        label: "Provider Portal (Next.js)",
        text: "A front-end portal that gives users an overview of resources across tabular views.",
      },
    ],
    stack: ["S3", "Simple Queue", "ExpressJS", "NextJS", "MongoDB", "Swagger UI"],
  },
  {
    title: "Libero",
    subtitle: "AI-powered video conferencing product",
    period: "2020 – 2021",
    tags: ["AI & Video", "Full Stack"],
    summary:
      "Libero is a video conferencing product developed for an innovation challenge under the Digital India programme (2020). It was one of the top five entries, recognised for its potential to deliver an intuitive video conferencing experience.",
    points: [
      {
        text: "Built the client application in Next.js, integrated with the OpenVidu media server to handle live video streams and track the users who join each session.",
      },
      {
        text: "Developed the server application in Phoenix (Elixir) to store rooms, chats, boards and user information.",
      },
      { text: "Packaged the media server as a Docker image and deployed it from that image." },
    ],
    stack: ["NextJS", "OpenVidu", "Phoenix / Elixir", "Docker"],
  },
  {
    title: "JVB Health and Wellness",
    subtitle: "Health and wellness platform that analyses data from wearable devices",
    period: "2018 – 2019",
    tags: ["Healthcare", "Full Stack"],
    summary:
      "A health and wellness platform that helps people improve their fitness and quality of life through a targeted, data-driven approach to personal transformation. It brings together data from wearable devices and presents it on both the web and mobile.",
    points: [
      {
        text: "Integrated data from fitness devices such as Fitbit, Garmin and Apple Health into both the web and mobile applications.",
      },
      {
        text: "Provides reviews and analysis of workouts, nutrition, sleep, movement and race results, so users can follow their progress over time.",
      },
    ],
    stack: ["Fitbit", "Garmin", "Apple Health", "Web", "Mobile"],
  },
  {
    title: "PayTrack",
    subtitle: "Personal finance tracker for EMIs, loans, credit card bills and recurring payments",
    period: "2026",
    tags: ["Full Stack", "Personal Finance"],
    summary:
      "A personal finance application that keeps EMIs, loans, credit card bills and recurring payments organised in one place. It provides reminders and analytics and maintains a complete payment history.",
    points: [],
    stack: ["Next.js", "TypeScript"],
    links: [{ label: "Live site", url: "https://paytrack.venkateshm.me" }],
  },
];

export const experience: ExperienceItem[] = [
  {
    logo: "/logos/soulpage.svg",
    website: "https://soulpageit.com",
    address: "AC 02, Indu Fortune Fields Annexe, KPHB 13th Phase Road, Hyderabad 500072",
    period: "12/2019 – Present",
    role: "Full Stack Developer",
    company: "Soulpage IT Solutions Private Limited",
    location: "Hyderabad, India",
    highlights: [
      "Design and build full-stack web applications with Python, Django, Django REST Framework, Next.js and Node.js, from requirements through to production.",
      "Deploy and operate applications on AWS (EC2, S3 and SES) and Heroku, including configuring transactional email through AWS SES SMTP.",
      "Integrate third-party APIs to extend application functionality and improve the user experience.",
      "Resolve defects quickly by identifying root causes, improving application stability and user satisfaction.",
      "Conduct code reviews to maintain quality and consistency across the project lifecycle.",
      "Keep my skills current through continuous professional development in emerging frameworks and tools.",
    ],
  },
  {
    logo: "/logos/normsoftware.jpg",
    website: "https://normsoftware.com",
    address: "1-2-68 to 70, 2nd Floor, Siddhamsetty Complex, Parklane, Secunderabad, Hyderabad 500003",
    period: "08/2018 – 11/2019",
    role: "Python Developer",
    company: "Norm Software Solutions",
    location: "Hyderabad, India",
    highlights: [
      "Built RESTful APIs with the Django REST Framework, enabling clean communication between front-end and back-end components.",
      "Produced workflow reports to validate proposed changes before they were executed.",
      "Identified system enhancements that improved functionality and streamlined administration.",
      "Refactored legacy code to modernise the application architecture and improve maintainability.",
      "Integrated third-party APIs to expand functionality and automate data retrieval.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    photo: "/schools/qis-college.png",
    address: "Vengamukkapalem, Ongole, Prakasam District, Andhra Pradesh 523272",
    period: "2012 – 2016",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "QIS College of Engineering and Technology",
    location: "Ongole, India",
  },
  {
    photo: "/schools/sri-chaitanya-college.png",
    address: "Sri Chaitanya Junior Kalasala, Bhavanipuram, near Swathi Theatre, Vijayawada, Andhra Pradesh",
    period: "2010 – 2012",
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior Kalasala",
    location: "Vijayawada, India",
  },
  {
    photo: "/schools/st-arnolds-school.png",
    address: "Medarametla, Andhra Pradesh",
    period: "2009 – 2010",
    degree: "Secondary School Certificate (SSC)",
    institution: "St. Arnold's High School",
    location: "Medarametla, India",
  },
];

/** Roles typed out in the hero. */
export const heroRoles: string[] = [
  "Full Stack Developer",
  "Python & Django Engineer",
  "Next.js Front-End Developer",
  "AWS Deployment Specialist",
];

/** Headline figures for the hero, all taken from the resume. */
export const heroStats: { value: string; label: string }[] = [
  { value: "7+", label: "Years building web applications" },
  { value: "4", label: "Projects across healthcare, AI and personal finance" },
  { value: "AWS", label: "EC2, S3, SES, Lambda and RDS, plus Heroku and Vercel" },
];
