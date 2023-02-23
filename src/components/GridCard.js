import React from "react";

export default function GridCard(props) {
  return (
    <div className="grid-container">
      <img
        className="grid-image"
        src={props.path}
        alt={`grid-card ${props.id}`}
      />
    </div>
  );
}
