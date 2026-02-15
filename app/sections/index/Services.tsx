"use client";

import React from 'react';
import ServiceCard from '@/components/sections/ServiceCard';
import { Service } from '@/types/service';

const services: Service[] = [
    {
        title: "Web Development",
        videoSrc: "/video/web-dev-video.mp4",
        iconSrc: "https://img.icons8.com/ios-filled/100/17bbfc/laptop-coding.png",
        iconAlt: "laptop-coding",
        description: "I Build <span>Modern</span>, <span>Scalable</span>, and <span>Resources efficient</span> Web Applications that streamlines <span>Work flow</span> and drive <span>Growth</span>"
    },
    {
        title: "Mobile Development",
        videoSrc: "/video/mobile-dev-video.mp4",
        iconSrc: "https://img.icons8.com/pulsar-line/96/17bbfc/iphone14-pro.png",
        iconAlt: "mobile-device",
        description: "Building <span>Intuitive</span> and <span>Native-feeling</span> mobile applications that deliver <span>Fluid Navigation</span> and a <span>Premium Experience</span> across all devices and platforms"
    },
    {
        title: "SEO - optimization",
        videoSrc: "/video/seo-video.mp4",
        iconSrc: "https://img.icons8.com/pulsar-line/96/17bbfc/search-bar.png",
        iconAlt: "search-bar",
        description: "I don’t just build websites—I create <span>search-engine-optimized (SEO)</span> web experiences that: <span>Rank higher on Google</span>, <span> Convert visitors into leads</span>, <span> Fast-loading, secure, and scalable.</span>(My works are a testiment to that)"
    }
];

const Services = () => {
    return (
        <section className="services wrapper" id="services">
            <div className="services-contents">
                <div className="services-contents-heading">
                    <h2>My Services</h2>
                    <p>These are some key areas I’ve developed expertise in and provide as services.</p>
                </div>
                <div className="services-container">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
