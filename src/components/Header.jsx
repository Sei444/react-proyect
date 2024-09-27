import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="header-trigger">
        <h3>
          ---------------- Aqui hay un Nav Bar ;P --------------
          &gt;&gt;&gt;&gt;
        </h3>
      </div>

      <header className="header">
        <nav className="header-content">
          <ul>
            <li>
              <a href="#personal">/ Sobre mi /</a>
            </li>
            <li>
              <a href="#skills">/ Mis Habilidades /</a>
            </li>
            <li>
              <a href="#projects">/ Mis Proyectos /</a>
            </li>
            <li>
              <a href="#contact">/ Contactame /</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
