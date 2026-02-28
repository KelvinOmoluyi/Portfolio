import React from 'react';
import { Project } from '@/types/project';
import Image from 'next/image';

interface ProjectDisplayBoardProps {
  project: Project;
}

const ProjectDisplayBoard: React.FC<ProjectDisplayBoardProps> = ({ project }) => {
  return (
    <div className="projects-display">
        <div className="project-box">
            <div className="project-box-contents">
                <div className="description">
                    <div className="top-description-contents">
                        <div className="project-title">
                            <div className="project-logo relative">
                              <Image 
                                src={project.image.path} 
                                alt={project.image.alt} 
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="project-name">
                              <h5>{project.company}</h5>
                            </div>
                        </div>
                        <div className="description-of-project">
                            <p dangerouslySetInnerHTML={{ __html: project.description }} />
                        </div>
                        <div className="project-keywords">
                          {project.keywords.map((keyWord, i) => (
                            <div key={i} className="keyword">
                                <p>{keyWord}</p>
                            </div>
                          ))}
                        </div>
                    </div>
                    
                    {project.ongoing && (
                      <div className="projects-ongoing-watermark">
                          <h2>Project Ongoing</h2>
                      </div>
                    )}

                    <div className="bottom-description-contents">
                        <div className="skill-stack-mention">
                            <p>Skill stack used in making this project -</p>
                        </div>
                        <div className="skill-stack-container">
                          {project.skills.map((skill, i) => (
                            <div key={i} className="skill">
                                <p>{skill}</p>
                            </div>
                          ))}
                        </div>
                        <div className="visit-site-cta">
                          <div>
                            <h5>
                              {project.realWorldProduct ? "Real Client Project" : project.productProject ? "Product Project" : "Portfolio Project"}
                            </h5>
                          </div>
                          <div className="cta-container">
                            <div className="cta">
                                <a href={project.previewLink} target="_blank" rel="noopener noreferrer"><h6><span>Visit website</span></h6></a>
                            </div>
                            <div className="link">
                                <a href={project.previewLink} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link">
                                        <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                    </svg>
                                </a>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="media relative">
                    <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                      <Image 
                        src={project.image.thumbNail} 
                        alt={project.company} 
                        fill
                        className='object-cover h-auto'
                      />
                    </a>
                </div>
            </div>
        </div>
      </div>
  )
}

export default ProjectDisplayBoard