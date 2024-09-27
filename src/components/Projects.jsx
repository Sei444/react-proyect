import "../styles/Projects.css";

import proyect1 from "../assets/proyect1.png";
import proyect2 from "../assets/proyect2.png";

const projects = [
  {
    title: "Project 1",
    description:
      "Desarrollo de un Template reutilizable y optimizado para la personalización de Keycloack con Vue.js, mejorando la usabilidad y el desarrollo de aplicaciones empresariales.",
    image: proyect1,
    link: "https://www.keycloak.org",
  },
  {
    title: "Project 2",
    description:
      "Apoyo de creacion de componentes para proyecto combinado de Gestion Academica, usando React y VUE",
    image: proyect2,
    link: "https://es.react.dev",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.name} image`}
              className="project-image"
            />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Documentacion
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
