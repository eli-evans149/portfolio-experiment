import React from "react";
import "./Portfolio.css"; // See the CSS file below

const projects = [
  {
    title: "Weather Displayer",
    description: "Search for a location by postcode and view the current weather report.",
    tech: "PHP — Uses the AccuWeather API",
    image: "",
    link: "https://github.com/eli-evans149/weather-displayer",
  },
  {
    title: "Quote Displayer",
    description: "Generates a random quote and displays it to the user (MVC pattern).",
    tech: "PHP (MVC)",
    image: "",
    link: "https://github.com/eli-evans149/quote-displayer",
  },
  {
    title: "Random Idea Generator",
    description: "Generates programming project ideas for inspiration.",
    tech: "Java",
    image: "",
    link: "https://github.com/eli-evans149/random-idea-generator",
  },
  {
    title: "Portfolio Website",
    description: "Alternate portfolio site — catalogs projects and documents progress over time.",
    tech: "HTML, CSS, TypeScript",
    image: "",
    link: "https://github.com/eli-evans149/portfolio-experiment",
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
        <p>Software Developer | Fullstack Experience</p>
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