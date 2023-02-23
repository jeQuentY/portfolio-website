import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function ContactSection() {
  return (
    <>
      <div className="c0ntact-container" id="contactz">
        <div className="c0ntact-items-container">
          <p>GET IN TOUCH</p>
          <div className="icons-container">
            <a className="mail-icon" href="mailto:office@caphotography.ro">
              <HiOutlineMail />
            </a>
            <a
              className="insta-icon"
              href="https://www.instagram.com/alexfacepoze/"
            >
              <AiOutlineInstagram />
            </a>
            <a className="git-icon" href="https://github.com/jeQuentY">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer-container">
        <div className="footer-copy">
          @2023 CA PHOTOGRAPHY - ALL RIGHTS RESERVED
          <hr className="hr-footer" />
        </div>
      </footer>
    </>
  );
}
