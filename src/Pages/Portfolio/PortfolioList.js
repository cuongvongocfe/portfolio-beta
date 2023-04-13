import React from "react";
import p1 from "../../assets/Portfolio/Arts.jpg";
import p2 from "../../assets/Portfolio/Arts.jpg";
import p3 from "../../assets/Portfolio/Arts.jpg";
import p4 from "../../assets/Portfolio/Arts.jpg";
import p5 from "../../assets/Portfolio/Arts.jpg";
import p6 from "../../assets/Portfolio/Arts.jpg";
import Portfolio from "./Portfolio";
const PortfolioList = () => {
  const portfolioList = [
    {
      image: p1,
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
      image: p2,
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
