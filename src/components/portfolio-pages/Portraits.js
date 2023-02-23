import React from "react";
import data from "../databases/grid_database";
import GridCard from "../GridCard";

export default function Portraits() {
  const gridData = data.map((data) => {
    if (data.type === "portrait")
      return <GridCard key={data.id} path={data.path} />;
    return "";
  });
  console.log(gridData.toString());
  return (
    <div>
      <div className="custom-header">
        <img
          className="custom-header-logo"
          src="../images/ca_photography.png"
          alt="logo-icon"
        />
        <p>PORTRAITS</p>
      </div>
      <section className="grid-section">{gridData}</section>
      <footer className="footer">@ 2023 QuentY - All rights reserved</footer>
    </div>
  );
}
