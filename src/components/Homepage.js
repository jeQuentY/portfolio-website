import React from "react";
import CardSection from "./CardSection";
import LogoSection from "./LogoSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection.js";
import UI from "./UI";

export default function Homepage() {
  return (
    <>
      <UI />
      <LogoSection />
      <AboutSection />
      <CardSection />
      <ContactSection />
    </>
  );
}
