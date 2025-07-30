import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import "../styles/Projects.css"; // Importing the Home.css styles
import {
  FaCode,
  FaGamepad,
  FaPython,
  FaServer,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card,
  OverlayTrigger,
  Tooltip,
  Button,
  Badge,
  Image,
} from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "MERN Stack Ecommerce Frontend",
      description:
        "A full-stack e-commerce web application built using the MERN stack, featuring user authentication, product management, admin panel, and a shopping cart.",
      img: "/mernapp.png",
      liveURL: "https://mern-ecommerce-front-end.onrender.com/",
      githubURL: "https://github.com/PratyushJha19/MERN-Ecommerce-Front-End",
      techStack: [
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Git",
        "REST API",
      ],
      category: "Full Stack Web Development",
    },
    {
      title: "MERN Stack Ecommerce Backend",
      description:
        "A full-stack e-commerce web application built using the MERN stack, featuring user authentication, product management, and a shopping cart.",
      img: "/backendmern.png",
      liveURL: "https://mern-ecommerce-front-end.onrender.com/",
      githubURL: "https://github.com/PratyushJha19/MERN-Ecommerce-App",
      techStack: [
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
        "Git",
        "REST API",
      ],
      category: "Full Stack Web Development",
    },
    {
      title: "Maha-Nanda Healthcare Website",
      description:
        "A static responsive healthcare website built with ReactJS for my client Maha-Nanda Healthcare, featuring a modern design and user-friendly interface.",
      img: "/mahananda.png",
      liveURL: "https://mahaananda-healthcare.netlify.app/",
      githubURL: "https://github.com/PratyushJha19/Mahaananda-HealthCare",
      techStack: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Front-end Web Development",
    },
    {
      title: "2D Shooter Platformer Game",
      description:
        "A 2D shooter platformer game developed using Unity Engine, featuring engaging gameplay mechanics, enemy AI, player power ups and level design.",
      img: "/icons/mern-ecommerce.png",
      liveURL: "",
      githubURL: "https://github.com/PratyushJha19/2D-Shooting-PLatformer",
      techStack: [
        "Unity",
        "C#",
        "Game Development",
        "2D Graphics",
        "2D Physics",
        "Animation",
      ],
      category: "Unity 2D Game Development",
    },
    {
      title: "FPS Zombie Shooter Game",
      description:
        "A first-person zombie shooter game developed using Unity Engine & C#, featuring immersive gameplay, enemy AI, and realistic graphics & mechanics.",
      img: "/icons/mern-ecommerce.png",
      liveURL: "",
      githubURL: "https://github.com/PratyushJha19/Zombie-Runner",
      techStack: [
        "Unity",
        "C#",
        "Game Development",
        "3D Graphics",
        "3D Physics",
        "Animation",
      ],
      category: "Unity 3D Game Development",
    },
    {
      title: "Python Django Ecommerce Application",
      description:
        "A full-stack e-commerce web application built using Python Django, featuring user authentication, product management, and a shopping cart.",
      img: "/djangoapp.png",
      liveURL: "",
      githubURL: "https://github.com/PratyushJha19/E-Com-Project",
      techStack: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "SQLite",
        "REST API",
        "Git",
      ],
      category: "Python Web Development",
    },
    {
      title: "Simple Driving Simulator",
      description:
        "A simple driving simulator game developed using Unity Engine & C#, featuring highscore system, player energy & recharge, car physics, driving controls, and a basic environment.",
      img: "/icons/mern-ecommerce.png",
      liveURL: "",
      githubURL: "https://github.com/PratyushJha19/Simple-Driving",
      techStack: ["Unity", "C#", "Game Development"],
      category: "Unity 3D Game Development",
    },
    {
      title: "Asteroid Avoider Game",
      description:
        "A simple 2.5D game developed using Unity Engine & C#, where the player controls a spaceship and must avoid asteroids with Unity ads integration for extra lives for the player and developer's monetisation.",
      img: "/icons/mern-ecommerce.png",
      liveURL: "",
      githubURL: "https://github.com/PratyushJha19/Asteroid-Avoider",
      techStack: [
        "Unity",
        "C#",
        "Game Development",
        "2.5D Graphics",
        "Unity Ads",
      ],
      category: "Unity 2.5D Game Development",
    },
    {
      title: "Static Demo Website",
      description:
        "A static demo website built with HTML CSS & JS, showcasing a modern design and responsive layout, ideal for demonstrating web development skills.",
      img: "/loso.png",
      liveURL: "https://pratyushjha19.github.io/LOSO-Static-Site-Demo/",
      githubURL: "https://github.com/PratyushJha19/LOSO-Static-Site-Demo",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Front-end Web Development",
    },
    // {
    //   title: "Dice Game Website",
    //   description:
    //     "A static demo website built with HTML CSS & JS, in which there are 2 die which will give out random number from 1 to 6 whichever gives the greater number that dice wins and it can be done by refreshing the page",
    //   img: "/icons/mern-ecommerce.png",
    //   liveURL: "https://pratyushjha19.github.io/Dice-Challenge-Website/",
    //   githubURL: "https://github.com/PratyushJha19/Dice-Challenge-Website",
    //   techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    //   category: "Front-end Web Development",
    // },
    {
      title: "Simon Game Website",
      description:
        "A static demo website built with HTML CSS & JS, in which there are 4 buttons which will light up in a random order and the player has to repeat the same order by clicking on the buttons",
      img: "/simon.png",
      liveURL: "https://pratyushjha19.github.io/Simon-Game-Website",
      githubURL: "https://github.com/PratyushJha19/Simon-Game-Website",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Front-end Web Development",
    },
    {
      title: "Drum Kit Website",
      description:
        "A static demo website built with HTML CSS & JS, in which there are 7 buttons which will play different sounds when clicked and also can be played using keyboard keys",
      img: "/drum.png",
      liveURL: "https://pratyushjha19.github.io/Drum-Kit-Website",
      githubURL: "https://github.com/PratyushJha19/Drum-Kit-Website",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Front-end Web Development",
    },
    {
      title: "Tin Dog Website",
      description:
        "A static demo website built with HTML CSS & JS, showcasing a modern design and responsive layout, ideal for demonstrating web development skills.",
      img: "/tindog.png",
      liveURL: "https://pratyushjha19.github.io/Tin-Dog-Website",
      githubURL: "https://github.com/PratyushJha19/Tin-Dog-Website",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Front-end Web Development",
    },
  ];
  return (
    <Layout>
      <section className="projects-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">
              <span className="highlight">My Projects</span>
            </h2>
            <p className="section-subtitle">
              Explore my portfolio of hosted projects with source code
            </p>
          </div>
          <Row>
            {projects.map((project, idx) => (
              <Col key={idx} xs={10} sm={4} md={6} className="mb-4">
                <Card className="project-card h-100">
                  <Card.Img
                    variant="top"
                    src={project.img}
                    className="project-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>
                    <Card.Text className="project-text mb-2">
                      {project.description}
                    </Card.Text>
                    <div className="mb-3">
                      {project.techStack.map((tech, i) => (
                        <Badge
                          key={i}
                          pill
                          bg="secondary"
                          className="me-1 mb-1 stack-badge"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto d-flex gap-2">
                      {project.liveURL && (
                        <Button
                          variant="warning"
                          size="sm"
                          href={project.liveURL}
                          target="_blank"
                          className="demo-btn"
                        >
                          <FaExternalLinkAlt className="me-1" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubURL && (
                        <Button
                          variant="dark"
                          size="sm"
                          href={project.githubURL}
                          target="_blank"
                          className="source-code-btn"
                        >
                          <FaCode className="me-1" />
                          Source Code
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Projects;
