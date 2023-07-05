import {
  frame1,
  frame2,
  frame3,
  frame4,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  axel,
  voiyal,
  audienz,
  delivery,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: frame1,
  },
  {
    title: "React Native Developer",
    icon: frame2,
  },
  {
    title: "Founder",
    icon: frame3,
  },
  {
    title: "Model",
    icon: frame4,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "CTO & Co-Founder",
    company_name: "Voiyal GmbH",
    icon: voiyal,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Improving of the web app as the Product Owner.",
      "Leading the Tech department."
    ],
  },
  {
    title: "CTO & Co-Founder",
    company_name: "Audienz.app GmbH",
    icon: audienz,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Nov 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Improving of the web app as the Product Owner.",
      "Leading the Tech department."
    ],
  },
  {
    title: "Working student IT",
    company_name: "Axel Springer SE - Die Welt",
    icon: axel,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Jan 2020",
    points: [
      "Implementing Oembeds for welt.de.",
      "Writing master thesis “Automated subtitles for welt.de videos”.",
      "Member of Advisory Board “Youth Council“.",
      "Implementing web application for visualization of a more-like-this algorithm.",
    ],
  },
  {
    title: "Working student IT",
    company_name: "Delivery Hero - Foodora",
    icon: delivery,
    iconBg: "#E6DEDD",
    date: "Jul 2015 - Aug 2017",
    points: [
      "Implementing backlinks for partner restaurants.",
      "Creating web application for easy creation of Google accounts for employees and for managing email groups.",
      "Administration and Design of Whitelable websites for restaurants without a website."
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
