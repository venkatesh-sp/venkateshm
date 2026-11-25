import type { NavLink } from "@/types/portfolio";

export const profile = {
  name: "Venkatesh Marreboyina",
  title: "Full Stack Developer",
  email: "venkatesh.marreboyina@gmail.com",
  phone: "8977780323",
  location: "Hyderabad, India",
  /** Profile photo in /public. If the file is missing or the path is empty, the animated developer is shown instead. */
  image: "/profile.jpg",
};

/** Public URL of the site, used for canonical links, Open Graph and the sitemap. Set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.venkateshm.me").replace(/\/$/, "");

export const siteMeta = {
  title: "Venkatesh Marreboyina | Full Stack Developer",
  description:
    "Full Stack Developer with over 7 years of experience building web applications with Python, Django, Django REST Framework, Flask, Node.js and Next.js, deployed on AWS, Heroku and Vercel.",
  keywords: [
    "Full Stack Developer",
    "Python",
    "Django",
    "Django REST Framework",
    "Flask",
    "Next.js",
    "Node.js",
    "AWS",
    "Heroku",
    "Docker",
    "Hyderabad",
  ],
  themeColor: "#ffffff",
  locale: "en_IN",
  ogImage: "/og-image.png",
  /** Bump whenever public/og-image.png changes, so social platforms fetch the new image instead of a cached one. */
  ogImageVersion: "2",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
