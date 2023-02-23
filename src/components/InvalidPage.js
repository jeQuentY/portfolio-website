import React from "react";
import { Link } from "react-router-dom";

export default function InvalidPage() {
  return (
    <div className="invalid-page-container">
      <p>ERROR 404</p>
      <p>PAGE NOT FOUND</p>
      <Link to="/">
        <p className="gohome">GO HOME</p>
      </Link>
    </div>
  );
}
