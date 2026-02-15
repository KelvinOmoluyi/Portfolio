import React from 'react';
import Image from 'next/image';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="services-box">
        <div className="services-container-contents">
            <div className="services-video-container">
                <video src={service.videoSrc} muted loop autoPlay playsInline />
            </div>
            <div className="services-description">
                <div className="services-desc-heading">
                    <div className="icon">
                        <Image width={34} height={34} src={service.iconSrc} alt={service.iconAlt}/>
                    </div>
                    <div className="heading">
                        <h5>{service.title}</h5>
                    </div>
                </div>
                <div className="service-desc-body">
                    <p dangerouslySetInnerHTML={{ __html: service.description }} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ServiceCard;
