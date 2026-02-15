"use client";

import ProjectDisplayBoard from '@/components/sections/ProjectDisplayBoard';

const projects = [
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
    company: "YC Directory",
    description: "I built <span>YC Directory</span>, a <span>dynamic web application</span>. It features a <span>responsive search system</span> synced with the <span>browser URL</span> for smooth navigation, a <span>reusable card component</span> for startup showcases, and a <span>scalable UI</span> powered by <span>Next.js</span> and <span>Tailwind CSS</span>. The project also integrates Sentry, ensuring both <span>speed</span> and <span>reliability</span>.",
    keywords: ["startup", "Nextjs", "Web application", "Rendering Pattern"],
    skills: ["Nextjs", "Typescript", "TailwindCss", "Sanity", "OAuth"],
    image: {
      path: "/img/YC-logo.png",
      alt: "YC Directory logo",
      thumbNail: "/img/YCDirectory-img.PNG",
    },
    ongoing: false,
    previewLink: "https://yc-directory-three-eta.vercel.app/",
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
    ongoing: true,
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
    previewLink: "https://jemashresourcesltd.com/",
  },
  {
    company: "Summer Castle",
    description: "I built a Dynamic and Inviting website for a made-up <span>Hotel resort</span> and <span>Travels</span> company called Summer Castle, Assuming a web app that <span>showcases</span> and <span>processes accomodation</span>",
    keywords: ["luxury suites", "resort", "vacation", "travels"],
    skills: ["Html", "Css", "JavaScript", "Php", "Mysql"],
    image: {
      path: "/img/summer-castle-logo.png",
      alt: "Summer Castle logo",
      thumbNail: "/img/summer-castle-thumbnail.png",
    },
    ongoing: false,
    previewLink: "https://summercastle.ct.ws/",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-contents wrapper">
        <div className="heading-contents">
          <div className="big-words"><h2>My Works</h2></div>
          <div className="small-words">
            <p>Here are some of the projects I have worked on or participated in building.</p>
          </div>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectDisplayBoard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;