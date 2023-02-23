import React from "react";
import { motion } from "framer-motion"
import PortfolioCard from "./PortfolioCard";
import data from '../database.js'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


AOS.init({disable: 'mobile'});;

export default function MainPage() {

    
    const photoData = data.map(data => {

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
                <PortfolioCard
                key={data.id}
                {...data}
                />
            </div>
            
        )
    })
  


    return (
        <div>
            <motion.div className="main-container"
            animate={{ y: 150 }}
            transition={{ type: "spring", stiffness: 100 }}>
                <motion.img 
                className="main-logo" 
                src="../images/ca_photography.png" 
                alt="logo-icon"
                animate={{opacity: 1}}/>
            </motion.div>
            <div className="mortii">
            </div>
                <section className="card-section">
                    {photoData}
                </section>
                
        </div>
    )
}
