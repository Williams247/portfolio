import OneTray from "../../static/images/one_tray.png";
import TransferNg from "../../static/images/transferng.png";
import Organiser from "../../static/images/organiser.png";
import CamClient from "../../static/images/cam_client.png";
import Emmcoin from "../../static/images/emmcoin.png";
import WhichRide from "../../static/images/which_ride.png";
import { Props } from "./type";

export const ProjectsList: Array<Props> = [
  {
    image: OneTray,
    name: "One Tray",
    description:
      "OneTray helps you crawl Pexels, Unsplash and Pixabay in one single page so you don't have to spend much time combining through free images.",
    stacks: ["React", "Material UI"],
    link: "https://scientific-approval.surge.sh",
  },
  {
    image: TransferNg,
    name: "Transferhub NG",
    description:
      "TransferhubNG is an online platform designed to connect football players, coaches, agents accross teams different teams.",
    stacks: ["React", "Tailwind CSS", "Redux", "TypeScript"],
    link: "https://transferng-site.netlify.app/",
  },
  {
    image: Organiser,
    name: "Organiser",
    description:
      "Organiser is an app that helps you plan your activities, you can look at it as an event planner for your activities",
    stacks: [
      "Next.Js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Mongo DB",
      "TypeScript",
    ],
    link: "https://organiser-v2-frontend.vercel.app/",
  },
  {
    image: CamClient,
    name: "Cam Client",
    description:
      "Cam Client is a web based application for taking passport photographs, it open source it can be used in a verification or registration scenario",
    stacks: ["React"],
    link: "https://cam-client.netlify.app/",
  },
  {
    image: Emmcoin,
    name: "Emmcoin",
    description:
      "Emmcoin helps with various forms of online transactions, ranging from money transfers, airtime/data topup, crypto currencies etc",
    stacks: ["Next.JS", "TypeScript"],
    link: "https://www.emmcoin.com",
  },
  {
    image: WhichRide,
    name: "Which Ride",
    description:
      "Which ride is a simple landing page that is built for transportation services",
    stacks: ["React", "scss"],
    link: "https://which-ride-webpage.netlify.app",
  },
];
