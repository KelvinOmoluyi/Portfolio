"use client";

import ProjectDisplayBoard from '@/components/sections/ProjectDisplayBoard';
import { useState } from 'react';

const webProjects = [
  {
    company: "Aureter",
    description: "I built a full-stack <span>SaaS recruitment platform</span> for HR agencies, equipped with <span>AI-powered resume screening</span> and an <span>RAG HR assistant</span>, to automate and streamline the hiring process. It features a <span>smart interview scheduling system</span> with automated candidate emails to <span>accelerate</span> and <span>centralise</span> the entire recruitment pipeline.",
    keywords: ["AI Recruitment", "HR SaaS", "Interview Automation"],
    skills: ["React", "TypeScript", "Supabase", "PostgreSQL", "Groq AI", "TanStack Query", "Vite"],
    image: {
      path: "/img/aureter-logo.png",
      alt: "Aureter logo",
      thumbNail: "/img/Aureter-thumbnail.png",
    },
    ongoing: false,
    previewLink: "https://aureter.vercel.app/",
  },
  {
    company: "Jemash Resorces Limited",
    description: "I built a web application for a <span>HR</span> and <span>Outsourcing</span> company, helping them in <span>establishing their online presence</span> and <span>upskill</span> their <span>work flow</span> with CV/Resume submission system, <span>Reducing</span> the time they take to recruit by <span>40%</span>",
    keywords: ["HR outsourcing", "Hr solutions", "Workforce solutions"],
    skills: ["Html", "Css", "JavaScript", "Php", "Mysql"],
    image: {
      path: "/img/Jemash-logo.png",
      alt: "jemash logo",
      thumbNail: "/img/Jemash-thumbnail.PNG",
    },
    ongoing: false,
    realWorldProduct: true,
    previewLink: "https://jemashresourcesltd.com/",
  },
  {
    company: "Apexify",
    description: "I developed a <span>React-based Dashboard</span> equipped with a <span>scalable design system</span> that includes a <span>highly reusable button component</span> supporting multiple variants, sizes, and states. The dashboard also features <span>interactive data visualizations</span> built with a <span>customized charting library</span>, delivering insightful analytics with <span>responsive layouts</span> and <span>intuitive tooltips</span>.",
    keywords: ["B2B", "Dashboard", "Web application", "SAAS"],
    skills: ["Reactjs", "Framer-Motion", "TailwindCss", "Chartjs"],
    image: {
      path: "/img/Apexify-logo.png",
      alt: "Apexify logo",
      thumbNail: "/img/Apexify-thumbnail.png",
    },
    ongoing: false,
    previewLink: "https://dashboard-sigma-taupe-48.vercel.app/",
  },
  {
    company: "Global HR Services",
    description: "I developed a web application for a <span>HR</span> and <span>Recruitment</span> firm, Equiped with <span>user intuitive UI</span> and <span>strategic C-T-A messages</span>, to ease and encourage contact, It also features a <span>smart 2-step contact form</span> to <span>streamline</span> and <span>increase</span> the productivity of employees.",
    keywords: ["HR outsourcing", "Hr solutions", "Workforce solutions"],
    skills: ["Html", "Css", "JavaScript", "Php", "Mysql"],
    image: {
      path: "/img/global-hr-logo.png",
      alt: "GHS logo",
      thumbNail: "/img/GHS-thumbnail.png",
    },
    ongoing: false,
    previewLink: "https://globalhrservices.42web.io/",
  },
  {
    company: "Proj.MG",
    description: "A Landing page for a project managing company, it's built with a <span>captivating UI</span>, <span>detailed images</span> and <span>strong C-T-A</span> links to boost <span>covertion</span>",
    keywords: ["Project Management", "Work flow", "Saas", "Landing page"],
    skills: ["React", "Vanilla Css", "Framer Motion", "Php", "Mysql"],
    image: {
      path: "/img/global-hr-logo.png",
      alt: "GHS logo",
      thumbNail: "/img/proj.mg.png",
    },
    ongoing: false,
    previewLink: "https://projmg-8qg8.vercel.app/",
  },
  // {
  //   company: "Summer Castle",
  //   description: "I built a Dynamic and Inviting website for a made-up <span>Hotel resort</span> and <span>Travels</span> company called Summer Castle, Assuming a web app that <span>showcases</span> and <span>processes accomodation</span>",
  //   keywords: ["luxury suites", "resort", "vacation", "travels"],
  //   skills: ["Html", "Css", "JavaScript", "Php", "Mysql"],
  //   image: {
  //     path: "/img/summer-castle-logo.png",
  //     alt: "Summer Castle logo",
  //     thumbNail: "/img/summer-castle-thumbnail.png",
  //   },
  //   ongoing: false,
  //   previewLink: "https://summercastle.ct.ws/",
  // },
];

const mobileProjects = [
  {
    company: "Undisturb",
    description: "I collaborated with ADTC to create a <span>cross-platform</span> mobile app called <span>Undisturb</span>, a <span>personalized AI wellness companion</span>, designed to help you <span>sleep better</span>, <span>manage stress</span>, and <span>build and track lifelong habits</span>, equiped with a <span>in app subscription</span> and native features",
    keywords: ["AI", "Wellness", "Mobile application", "Behavioral science"],
    skills: ["React Native", "Expo", "Typescript", "Nativewind", "Revenue Cat"],
    image: {
      path: "/img/undisturb-logo.png",
      alt: "Undisturb logo",
      thumbNail: "/img/undisturb-thumbnail.png",
    },
    ongoing: false,
    previewLink: "https://undisturb.io/",
    realWorldProduct: true,
  },
  {
    company: "GamexPay",
    description: "I am collaborating on GameXpay, a <span>cross-platform</span> mobile <span>fintech</span> app that enables gamers to <span>purchase in-game currency</span> using <span>standard bank transfers</span>. Designed to remove <span>payment friction</span> and simplify digital purchases, the app integrates secure wallet management, transaction tracking, and native mobile features tailored for modern gamers.",
    keywords: ["Gaming", "Web3", "Tokens", "NFT"],
    skills: ["React Native", "Expo", "Typescript", "Ether.js"],
    image: {
      path: "/img/gamexpay-logo.png",
      alt: "GamexPay logo",
      thumbNail: "/img/gamexpay-thumbnail.png",
    },
    ongoing: true,
    productProject: true,
    previewLink: "https://undisturb.io/",
  },
];

const Projects = () => {
  const [planType, setPlanType] = useState("Mobile Apps");
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    setTimeout(() => {
      setPlanType(e.target.checked ? "Web Apps" : "Mobile Apps")
    }, 300)
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-contents wrapper">
        <div className="heading-contents">
          <div className="big-words"><h2>My Works</h2></div>
          <div className="small-words">
            <p>Here are some of the projects I have worked on or participated in building.</p>
          </div>

          <div className="project-toggle-container">
            <input
              type="checkbox"
              id="project-toggle"
              onChange={handleToggle}
              checked={isChecked}
            />
            <label htmlFor="project-toggle">
              <p id="unchecked">Mobile Apps</p>
              <p id="checked">Web Apps</p>
            </label>
          </div>
        </div>



        <div className="projects-container">
          {planType === "Mobile Apps" ? mobileProjects.map((project, index) => (
            <ProjectDisplayBoard key={project.company} project={project} />
          )) : webProjects.map((project, index) => (
            <ProjectDisplayBoard key={project.company} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;