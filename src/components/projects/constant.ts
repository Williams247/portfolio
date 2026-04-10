import CamClient from "../../static/images/cam_client.png";
import Giftara from "../../static/images/giftara.jpg";
import HokfamShop from "../../static/images/hokfam_shop.jpg";
import IntelligentInnovations from "../../static/images/intelligent_innovations.jpg";
import SkillPaddy from "../../static/images/skillpaddy.jpg";
import WhichRide from "../../static/images/which_ride.png";
import { Props } from "./type";

export const ProjectsList: Array<Props> = [
  {
    image: Giftara,
    name: "Giftara",
    description:
      "Buy and send digital e-gift cards for birthdays, celebrations, shopping, travel, and more—with instant delivery to email, wallet, or profile, plus an Android app for on-the-go gifting.",
    stacks: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React Native", "Laravel"],
    link: "https://giftara.app/",
  },
  {
    image: IntelligentInnovations,
    name: "Intelligent Innovations",
    description:
      "Company website for Intelligent Innovations—showcasing enterprise technology solutions, product portfolio, and client work for partners across banking, telecom, FMCG, and government.",
    stacks: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://www.intelligentinnovations.co",
  },
  {
    image: SkillPaddy,
    name: "SkillPaddy",
    description:
      "Online learning platform for learners, tutors, and businesses—browse short courses and intensive programs across tech and soft skills, with enrollment, community, and pathways from learning to earning.",
    stacks: ["Next.js", "Tailwind CSS", "TypeScript", "NestJS", "PostgreSQL"],
    link: "https://skillpaddy.com",
  },
  {
    image: HokfamShop,
    name: "Hokfam Shop",
    description:
      "E-commerce storefront for Hokfam—a modern clothing brand with curated collections, categories, new arrivals, promos, and a shopping experience built for comfort, style, and checkout.",
    stacks: ["Tailwind CSS", "Next.js", "NestJS", "MongoDB", "PHP"],
    link: "https://shop.hokfam.com",
  },
  {
    image: WhichRide,
    name: "Which Ride",
    description:
      "Which ride is a simple landing page that is built for transportation services",
    stacks: ["React", "scss"],
    link: "https://which-ride-webpage.netlify.app",
  },
  {
    image: CamClient,
    name: "Cam Client",
    description:
      "Cam Client is a web based application for taking passport photographs, it open source it can be used in a verification or registration scenario",
    stacks: ["React"],
    link: "https://cam-client.netlify.app/",
  },
];
