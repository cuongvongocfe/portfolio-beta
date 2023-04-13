import React from "react";
import {
  FaMobileAlt,
  FaDesktop,
  FaDove,
  FaEuroSign,
  FaHeadset,
  FaHospitalUser,
} from "react-icons/fa";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      icon: <FaMobileAlt className="" />,
      title: "App Development",
      description:
        "We will handle your app come to life and maintain it through the lifecycle",
    },
    {
      icon: <FaDesktop className="" />,
      title: "Web Development",
      description:
        "Have a website in mind? I will make your vision come to life",
    },
    {
      icon: <FaDove className="" />,
      title: "Fast Service",
      description:
        "Tired of waiting? Not in here! Everyting will be deliverd at lightning speed",
    },
    {
      icon: <FaEuroSign className="" />,
      title: "Value for Money",
      description: "Why pay high price when I am offering you a fair price?",
    },
    {
      icon: <FaHeadset className="" />,
      title: "24/7 Suppport",
      description:
        "Website not wroking and who are you going to find at this hour?? Me Bro... Me",
    },
    {
      icon: <FaHospitalUser className="" />,
      title: "Friend Service",
      description:
        "Feeling lonely in your journey to make a website for your business? I am here bro",
    },
  ];

  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:py-20">
      <div  className="grid grid-cols-1 lg:grid-cols-3">
        {services.map((service, i) => (
          <Service key={i} service={service}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
