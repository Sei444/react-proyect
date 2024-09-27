import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/Skills.css";

import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css.png";
import git from "../assets/github.png";
import reactLogo from "../assets/react.svg";
import phpLogo from "../assets/php.png";
import javascriptLogo from "../assets/js.png";
import postreLogo from "../assets/postgre.png";
import nodeLogo from "../assets/Nodelogo.svg";
import dockerLogo from "../assets/docker.svg";
import mongoLogo from "../assets/MongoDB.svg";
import vueLogo from "../assets/Vue.svg";
import bootstrapLogo from "../assets/Bootstrap.svg";
import csharpLogo from "../assets/csharp.png";
import springLogo from "../assets/Spring_Boot.svg";

import vector from '../assets/vector.png'

const skills = [
  {
    name: "HTML",
    experience: "2 Años de Experiencia",
    level: 3,
    logo: htmlLogo,
  },
  { name: "CSS", experience: "2 Años de Experiencia", level: 3, logo: cssLogo },
  {
    name: "JavaScript",
    experience: "1 Años de Experiencia",
    level: 1,
    logo: javascriptLogo,
  },
  {
    name: "React",
    experience: "2 Años de Experiencia",
    level: 2,
    logo: reactLogo,
  },
  { name: "PHP", experience: "1 Años de Experiencia", level: 1, logo: phpLogo },
  {
    name: "Node.js",
    experience: "2 Años de Experiencia",
    level: 2,
    logo: nodeLogo,
  },
  { name: "Git", experience: "2 Años de Experiencia", level: 3, logo: git },
  {
    name: "Dockerhub",
    experience: "1 Años de Experiencia",
    level: 1,
    logo: dockerLogo,
  },
  {
    name: "Postgresql",
    experience: "2 Años de Experiencia",
    level: 2,
    logo: postreLogo,
  },
  {
    name: "MongoDB",
    experience: "1 Años de Experiencia",
    level: 1,
    logo: mongoLogo,
  },
  {
    name: "VUE.js",
    experience: "2 Años de Experiencia",
    level: 2,
    logo: vueLogo,
  },
  {
    name: "Bootstrap",
    experience: "2 Años de Experiencia",
    level: 2,
    logo: bootstrapLogo,
  },
  {
    name: "C#",
    experience: "1 Años de Experiencia",
    level: 1,
    logo: csharpLogo,
  },
  {
    name: "Springboot",
    experience: "1 Años de Experiencia",
    level: 2,
    logo: springLogo,
  },
];

const Skills = () => {
  const groupedSkills = [];
  for (let i = 0; i < skills.length; i += 2) {
    groupedSkills.push(skills.slice(i, i + 2));
  }
  return (
    <section className="skills">
      <h2>Mis Habilidades</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1500}
        pagination={{ clickable: true }}
      >
        {groupedSkills.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="skills-row">
              {group.map((skill, skillIndex) => (
                <div className="skill-card" key={skillIndex}>
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="skill-logo"
                  />
                  <h3>{skill.name}</h3>
                  <p>Nivel de experiencia</p>
                  <div className="experience-bars">
                    {Array(skill.level)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="bar filled"></span>
                      ))}
                    {Array(4 - skill.level)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="bar"></span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <img src={vector} alt="fondo" className="fondo-skills"/>

    </section>
  );
};

export default Skills;
