"use client";

const Services = () => {
    return (
                <section className="services wrapper" id="services">
            <div className="services-contents">
                <div className="services-contents-heading">
                    <h2>My Services</h2>
                    <p>These are some key areas I’ve developed expertise in and provide as services.</p>
                </div>
                <div className="services-container">
                    <div className="services-box">
                        <div className="services-container-contents">
                            <div className="services-video-container">
                                <video id="web-dev" src="video/web-dev-video.mp4" muted loop autoPlay />
                            </div>
                            <div className="services-description">
                                <div className="services-desc-heading">
                                    <div className="icon">
                                        <img width="34" height="34" src="https://img.icons8.com/ios-filled/100/17bbfc/laptop-coding.png" alt="laptop-coding"/>
                                    </div>
                                    <div className="heading">
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                                <div className="services-desc-body">
                                    <p>Building <span>Modern</span>, <span>Scalable</span>, and <span>Resources efficient</span> Web Applications that streamlines <span>Work flow</span> and drive <span>Growth</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-box">
                        <div className="services-container-contents">
                            <div className="services-video-container">
                                <video id="frontend" src="video/frontend-video.mp4" muted loop autoPlay />
                            </div>
                            <div className="services-description">
                                <div className="services-desc-heading">
                                    <div className="icon">
                                        <img width="34" height="34" src="https://img.icons8.com/material-outlined/96/17bbfc/web.png" alt="web"/>
                                    </div>
                                    <div className="heading">
                                        <h5>Frontend Development</h5>
                                    </div>
                                </div>
                                <div className="service-desc-body">
                                    <p>Developing <span>Seamless</span>, <span>Aesthetically pleasing</span>, and <span>User friendly</span> Interfaces that <span>Attracts</span> and <span>Converts</span> Customers into potential clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-box">
                        <div className="services-container-contents">
                            <div className="services-video-container">
                                <video id="frontend" src="video/seo-video.mp4" muted loop autoPlay />
                            </div>
                            <div className="services-description">
                                <div className="services-desc-heading">
                                    <div className="icon">
                                        <img width="34" height="34" src="https://img.icons8.com/pulsar-line/96/17bbfc/search-bar.png" alt="search-bar"/>
                                    </div>
                                    <div className="heading">
                                        <h5>SEO - optimization</h5>
                                    </div>
                                </div>
                                <div className="service-desc-body">
                                    <p>I don’t just build websites—I create <span>search-engine-optimized (SEO)</span> web experiences that: <span>Rank higher on Google</span>,
                                    <span> Convert visitors into leads</span>, <span> Fast-loading, secure, and scalable.</span>(My works are a testiment to that)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Services;