"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SideNavbar = () => {
    const[isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        isBurgerMenuOpen === true ? setIsBurgerMenuOpen(false) : setIsBurgerMenuOpen(true)
    }

    window.onscroll = () => {
        setIsBurgerMenuOpen(false)
    }

    return (
        <div className="pages-nav">
            <nav>
                <div className="spin"></div>
                <ul>
                    <li>
                        <a href="#overview" title="Overview">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                fill="none" stroke="currentColor" 
                                strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" class="lucide lucide-house-icon lucide-house">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
                                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" title="Projects">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-cpu-icon lucide-cpu">
                                <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/>
                                <path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#about" title="About Me">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-user-icon lucide-user">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#services" title="Services">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                <path
                                    d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#reviews"  title="Reviews">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                                strokeLinejoin="round" class="lucide lucide-message-square-diff-icon lucide-message-square-diff">
                                <path d="m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M9 10h6"/><path d="M12 7v6"/><path d="M9 17h6"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                  
                <button 
                onClick={toggleBurgerMenu} 
                className={isBurgerMenuOpen ? 'bx bx-x' : 'bx bx-menu'} id="menu-icon" />
            </nav>

             {/* The responsive burger menu  */}
        
            <motion.div 
            className="burger-menu"
            initial={{ display: 'block'}}
            animate={isBurgerMenuOpen ? {display: 'block'} : { display: 'none'}}
            transition={{ duration: 0, delay: 0 }}
            >
                <ul>
                    <li>
                        <a href="#overview">
                            <div className="burger-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor" 
                                    strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" class="lucide lucide-house-icon lucide-house">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                </svg>
                            </div>
                            <div className="section-name">
                                <p>Home</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <div className="burger-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-cpu-icon lucide-cpu">
                                    <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/>
                                    <path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
                                </svg>
                            </div>
                            <div className="section-name">
                                <p>Projects</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <div className="burger-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-user-icon lucide-user">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <div className="section-name">
                                <p>About me</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            <div className="burger-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-hand-helping-icon lucide-hand-helping">
                                    <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"/><path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/>
                                    <path d="m2 13 6 6"/>
                                </svg>
                            </div>
                            <div className="section-name">
                                <p>Services</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#reviews">
                            <div className="burger-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                                    strokeLinejoin="round" class="lucide lucide-message-square-diff-icon lucide-message-square-diff">
                                    <path d="m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M9 10h6"/><path d="M12 7v6"/><path d="M9 17h6"/>
                                </svg>
                            </div>
                            <div className="section-name">
                                <p>Review</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}
 
export default SideNavbar;