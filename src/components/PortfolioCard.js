//import { motion } from "framer-motion"

export default function PortfolioCard(props) {
  return (
    <div className="card-container" onClick={props.click} id="portfolio">
      <div className="title-box">
        <p>{props.title}</p>
      </div>
      <img
        className="card-image"
        src={props.imagePath}
        alt={`portfolio-card ${props.id}`}
      />
    </div>
  );
}
