"use client";

import { getYear } from "@/lib/utils";
import Image from "next/image";

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer-contents">
                <div className="footer-name-and-sm">
                    <h2>Kelvin Omoluyi</h2>
                    <div className="sm-links">
                        <div className="sm">
                            <a href="https://www.linkedin.com/in/kelvin-omoluyi-6aa90031b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaFO6WMsyQs%2B0wrJYtd2IXQ%3D%3D" target="_blank">
                                <Image width={30} height={30} src="https://img.icons8.com/windows/100/000000/linkedin.png" alt="linkedin"/>
                            </a>
                        </div>
                        <div className="sm">
                            <a href="https://x.com/KelvinOmoluyi?t=O8jwViwrl4a2foHgMcXxCg&s=09" target="_blank">
                                <Image width={30} height={30} src="https://img.icons8.com/windows/100/000000/twitterx.png" alt="twitterx"/>
                            </a>
                        </div>
                        <div className="sm">
                            <a href="https://wa.link/3ppx7r" target="_blank">
                                <Image width={26} height={26} src="https://img.icons8.com/material-outlined/96/000000/whatsapp--v1.png" alt="whatsapp--v1"/>
                            </a>
                        </div>
                        <div className="sm">
                            <a href="https://github.com/KelvinOmoluyi" target="_blank" rel="noopener noreferrer" className="github-profile">
                                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="footer-github-icon">
                                    <title>GitHub</title>
                                    <path d="M10 0C4.477 0 0 4.59 0 10.253c0 4.529 2.862 8.371 6.833 9.728.5.092.682-.227.682-.506 0-.249-.012-1.104-.012-2.005-2.51.473-3.04-1.088-3.04-1.088-.455-1.175-1.11-1.488-1.11-1.488-.908-.635.068-.623.068-.623 1.003.072 1.53 1.053 1.53 1.053.892 1.548 2.34 1.1 2.91.844.092-.656.35-1.103.632-1.356-2.22-.258-4.555-1.138-4.555-5.072 0-1.12.39-2.038 1.03-2.756-.103-.259-.447-1.302.098-2.714 0 0 .84-.276 2.75 1.053a9.407 9.407 0 012.5-.346c.85 0 1.7.115 2.5.346 1.91-1.329 2.75-1.053 2.75-1.053.545 1.412.202 2.455.1 2.714.64.718 1.028 1.636 1.028 2.756 0 3.943-2.338 4.808-4.566 5.062.36.318.68.943.68 1.9 0 1.372-.012 2.477-.012 2.814 0 .28.18.607.688.504C19.14 18.62 22 14.78 22 10.253 22 4.59 17.523 0 10 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <p>Contact me @</p>
                    <h6><span>+234 904 639 3697/ +234 816 113 1024</span></h6>
                    <p>My email address</p>
                    <a href="mailto:kelvinomoluyi246@gmail.com" target="_blank" className="email-link">
                        <h6><span>kelvinomoluyi246@gmail.com</span></h6>
                    </a>
                </div>
                <div className="footer-copyright">
                    <p>Copyright &copy; {getYear()} . All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;