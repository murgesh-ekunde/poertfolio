import "./experience.css";
import html from "../../Assets/icons/html-5.svg"
import css from "../../Assets/icons/css3.svg";
import react from "../../Assets/icons/reactjs.svg";
import javascript from "../../Assets/icons/javascript.svg";
import aws from "../../Assets/icons/amazon-web-services.svg";
import figma from "../../Assets/icons/figma-icon.svg";
import git from "../../Assets/icons/git.svg";
import materialui from "../../Assets/icons/material-ui.svg";
import mongodb from "../../Assets/icons/mongodb.svg";
import nodejs from "../../Assets/icons/nodejs.svg";
import redux from "../../Assets/icons/redux.svg";
import wordpress from "../../Assets/icons/wordpress-icon.svg";
import canva from "../../Assets/icons/canva-icon.svg";
import getbootstrap from "../../Assets/icons/getbootstrap-icon.svg";
import tailwindcss from "../../Assets/icons/tailwindcss-icon.svg";

function experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__content">
          <article className="experience__details">
            <img src={html} alt="html" />
            <h4>HTML</h4>
          </article>
          <article className="experience__details">
            <img src={css} alt="css" />
            <h4>CSS</h4>
          </article>
          <article className="experience__details">
            <img src={javascript} alt="javascript" />
            <h4>JavaScript</h4>
          </article>
          <article className="experience__details">
            <img src={react} alt="react" />
            <h4>React</h4>
          </article>
          <article className="experience__details">
            <img src={redux} alt="redux" />
            <h4>Redux</h4>
          </article>
          <article className="experience__details">
            <img src={mongodb} alt="mongodb" />
            <h4>MongoDB</h4>
          </article>
          <article className="experience__details">
            <img src={getbootstrap} alt="getbootstrap" />
            <h4>Bootstrap</h4>
          </article>
          <article className="experience__details">
            <img src={tailwindcss} alt="tailwindcss" />
            <h4>Tailwind CSS</h4>
          </article>
          <article className="experience__details">
            <img src={materialui} alt="materialui" />
            <h4>Material UI</h4>
          </article>
          <article className="experience__details">
            <img src={git} alt="git" />
            <h4>GitHub</h4>
          </article>
          <article className="experience__details">
            <img src={nodejs} alt="node.js" />
            <h4>Node.js</h4>
          </article>
          <article className="experience__details">
            <img src={figma} alt="figma" />
            <h4>Figma</h4>
          </article>
          <article className="experience__details">
            <img src={aws} alt="aws" />
            <h4>AWS</h4>
          </article>
          <article className="experience__details">
            <img src={wordpress} alt="wordpress" />
            <h4>Wordpress</h4>
          </article>
          <article className="experience__details">
            <img src={canva} alt="canva" />
            <h4>Canva</h4>
          </article>
        </div>
      </div>
    </section>
  );
}


export default experience