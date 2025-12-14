"use client";

import { motion } from "framer-motion";

const Home = () => {
    return (
        <main id="overview">
            <motion.div
            className="background-gradient"
            initial={{
                border: "0.1rem solid var(--pulse-effect-color)",
                top: "100vh",
                height: "1vh",
                aspectRatio: "1 / 1",
                opacity: 0.5,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "50%",
                position: "absolute",
                zIndex: 1,
            }}
            animate={{
                border: "26rem solid var(--pulse-effect-color)",
                top: "-70vh",
                height: "360vh",
                aspectRatio: "1 / 1",
            }}
            transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }}
            />


            <div className="hero-section-contents wrapper">
                <div className="contents-box">
                    <div className="big-words">
                        <h1>Let's Work Together To Create And Innovate</h1>
                    </div>
                    <div className="small-words">
                        <p>I am a <span>Software Engineer</span> expert at <span>Deriving solutions</span>, I brige the gap between <span>wholesome, user intuitive designs</span> and <span>functionality</span>, and I deliver with <span>precision</span>.</p>
                    </div>
                    <div className="buttons-container">
                        <a href="#contact">
                            <div className="btn-01">
                                <p>Get In Touch</p>
                            </div>
                        </a>
                        <a href="file/KelvinOmoluyi.pdf">
                            <div className="btn-02">
                                <p>Get My Resume</p>
                            </div>
                        </a>

                        <div className="social-media">
                            <div className="icon">
                                <img width="34" height="34" src="https://img.icons8.com/fluency-systems-regular/100/3d32c2/globe--v1.png" alt="globe--v1"/>
                            </div>
                            <div className="social-media-handles">
                                <a href="https://x.com/KelvinOmoluyi?t=O8jwViwrl4a2foHgMcXxCg&s=09" target="_blank">  
                                    <div className="sm">
                                        <img width="30" height="30" src="https://img.icons8.com/windows/100/3d32c2/twitterx.png" alt="twitterx"/>
                                    </div>
                                </a> 
                                <a href="https://www.linkedin.com/in/kelvin-omoluyi-6aa90031b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaFO6WMsyQs%2B0wrJYtd2IXQ%3D%3D" target="_blank">  
                                    <div className="sm">
                                        <img width="30" height="30" src="https://img.icons8.com/windows/100/3d32c2/linkedin.png" alt="linkedin"/>
                                    </div>
                                </a>
                                <a href="https://wa.link/3ppx7r" target="_blank">  
                                    <div className="sm">
                                        <img width="26" height="26" src="https://img.icons8.com/material-outlined/96/3d32c2/whatsapp--v1.png" alt="whatsapp--v1"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Home;