interface Props {
  company: string;
  timeframe: string;
  description: Array<string>;
  role: string;
  type: string;
}

export const experiences: Props[] = [
  {
    company: "Uburu Health",
    timeframe: "Mar 2023 - Present",
    description: [
      "Made modifications and upgraded the company's website/application.",
    ],
    role: "Software Engineer",
    type: "Full-time",
  },
  {
    company: "Intelligent Innovations Co",
    timeframe: "Jul 2021 - Present",
    description: [
      "Built the company's website using Next js.",
      "Built various email templates using vanilla Html and Css",
      "Built an e-learning or edu tech platform using both Nuxt js and Next/Nx, you can learn various skills from this platform, for more head on to https://skillpaddy.com",
    ],
    role: "Software Engineer",
    type: "Full-time",
  },
  {
    company: "Topup Mama",
    timeframe: "Oct 2021 - Feb 2022",
    description: [
      "Built user interface for the company's sales dashboard",
      "Learn't tailwind css and chakra ui"
    ],
    role: "Software Engineer",
    type: "Contract",
  },
  {
    company: "Mega Beauty",
    timeframe: "Oct 2021 - Feb 2022",
    description: [
      "Built a full stack application that allows users to be able to conduct voting actions for beauty contests.",
      "Learnt and wrote unit test for the application, i wrote the test using jest",
      "Deployed the application on both development and production environments"
    ],
    role: "Software Engineer",
    type: "Contract",
  },
  {
    company: "Diamond Acre Software",
    timeframe: "Feb 2020 - May 2021",
    description: [
      "Created user interface for the companies website, the technologies used were vanilla Html5, Css3 and JavaScript.",
      "Created mobile interfaces which used Vue.js and Quiser library to render it UI as a cross platform mobile application.",
      "Created a full stack quiz application, the technologies used was Vue, the Quiser library, Node js/Express framework and MongoDB database",
      "Learned about Nginx technology",
    ],
    role: "Software Engineer",
    type: "Full-time",
  },
  {
    company: "Green Mouse Technologies",
    timeframe: "Jan 2019 - Jan 2020",
    description: [
      "Created user interfaces for various websites/applications with technologies like Html5, Css3, Javascript and Bootstrap.",
      "Made more use of CSS3 animations and transitions on the some of the company's application.",
      "Created mock ups for the company's products.",
      "Learnt a bit of PHP",
    ],
    role: "Software Engineer and Tutor",
    type: "Full-time",
  },
];
