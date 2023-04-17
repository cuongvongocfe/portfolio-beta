import React from "react";
import p1 from "../../assets/Portfolio/weather-app.jpeg";
import p2 from "../../assets/Portfolio/dreamcar.png";
import p3 from "../../assets/Portfolio/bubger.jpg";
import p4 from "../../assets/Portfolio/bubger.jpg";
import p5 from "../../assets/Portfolio/bubger.jpg";
import p6 from "../../assets/Portfolio/bubger.jpg";
import Portfolio from "./Portfolio";
const PortfolioList = () => {
  const portfolioList = [
    {
      image: p1,
      title: "Weather App",
      description:
        "This is a mini project I made for a Weather App. I React for this project.",
      stack1: "React",
      stack2: "Javascript",
      stack3: "Tailwind",

      gitHubLink: "https://github.com/cuongvongocfe/Weather-app.git",
      liveLink: "https://weather-app-cuongvongocfe.vercel.app/",
    },
    {
      image: p2,
      title: "Dream Car",
      description:
        "This is a website I made for a seller car. I used HTML, SCSS, Javascript, and React for this project.",
      stack1: "React",
      stack2: "Javascript",
      stack3: "SCSS",

      gitHubLink: "https://github.com/cuongvongocfe/DreamCar",
      liveLink: "https://dream-car-eta.vercel.app/",
    },
    {
      image: p3,
      title: "Burger Freak Restaurant",
      description:
        "This is a website I made for a burger joint. I used HTML, CSS, Javascript, and React for this project. In the backend, I used Express and Nodejs",
      stack1: "React",
      stack2: "Javascript",
      stack3: "Tailwind",

      gitHubLink: "https://github.com/cuongvongocfe",
      liveLink: "https://github.com/cuongvongocfe",
    },
    {
      image: p4,
      title: "Burger Freak Restaurant",
      description:
        "This is a website I made for a burger joint. I used HTML, CSS, Javascript, and React for this project. In the backend, I used Express and Nodejs",
      stack1: "React",
      stack2: "Javascript",
      stack3: "Tailwind",

      gitHubLink: "https://github.com/cuongvongocfe ",
      liveLink: "https://github.com/cuongvongocfe",
    },
    {
      image: p5,
      title: "Burger Freak Restaurant",
      description:
        "This is a website I made for a burger joint. I used HTML, CSS, Javascript, and React for this project. In the backend, I used Express and Nodejs",
      stack1: "React",
      stack2: "Javascript",
      stack3: "Tailwind",

      gitHubLink: "https://github.com/cuongvongocfe",
      liveLink: "https://github.com/cuongvongocfe",
    },
    {
      image: p6,
      title: "Burger Freak Restaurant",
      description:
        "This is a website I made for a burger joint. I used HTML, CSS, Javascript, and React for this project. In the backend, I used Express and Nodejs",
      stack1: "React",
      stack2: "Javascript",
      stack3: "Tailwind",

      gitHubLink: "https://github.com/cuongvongocfe",
      liveLink: "https://github.com/cuongvongocfe",
    },
  ];

  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">
        {portfolioList.map((portfolio, i) => (
          <Portfolio key={i} portfolio={portfolio}></Portfolio>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
