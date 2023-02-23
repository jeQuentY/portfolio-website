import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({ disable: "mobile" });

export default function LogoSection() {
  return (
    <>
      <motion.div
        className="main-container"
        animate={{ y: 150 }}
        transition={{ type: "spring", stiffness: 100 }}
        id="homepage"
      >
        <motion.img
          className="main-logo"
          src="../images/ca_photography.png"
          alt="logo-icon"
          animate={{ opacity: 1 }}
        />
      </motion.div>
    </>
  );
}
