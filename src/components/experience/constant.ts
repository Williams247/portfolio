export interface ExperienceItem {
  company: string;
  /** When set, the company name links to this URL in a new tab. */
  website?: string;
  timeframe: string;
  summary: string[];
  description: string[];
  role: string;
  type: string;
}

/** True when the card should offer “More” to read full details. */
export function experienceHasMore(item: ExperienceItem): boolean {
  const { summary, description } = item;
  if (description.length > summary.length) return true;
  return description.some((d, i) => d !== summary[i]);
}

export const experiences: Array<ExperienceItem> = [
  {
    company: "Uburu Health",
    website: "https://www.uburu.ai/",
    timeframe: "Mar 2023 - Present",
    summary: [
      "Improved core app performance and split a monolith into independent dashboard apps.",
      "Healthcare data work: research queries, patient record matching, and document digitization on AWS.",
    ],
    description: [
      "Optimized the company’s core application, improving system performance, responsiveness, and scalability for daily operations.",
      "Refactored a large monolithic codebase by separating multiple user dashboards into independent applications, improving maintainability, readability, scalability, and deployment efficiency.",
      "Developed a high-performance Query-as-a-Service platform for medical research data, enabling fast and reliable access for researchers and healthcare professionals.",
      "Designed and built a patient medical history matching platform so providers can retrieve records across integrated facilities for faster, more informed care.",
      "Developed a medical document digitization flow: scan paper reports with a mobile camera, crop and process images, and upload securely to AWS S3.",
      "Built features that turn scanned documents into structured, searchable digital records, supporting the shift from paper to digital records.",
      "Collaborated with product, medical, and research stakeholders to deliver scalable healthcare technology.",
    ],
    role: "Software Engineer",
    type: "Full-time",
  },
  {
    company: "Hokfam",
    website: "https://hokfam.com/",
    timeframe: "May 2025 - Jan 2026",
    summary: [
      "Led clothing e-commerce: storefront UX, scalable product/order APIs, and Stripe.",
    ],
    description: [
      "Led development of a clothing e-commerce platform with a seamless shopping experience and a scalable backend for products, orders, and payments (Stripe).",
    ],
    role: "Software Engineer",
    type: "Full-time",
  },
  {
    company: "Intelligent Innovations Co.",
    website: "https://www.intelligentinnovations.co/",
    timeframe: "Jul 2021 - 2026",
    summary: [
      "Union Bank back-office, company site, email templates, Nigerian ed-tech, and a job marketplace.",
      "Scalable frontends and CI/CD with Git, GitHub, and GitLab.",
    ],
    description: [
      "Collaborated with Union Bank of Nigeria on a back-office system that streamlined internal operations and improved productivity and workflow efficiency.",
      "Designed and implemented reusable email templates, improving communication consistency and campaign delivery.",
      "Developed a Nigerian-focused ed-tech platform where users learn and monetize digital skills online, similar to modern e-learning marketplaces.",
      "Built and maintained the company’s primary website with strong performance, responsiveness, and UX across devices.",
      "Developed a job marketplace connecting employers and job seekers with search, applications, and employer listings.",
      "Implemented scalable frontend architectures with modern frameworks, improving performance and developer efficiency.",
      "Managed version control and CI/CD with Git, GitHub, and GitLab for more reliable deployments and collaboration.",
    ],
    role: "Software Engineer",
    type: "Full-time",
  },
  {
    company: "Erudyte",
    timeframe: "Jan 2024 - Oct 2024",
    summary: [
      "Modular US ed-tech with distinct flows for teachers, students, and admins.",
    ],
    description: [
      "Developed a modular ed-tech platform for the U.S. market with role-based experiences for teachers, students, and administrators for courses, progress tracking, and platform management.",
    ],
    role: "Software Engineer",
    type: "Full-time",
  },
  {
    company: "Diamond Acre Software",
    timeframe: "Feb 2020 - May 2021",
    summary: [
      "E-commerce, Express/PostgreSQL services, marketing site, and a graded math quiz product.",
      "React/Vue interfaces and DigitalOcean hosting.",
    ],
    description: [
      "Developed a production-ready clothing e-commerce platform with product management and order processing for online sales and inventory control.",
      "Implemented secure, scalable backend services with Express.js and PostgreSQL for product data, authentication, and transactions.",
      "Delivered the company landing page to improve brand visibility, engagement, and conversion through responsive design.",
      "Built an interactive mathematics quiz platform with automated grading, real-time results, and dynamic questions.",
      "Designed responsive interfaces with React.js and Vue.js for a consistent experience across devices.",
      "Deployed and managed applications on DigitalOcean for availability and reliable production operations.",
    ],
    role: "Software Engineer",
    type: "Full-time",
  },
  {
    company: "Green Mouse Technologies",
    website: "https://greenmousetech.com/",
    timeframe: "Jan 2019 - Jan 2020",
    summary: [
      "Responsive UI with HTML/CSS/JS/Bootstrap, animations, and wireframe-to-build collaboration.",
      "Mentored students in fundamentals, best practices, and debugging on real projects.",
    ],
    description: [
      "Developed responsive front-end interfaces with HTML5, CSS3, JavaScript, jQuery, and Bootstrap.",
      "Used CSS animations, transitions, and modern UI patterns for engaging, user-friendly interfaces.",
      "Translated wireframes and mockups into functional pages to support design and development planning.",
      "Assisted in wireframe and mockup design to improve UX and layout before build-out.",
      "Mentored students in web fundamentals, best practices, and core technologies; provided debugging support on real-world projects.",
    ],
    role: "Software Engineer & Tutor",
    type: "Full-time",
  },
];
