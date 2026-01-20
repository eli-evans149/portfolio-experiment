import React from "react";
import "./Portfolio.css"; // See the CSS file below

const projects = [
  {
    title: "Weather Displayer",
    description: "Search for a location by postcode and view the current weather report.",
    tech: "PHP — Uses the AccuWeather API",
    image: "17partlysunnytshow.webp",
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
          <a href="mailto:eli-martin149@gmail.com">Email</a>
          <a href="https://github.com/eli-evans149">GitHub</a>
          <a href="https://www.linkedin.com/in/eli-martin414/">LinkedIn</a>
        </div>
      </header>

      <section className="skills">
        <h2>Skills & Experience</h2>

        <div className="core-tech">
          <strong>Core technologies:</strong> PHP · HTML · React/TS/JS · MySQL
        </div>

        <h3>Languages</h3>
        <ul>
          <li>PHP</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>MySQL</li>
          <li>Java</li>
          <li>C</li>
          <li>Python</li>
          <li>C++</li>
          <li>R</li>
          <li>Node.js</li>
        </ul>

        <h3>Skills</h3>
        <ul>
          <li>Identifying root causes and resolving customer-reported issues</li>
          <li>Improving performance</li>
          <li>Developing new products from specifications</li>
          <li>Identifying, planning, and completing maintenance tasks</li>
          <li>Documenting product behavior and technical details</li>
        </ul>

        <h3>Tools</h3>
        <ul>
          <li>GitLab, GitHub, git</li>
          <li>Jira, Confluence</li>
          <li>Swagger, Splunk</li>
        </ul>

        <h3>Job Experience</h3>
        <div className="experience">
          <p>Created an automated workflow to reduce decision making of an internal team by approximately 50%. Worked directly with users to understand their manual workflow, then designed, implemented, and tracked the automation.</p>
          <p>Developed new features, maintenance improvements, and bug fixes on pages critical for processing payroll. Collaborated with technical support, design, QA, project management, and leadership to deliver strong end-user experiences.</p>
          <p>Worked on backend pages in PHP/HTML/JavaScript in legacy and MVC architectures connected to MySQL databases, and modernized frontend pages with React/TypeScript and RESTful API endpoints. Integrated with internal and external APIs such as Atlassian’s JIRA API.</p>
          <p>Completed mission-critical new development and mentored interns and new hires. Managed workload independently to maintain team delivery during coverage periods.</p>
        </div>
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