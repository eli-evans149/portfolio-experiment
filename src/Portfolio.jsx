import React from "react";
import "./Portfolio.css"; // See the CSS file below

const projects = [
  {
    title: "Demo Project",
    description: "A web application for tracking productivity. Users can log tasks, set goals, and visualize progress.",
    tech: "React, Node.js, MongoDB",
    image: "https://raw.githubusercontent.com/eli-evans149/demo-project/master/preview.png",
    link: "https://github.com/eli-evans149/demo-project",
  },
  {
    title: "Chatbot App",
    description: "An AI-powered chatbot for customer support, featuring real-time communication and sentiment analysis.",
    tech: "Python, Flask, TensorFlow",
    image: "https://raw.githubusercontent.com/eli-evans149/chatbot-app/main/screenshot.png",
    link: "https://github.com/eli-evans149/chatbot-app",
  },
  {
    title: "Weather Mobile",
    description: "Mobile weather app that delivers real-time forecasts and beautiful graphics.",
    tech: "Flutter, Dart, OpenWeather API",
    image: "https://raw.githubusercontent.com/eli-evans149/weather-mobile/main/app-preview.png",
    link: "https://github.com/eli-evans149/weather-mobile",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <header className="hero">
        <img
          src="https://avatars.githubusercontent.com/u/14357612?v=4"
          alt="Eli Evans"
          className="avatar"
        />
        <h1>Eli Evans</h1>
        <p>Software Developer | Web & Mobile Apps | AI Enthusiast</p>
        <div className="hero-links">
          <a href="mailto:eli.evans@example.com">Email</a>
          <a href="https://github.com/eli-evans149">GitHub</a>
          <a href="https://linkedin.com/in/eli-evans149">LinkedIn</a>
        </div>
      </header>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Full Stack: JavaScript, Python, TypeScript, Node.js, React</li>
          <li>Cloud & DevOps: AWS, Docker, CI/CD</li>
          <li>Mobile: Flutter, React Native</li>
          <li>Data: SQL, NoSQL, REST APIs</li>
          <li>UI/UX Design</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((proj) => (
            <div className="project-card" key={proj.title}>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <img src={proj.image} alt={proj.title} />
              </a>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <span className="tech">{proj.tech}</span>
              <div>
                <a className="project-link" href={proj.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Eli Evans</p>
      </footer>
    </div>
  );
}