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
      "Made modifications and upgraded a financial platform where you can basically apply for loans.",
      "Modified and built a job application platform, this forum allows users to be able to apply and create jobs."
    ],
    role: "Software Engineer",
    type: "Full-time",
  },
];
