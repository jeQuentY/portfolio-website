import React from "react";
import data from "../databases/grid_database";
import GridCard from "../GridCard";
import useTop from "../useTop";
import { Link } from "react-router-dom";

export default function Portraits() {
  useTop();
  const gridData = data.map((data) => {
    if (data.type === "portrait")
      return <GridCard key={data.id} path={data.path} />;
    return "";
  });
  console.log(gridData.toString());
  return (
    <div>
      <div className="custom-header">
        <Link to="/">
          <img
            className="custom-header-logo"
            src="../images/ca_photography.png"
            alt="logo-icon"
          />
        </Link>
        <p>PORTRAITS</p>
      </div>
      <section
        className="grid-section"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        {gridData}
      </section>
      <footer className="footer">@ 2023 QuentY - All rights reserved</footer>
    </div>
  );
}
