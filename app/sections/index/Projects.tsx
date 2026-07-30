"use client";

import ProjectDisplayBoard from '@/components/sections/ProjectDisplayBoard';
import { useState } from 'react';

const webProjects = [
  {
  company: "BDKG Media",
  description: "I built a <span>full-stack media platform</span> for a creative agency, designing a <span>Supabase-powered backend</span> to manage creator content, statistics, and media assets. I implemented <span>Cloudinary optimization pipelines</span> for efficient video delivery and engineered a scalable architecture capable of serving <span>high-volume media content</span> with minimal latency across web and mobile devices.",
  keywords: ["Creative Agency", "Media Platform", "Performance Optimization"],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Cloudinary",
    "Tailwind CSS",
    "Framer Motion"
  ],
  image: {
    path: "/img/bdkg-logo.jpg",
    alt: "bdkg logo",
    thumbNail: "/img/bdkg-thumbnail.png",
  },
  ongoing: false,
  realWorldProduct: true,
  previewLink: "https://www.bdkg.media",
},
  {
  company: "Aureter",
  description: "I architected a <span>multi-tenant recruitment SaaS</span> for HR agencies, backed by <span>PostgreSQL and Supabase</span>. The platform features an <span>AI-powered resume screening pipeline</span>, an <span>RAG recruitment assistant</span>, automated interview scheduling, candidate lifecycle management, and <span>role-based workspaces</span> designed to centralize recruitment operations. I also built an <span>intent-aware retrieval system</span> and <span>context caching layer</span> that significantly reduced database queries while improving AI response performance.",
  keywords: [
    "AI Recruitment",
    "Multi-tenant SaaS",
    "Decision Intelligence"
  ],
  skills: [
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Groq AI",
    "RAG",
    "TanStack Query",
    "Vite"
  ],
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
  description: "I collaborated with ADTC to build <span>Undisturb</span>, a <span>cross-platform AI wellness platform</span> that delivers personalized sleep, stress management, and habit-building experiences. I implemented <span>secure cloud-backed user workflows</span>, <span>in-app subscription management</span>, and native mobile integrations to provide a scalable, production-ready wellness experience across iOS and Android.",
  keywords: [
    "AI",
    "Wellness",
    "Cross-platform",
    "Subscription Platform"
  ],
  skills: [
    "React Native",
    "Expo",
    "TypeScript",
    "NativeWind",
    "RevenueCat"
  ],
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
  description: "I am collaborating on <span>GameXPay</span>, a <span>cross-platform fintech platform</span> that enables gamers to purchase digital assets using <span>local bank transfers</span>. I contributed to secure payment workflows, wallet management, transaction tracking, and blockchain integrations, building a reliable financial experience that reduces payment friction for digital purchases.",
  keywords: [
    "Fintech",
    "Gaming",
    "Payments",
    "Blockchain"
  ],
  skills: [
    "React Native",
    "Expo",
    "TypeScript",
    "Ether.js"
  ],
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