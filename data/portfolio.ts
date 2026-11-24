import { Cloud, Container, FileCode, MonitorSmartphone } from "lucide-react";

import type { EducationItem, ExperienceItem, Project, SkillGroup } from "@/types/portfolio";

export const profileSummary =
  "A competent professional over 7 years of experience in web development using Python, Django, Django Rest Framework and Flask. Handling Telegram Chat updates using Flask. Deployment of web application in Heroku and AWS EC2 instance. Dump/load data from the cloud database to the local database using Django management commands. Worked on Django CRON jobs to send mails as notifications to users asynchronously. Worked on the configuration of Email SMTP with AWS SES to the web application. Developed a custom theme for Word Press to develop web-application.";

/** The headline skills listed in the resume's Skills section. */
export const headlineSkills: string[] = ["Python", "Django", "NodeJs", "NextJS", "Devops", "AWS Services"];

export const skillGroups: SkillGroup[] = [
  {
    title: "Python & Django",
    items: ["Python", "Django", "Django Rest Framework", "Flask"],
    icon: FileCode,
  },
  {
    title: "JavaScript & UI",
    items: ["NodeJs", "ExpressJS", "NextJS"],
    icon: MonitorSmartphone,
  },
  {
    title: "Cloud & deployment",
    items: ["Heroku", "AWS EC2", "AWS SES", "AWS S3"],
    icon: Cloud,
  },
  {
    title: "DevOps & data",
    items: ["Devops", "Docker", "MongoDB", "Swagger UI", "Django CRON jobs"],
    icon: Container,
  },
];

export const alsoComfortableWith: string[] = ["HL7 / FHIR", "Elixir / Phoenix", "SMTP & email", "Message queues"];

export const projects: Project[] = [
  {
    title: "Vulcan",
    subtitle: "Pipeline to convert raw HL7 messages into FHIR JSON",
    period: "Present",
    tags: ["Healthcare", "Cloud", "Full Stack"],
    summary:
      "Vulcan is a medical-related application/pipeline with multiple services including Watcher, Consumer, Converter, Validator, and Finisher.",
    points: [
      {
        label: "Watcher",
        bullets: [
          "Service that receives a notification from S3 when a new file is uploaded, checks the hash of the file and verifies its existence in the database.",
          "If the file exists, saves it as a duplicate and stops execution, if the file does not exist, pushes it into a Simple Queue.",
        ],
      },
      {
        label: "Consumer",
        bullets: [
          "Actively consumes messages from the queue and validates the message type and If the message is HL7",
          "Triggers the HL7 API of the Converter service and receives FHIR JSON",
          "Posts the FHIR JSON payload to the Finisher API.",
        ],
      },
      { label: "Converter", text: "Converts HL7 messages to FHIR JSON." },
      {
        label: "Validator",
        text: "Validates FHIR JSON by ingesting the payload and providing a response.",
      },
      {
        label: "Finisher",
        text: "Saves the response to the database and pushes FHIR JSON to S3 and MongoDB.",
      },
      {
        label: "FHIR API (ExpressJS)",
        text: "Handles FHIR JSONs with Swagger UI.",
      },
      {
        label: "Provider Portal (NextJS)",
        text: "Provides an overview of multiple resources with tabular views.",
      },
    ],
    stack: ["S3", "Simple Queue", "ExpressJS", "NextJS", "MongoDB", "Swagger UI"],
  },
  {
    title: "Libero",
    subtitle: "AI powered video conferencing product",
    period: "2020 – 2021",
    tags: ["AI & Video", "Full Stack"],
    summary:
      "Libero is one of the top five video conferencing products in an Innovation challenge conducted under the Digital India program - 2020, also recognized as a potential product to provide an intuitive video conferencing experience for its users.",
    points: [
      {
        text: "Client App built up on NextJS integrating with openvidu Media server for transforming packets for live video streaming and joined users information.",
      },
      {
        text: "Server App built up on Phoenix (Elixir framework) for saving information like rooms, chats, boards and users.",
      },
      { text: "Media Server deployed using Dockerized image." },
    ],
    stack: ["NextJS", "OpenVidu", "Phoenix / Elixir", "Docker"],
  },
  {
    title: "JVB Health and Wellness",
    subtitle: "Health Care app to monitor and analyse the health data",
    period: "2018 – 2019",
    tags: ["Healthcare", "Full Stack"],
    summary:
      "Helping people improve their health and quality of life through a targeted approach to personal transformation. Integrated data from health devices into web and mobile applications.",
    points: [
      {
        text: "Data reviews and analysis of your workouts, nutrition, sleep, movement and race results. We will get the data from the Health watches like Fit bit, Garmin, Apple etc.",
      },
      {
        text: "We integrated all those watches on the web and as well in mobile applications.",
      },
    ],
    stack: ["Fitbit", "Garmin", "Apple Health", "Web", "Mobile"],
  },
  {
    title: "PayTrack",
    subtitle: "Track EMIs, loans, credit card bills and recurring payments",
    period: "2026",
    tags: ["Full Stack", "Personal Finance"],
    summary:
      "Keeps EMIs, loans, credit card bills and recurring payments organised, with reminders, analytics and a full payment history.",
    points: [],
    stack: ["Next.js", "TypeScript"],
    links: [
      { label: "Live site", url: "https://paytrack-woad.vercel.app" },
      { label: "Source code", url: "https://github.com/venkatesh-sp/paytrack" },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "12/2019 – Present",
    role: "Full Stack Developer",
    company: "Soulpage IT Solutions Private Limited",
    location: "Hyderabad, India",
    highlights: [
      "Integrated third-party APIs to enhance overall application functionality and improve user experience.",
      "Continuously updated skillset through professional development courses, staying current with industry trends and emerging technologies.",
      "Demonstrated strong problem-solving abilities by quickly identifying and resolving defects, leading to increased application stability and user satisfaction.",
      "Conducted thorough code reviews to maintain high standards of quality and consistency throughout the project lifecycle.",
    ],
  },
  {
    period: "08/2018 – 11/2019",
    role: "Python Developer",
    company: "Norm Software Solutions",
    location: "Hyderabad, India",
    highlights: [
      "Created RESTful APIs using the Django REST framework, enabling seamless communication between front-end and back-end components.",
      "Generated workflow reports to test proposed change executions.",
      "Identified possible system enhancements to improving functionality and streamline administration.",
      "Refactored legacy codebase to modernize application architecture and improve maintainability.",
      "Integrated third-party APIs to expand functionality and automate data retrieval processes.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    period: "2012 – 2016",
    degree: "Bachelor of Technology (CSE)",
    institution: "Qis College of Engineering and Technology",
    location: "Ongole, India",
  },
  {
    period: "2010 – 2012",
    degree: "Board of Intermediate (MPC)",
    institution: "Sri Chaitanya Jr. Kalasala",
    location: "Vijayawada, India",
  },
  {
    period: "2009 – 2010",
    degree: "Secondary School Certificate (SSC)",
    institution: "St. Arnold's High School",
    location: "Medarametla, India",
  },
];

export const declaration =
  "I set high standards for myself and have my dreams and ambitions. I have a flair for learning new things and persistence in problem-solving. I strongly believe that with my skills, analytical and logical ability, determination, dedication, commitment, and diligent efforts, I can prove to be an asset to any organization.";

/** Headline figures for the hero, all taken from the resume. */
/** Roles typed out in the hero. */
export const heroRoles: string[] = [
  "Full Stack Developer",
  "Python & Django engineer",
  "Next.js front-end builder",
  "AWS deployment specialist",
];

export const heroStats: { value: string; label: string }[] = [
  { value: "7+", label: "Years building web applications" },
  { value: "3", label: "Projects across healthcare, AI and health tech" },
  { value: "AWS", label: "EC2, S3 and SES deployments, plus Heroku" },
];
