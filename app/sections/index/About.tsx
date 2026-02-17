"use client";

import Link from "next/link";

const About = () => {
    return (
        <section className="about wrapper" id="about">
            <div className="about-section-contents">
                <div className="heading">
                    <h2>About Me</h2>
                </div>

                <div className="personal-info-container">
                    <div>
                        <div className="left-picture">
                            <div className="spin"></div>
                            <div className="img"></div>
                        </div>
                    </div>
        
                    <div className="right-contents">
                        <div className="personal-info">
                            <h3>I'm Kelvin Omoluyi</h3>
                            <p>I’m a Software Engineer who loves turning raw ideas into <span>real MVPs - fast</span>. 
                                I love <span>immersive aesthetics</span>, building clean, responsive interfaces, and I'm all about designing scalable systems, while shipping end-to-end 
                                features that delivers desired user experience
                            </p>
                            <br />
                            <p>I leverage <span>AI as a coding assistant</span> to accelerate development and ensure <span>technical precision</span>, delivering <span>optimized solutions</span> that drive <span>efficiency</span> and <span>business growth</span>.</p>
                        </div>

                        <div className="stack-and-contact-box">
                            <h5>Skill stack</h5>
                            <div className="stack-box">
                                {/* i used backgroud image for the divs */}
                                <div className="stack"></div>
                                <div className="stack"></div>
                                <div className="stack"></div>
                                <div className="stack"></div>
                                <div className="stack"></div>
                                <div className="stack"></div>
                                <div className="stack"></div>
                                <div className="stack"></div>
                                <div className="stack"></div>
                            </div>

                            <div className="buttons-container">
                                <Link href="#contact">
                                    <div className="btn-01">
                                        <p>Let&apos;s talk</p>
                                    </div>
                                </Link>
                                <a href="/file/KelvinOmoluyi.pdf" target="_blank">
                                    <div className="btn-02">
                                        <p>My resume</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;