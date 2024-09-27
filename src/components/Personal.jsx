import "../styles/Personal.css";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import portafoliopic from "../assets/portafolio-fotor.png";
import clouds from "../assets/Clouds.png";

const Personal = () => {
  return (
    <section className="personal">
      <div className="personal-content">
        <h1>
          {" "}
          Bienvenido, un gusto que estes aqui! <br />
          <br /> Soy Sergio Claros.{" "}
        </h1>
        <p>
          Resido en Bolivia, soy un Front-end Developer, apasionado por crear
          paginas web accesibles y con gran diseño. <br /> Si bajas podras
          encontrar un poco de mis habilidades y mis proyectos.
        </p>
        <div className="footer-icons">
          <a
            href="https://x.com/Sei_x4?t=5jIsYWT224TXfWhS5YsZUg&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-a-claros-o/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/Sei444"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.instagram.com/sei_444/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
        <a href="#contact" className="btn-secondary">
          {" "}
          Dejame un mensaje...
        </a>
      </div>
      <div className="personal-image">
        <img src={portafoliopic} alt="Sergio" />
      </div>

      <img src={clouds} alt="nubes" className="decorative-cloud" />
    </section>
  );
};

export default Personal;
