import React from "react";
import "./Portfolio.css";
const Portfolio = ({ portfolio }) => {
  const {
    image,
    title,
    description,
    gitHubLink,
    liveLink,
    stack1,
    stack2,
    stack3,
  } = portfolio;
  return (
    <div className="w-[300px] mx-10 lg:w-full portfolio-card">
      <div className="card w-[300px] lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="portfolio" />
        </figure>
        <div className="card-body">
          <h2 className="card-title block">
            {title}<br/>
            <div className="badge badge-secondary">{stack1}</div>
            <div className="badge badge-secondary">{stack2}</div>
            <div className="badge badge-secondary">{stack3}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={gitHubLink} className="portfolio-button-github">Github</a>
            <a href={liveLink} className="portfolio-button-site">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
