import React from 'react'
import './project.css'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'


const projects = [
  {
    id: 1,
    image: IMG2,
    title: "",
    description:
      "",
    github: "https://github.com",
    demo: "",
    techstack: ["React", "Node.js", "MongoDb", "CSS", "Bootstrap"],
  },
  {
    id: 2,
    image: IMG2,
    title: "",
    description:
      "",
    github: "https://github.com",
    demo: "",
    techstack: ["React", "Node.js", "MongoDb", "CSS", "Bootstrap"],
  },
  {
    id: 3,
    image: IMG3,
    title: "",
    description:
      "",
    github: "https://github.com",
    demo: "",
    techstack: ["React", "Node.js", "MongoDb", "CSS", "Bootstrap"],
  },
]
const project = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((e) => (
          <div className="portfolio__item" key={e.id}>
            <div className="card">
              <div className="portfolio__item-top">
                <img src={e.image} alt="img" />
                <h3 className="card-title">{e.title}</h3>
                <small>{e.description}</small>
              </div>
              <div className="portfolio__item-back">
                <h5>Tech Stack Used</h5>
                <div className="tech-stack">
                  {e.techstack.map((e) => (
                    <span>{e}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={e.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={e.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default project