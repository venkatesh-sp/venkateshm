import {
  Boxes,
  Braces,
  Clock,
  Code,
  GitBranch,
  Globe,
  HeartPulse,
  type LucideIcon,
  MessageCircle,
  Send,
  Smartphone,
  Terminal,
  Video,
  Watch,
  Workflow,
} from "lucide-react";

/** Brand logo keys (see data/brand-logos.ts) for products and frameworks. */
export const brandIcons: Record<string, string> = {
  Python: "python",
  Django: "django",
  Flask: "flask",
  NodeJs: "nodejs",
  ExpressJS: "expressjs",
  NextJS: "nextjs",
  "Phoenix / Elixir": "elixir",
  Heroku: "heroku",
  "AWS EC2": "ec2",
  "AWS S3": "aws",
  S3: "aws",
  "AWS SES": "aws",
  "AWS Services": "aws",
  Docker: "docker",
  MongoDB: "mongodb",
  "Swagger UI": "swagger",
  "WordPress themes": "wordpress",
};

/**
 * Lucide icons for items that are concepts rather than brands
 * (practices, protocols, devices, queues and similar).
 */
export const conceptIcons: Record<string, LucideIcon> = {
  Devops: GitBranch,
  "Django CRON jobs": Clock,
  "Django management commands": Terminal,
  "Simple Queue": Boxes,
  "Message queues": Workflow,
  "SMTP & email": Send,
  "HL7 / FHIR": Braces,
  "Telegram Chat updates (Flask)": MessageCircle,
  OpenVidu: Video,
  Fitbit: Watch,
  Garmin: Watch,
  "Apple Health": HeartPulse,
  Web: Globe,
  Mobile: Smartphone,
};

/** Used when a name has neither a brand logo nor a concept icon. */
export const fallbackTechIcon: LucideIcon = Code;
