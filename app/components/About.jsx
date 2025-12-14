"use client";

const About = () => {
    return (
        <section className="about wrapper" id="about">
            <div className="about-section-contents">
                <div className="heading">
                    <h2>About Me</h2>
                </div>

                <div className="personal-info-container">
                    <div className="left-picture">
                        <div className="spin"></div>
                        <div className="img"></div>
                    </div>
        
                    <div className="right-contents">
                        <div className="personal-info">
                            <h3>I'm Kelvin Omoluyi</h3>
                            <p>I'm a <span>software engineer</span> passionate about turning ideas into <span>real, creative and working solutions</span> through code.<br />
                                With a <span>strong grasp</span> for both <span>frontend finesse</span> and <span>backend brilliance</span>, I build tailored web applications that 
                                are not only <span>Visually engaging</span> but also <span>highly functional</span>.
                            </p>
                            <p>I don’t just identify problems, I <span>dig deep</span> to solve them with <span>smart, effective</span> solutions that <span>boost productivity</span> and
                            <span>deliver real value</span></p>
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
                                <div className="stack"></div>
                            </div>

                            <div className="buttons-container">
                                <a href="#contact">
                                    <div className="btn-01">
                                        <p>Let's talk</p>
                                    </div>
                                </a>
                                <a href="file/KelvinOmoluyi.pdf" target="_blank">
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