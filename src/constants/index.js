// Uncommented unused imports
// import aws from "../assets/aws.png";
// import git from "../assets/git.png";
// import oracle from "../assets/oracle.png";

import c from "../assets/c.png";
import css from "../assets/css.png";
import github from "../assets/github.jpeg";
import html1 from "../assets/html1.png";
import java from "../assets/java.png";
import js from "../assets/js1.png";
import mysql from "../assets/mysql.png";
import py from "../assets/py.jpeg";
//import react from "../assets/react.png";
import data from "../assets/data.png";
import web from "../assets/web.png";
//import pro1 from "../assets/pro1.png";
import r from "../assets/r.png";
import tableau from "../assets/tableau.png";

import datapro1 from "../assets/datapro1.png";
import languagepro2 from "../assets/languagepro2.png";
import resumepro3 from "../assets/resumepro3.jpeg";
import teacher from "../assets/teacher.jpeg";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: "Data Analyst",
    icon: data,
  },
];

const technologies = [
  {
    name: "Python",
    icon: py,
  },
  {
    name: "Java",
    icon: java,
  },
  
  {
    name: "C",
    icon: c,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "HTML-5",
    icon: html1,
  },
  {
    name: "CSS-3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  
  {
    name: "Database",
    icon: mysql,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "GitHub",
    icon: github,
  },
  
];

const projects = [
  {
    name: "Awesome resume",
    description:
      "Developed a resume builder website to streamline the creation of professional resumes using customizable templates and guided instructions. This project enhances user experience by simplifying the process of showcasing skills and experiences.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
    ],
    image: resumepro3,
    source_code_link: " ",
    source_deploy_link: " ",
  },

  {
    name: "CarCommerce Dynamics",
    description:
      "Analyzed car sales data using advanced data analytics and visualization techniques to uncover key trends and insights.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
    ],
    image: datapro1,
    source_code_link: " ",
    source_deploy_link: " ",
  },

  {
    name: "LinguaMate",
    description:
      "Developed a robust language translation application, Linguify, which translates English text into multiple languages.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
    ],
    image: languagepro2,
    source_code_link: " ",
    source_deploy_link: " ",
  },
];

// constants.js
export const tutors = [
  {
    name: 'John Doe',
    subject: 'Mathematics',
    rating: 4.5,
    image: 'teacher',
    profile_link: 'link_to_profile',
    description: 'Experienced Math tutor with 10 years of experience.'
  },
  {
    name: 'Jane Smith',
    subject: 'Physics',
    rating: 4.8,
    image: 'teacher',
    profile_link: 'link_to_profile',
    description: 'PhD in Physics with a passion for teaching.'
  },
  {
    name: 'Jane Smith',
    subject: 'Physics',
    rating: 4.8,
    image: 'teacher',
    profile_link: 'link_to_profile',
    description: 'PhD in Physics with a passion for teaching.'
  },
  {
    name: 'Jane Smith',
    subject: 'Physics',
    rating: 4.8,
    image: 'teacher',
    profile_link: 'link_to_profile',
    description: 'PhD in Physics with a passion for teaching.'
  },
  {
    name: 'Jane Smith',
    subject: 'Physics',
    rating: 4.8,
    image: 'teacher',
    profile_link: 'link_to_profile',
    description: 'PhD in Physics with a passion for teaching.'
  },
  {
    name: 'Jane Smith',
    subject: 'Physics',
    rating: 4.8,
    image: 'teacher',
    profile_link: 'link_to_profile',
    description: 'PhD in Physics with a passion for teaching.'
  },
  {
    name: 'Jane Smith',
    subject: 'Physics',
    rating: 4.8,
    image: 'teacher',
    profile_link: 'link_to_profile',
    description: 'PhD in Physics with a passion for teaching.'
  },
  // Add more tutors as needed
];

export { services, technologies, projects };
