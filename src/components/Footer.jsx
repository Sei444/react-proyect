import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 Sergio Claros</p>
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
    </footer>
  );
};

export default Footer;
