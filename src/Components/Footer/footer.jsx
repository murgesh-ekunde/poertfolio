import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

import React from "react";

export default function footer() {
  return (
    <footer>
      <section>
        <h5>My Socials</h5>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/murgesh-ekunde-525b97100/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </section>
    </footer>
  );
}