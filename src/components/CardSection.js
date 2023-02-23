import React from "react";
import PortfolioCard from "./PortfolioCard";
import data from "../components/databases/database.js";
import { Link } from "react-router-dom";

export default function CardSection() {
  const photoData = data.map((data) => {
    function handleOnClickEvent() {
      return console.log(`clicked ID ${data.id}`);
    }
    return (
      <div
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay={data.delay}
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <Link to={`/portfolio/${data.title.toLowerCase()}`}>
          <PortfolioCard key={data.id} {...data} onClick={handleOnClickEvent} />
        </Link>
      </div>
    );
  });
  return (
    <>
      <section className="card-section">{photoData}</section>
    </>
  );
}
