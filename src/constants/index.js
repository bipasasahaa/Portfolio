import {
  oop,
  dsa,
  sql,
  java,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  ibm,
  jp,
  codingninjas,
  greatlearning,
  testdome,
  Travel, 
  game,
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
    title: "JAVA",
    icon: java,
  },
  
  {
    title: "DSA",
    icon: dsa,
  },
  {
    title: " MY SQL ",
    icon: sql,
  },

  {
    title: " OOP ",
    icon: oop,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Three JS",
    icon: threejs,
  },

  
];

const experiences = [
  {
    title: "Data Analyst ",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#95BDFF",
    date: " 10 April 2023 - 25 April 2023",
    points: [
      "Introduction to Data Analytics",
      "Excel Basics for Data Analysis",
      "Data Visualization and Dashboards with Excel and Cognos",
      "Python Project for Data Science",
      "Databases and SQL for Data Science with Python",
      "Data Analysis with Python",
      "Data Visualization with Python",
      "IBM Data Analyst Capstone Project",
    ],
  },

  {
    title: "JAVA",
    company_name: "CODING NINJAS",
    icon: codingninjas,
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "Intoduction to java",
      "Variables and datatypes",
      "Basic I/O and its types",
      "Operators in java",
      "Control statements",
      "Methods in java",
      "Memory Allocation",
      "Arrays",
      "Strings",
      "Object oriented programming",
      "Exception Handling",
      "Collections in java",
    ],
  },

  {
    title: "Data Science Foundation",
    company_name: "Great Learning",
    icon: greatlearning,
    iconBg: "#383E56",
    date: "July 2023",
    points: [
      "Introduction to Data Science",
      "Data Science life cycle",
      "Data Mining tasks",
      "Intoduction to Machine Learning",
      "Languages for Data Science",
      "Analytics Landscape"
    ],
  },

  {
    title: "Software Engineering",
    company_name: "JPMorgan Chase & Co.",
    icon: jp,
    iconBg: "#E6DEDD",
    date: "June 2023",
    points: [
     "Interface with a stock price data feed",
     "Use JPMorgan Chase & Co. frameworks and tools",
     "Display data visually for traders",
    ],
  },

  {
    title: "Core Java",
    company_name: "Test Dome",
    icon: testdome,
    iconBg: "#E6DEDD",
    date: "June 2023",
    points: [
     "TestDome is a provider of high-quality, online skills tests that use work-sample testing methodology to screen knowledge workers. Candidates are evaluated through small samples of actual work that show how they solve problems in the real world",
  
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful , but Bipasa proved me wrong.",
    name: "larisa",
    designation: "Web Developer",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Bipasa does.",
    name: "Chris Brown",
    designation: "Full Stack Developer",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Bipasa optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "Web Developer",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DESTAVEL",
    description:
      " A Travel Website ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: Travel,
    source_code_link: "https://github.com/bipasasahaa/destavel.git",
  },
  
  {
    name: "QUBG",
    description:
      "JAVA Game Application ",
    tags: [
      {
        name: "AWT",
        color: "blue-text-gradient",
      },
      {
        name: "SWING",
        color: "green-text-gradient",
      },

    ],
    image: game,
    source_code_link: "https://github.com/bipasasahaa/Quiz-Application.git",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
