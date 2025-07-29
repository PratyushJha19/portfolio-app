import React from "react";
import Layout from "../components/layout/Layout";
import "../styles/Home.css"; // Importing the Home.css styles
import { FaCode, FaGamepad, FaPython, FaServer } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const Home = () => {
  const skills = [
    { name: "Unity Enigine", icon: "/icons/unity.svg", level: "Intermediate" },
    { name: "NodeJS", icon: "/icons/nodejs.svg", level: "Intermediate" },
    { name: "C#", icon: "/icons/csharp.svg", level: "Intermediate" },
    { name: "Python", icon: "/icons/python.svg", level: "Intermediate" },
    { name: "Express JS", icon: "/icons/express.svg", level: "Intermediate" },
    { name: "ReactJS", icon: "/icons/react.svg", level: "Intermediate" },
    { name: "Django", icon: "/icons/django.svg", level: "Intermediate" },
    { name: "MongoDB", icon: "/icons/mongodb.svg", level: "Intermediate" },
    {
      name: "PostgreSQL",
      icon: "/icons/postgresql.svg",
      level: "Intermediate",
    },
    { name: "HTML", icon: "/icons/html.svg", level: "Advanced" },
    { name: "CSS", icon: "/icons/css.svg", level: "Advanced" },
    {
      name: "JavaScript",
      icon: "/icons/javascript.svg",
      level: "Intermediate",
    },
    { name: "Git", icon: "/icons/git.svg", level: "Intermediate" },
    { name: "Github", icon: "/icons/github.svg", level: "Intermediate" },
    { name: "Postman", icon: "/icons/postman.svg", level: "Intermediate" },
    { name: "SQL", icon: "/icons/sql.svg", level: "Intermediate" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg", level: "Intermediate" },
    {
      name: "Tailwind CSS",
      icon: "/icons/tailwindcss.svg",
      level: "Intermediate",
    },
    { name: "C++", icon: "/icons/cpp.svg", level: "Intermediate" },
    {
      name: "Unreal Engine",
      icon: "/icons/unrealengine.svg",
      level: "Beginner",
    },
    { name: "MySQL", icon: "/icons/mysql.svg", level: "Intermediate" },
    { name: "NumPy", icon: "/icons/numpy.svg", level: "Beginner" },
    { name: "Pandas", icon: "/icons/pandas.svg", level: "Beginner" },
    { name: "Matplotlib", icon: "/icons/matplotlib.svg", level: "Beginner" },
    { name: "Canva", icon: "/icons/canva.svg", level: "Intermediate" },
    { name: "Premiere Pro", icon: "/icons/premierepro.svg", level: "Beginner" },
    { name: "Photoshop", icon: "/icons/photoshop.svg", level: "Beginner" },
    { name: "Blender", icon: "/icons/blender.svg", level: "Beginner" },
    { name: "C", icon: "/icons/c.svg", level: "Intermediate" },
    { name: "Java", icon: "/icons/java.svg", level: "Beginner" },
    { name: ".NET Core", icon: "/icons/dotnetcore.svg", level: "Beginner" },
    { name: "Linux", icon: "/icons/linux.svg", level: "Beginner" },
    { name: "AWS", icon: "/icons/amazonwebservices.svg", level: "Beginner" },
    { name: "Docker", icon: "/icons/docker.svg", level: "Beginner" },
    { name: "Kubernetes", icon: "/icons/kubernetes.svg", level: "Beginner" },
    { name: "Jira", icon: "/icons/jira.svg", level: "Beginner" },
  ];
  // You can add more skills here as needed
  // Example: { name: "Python", icon: "/icons/python.svg", level: "Intermediate" },

  return (
    <Layout>
      {/* Intro Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="hero-content container">
          <span className="badge-text mb-3">Software Developer</span>

          <h5 className="intro-text mb-2">
            Hey! I'm <span className="highlight">Pratyush Jha</span>
          </h5>

          <h1 className="main-heading mb-3">
            I'm a <strong>Software Developer.</strong>
          </h1>

          <p className="sub-text mb-3">
            I can build user-friendly{" "}
            <span className="highlight">Full Stack</span> applications and
            <span className="highlight"> 2D & 3D games</span> for you.
          </p>

          <p className="tech-stack mb-4">
            <strong>ReactJS</strong>, <strong>NodeJS</strong>,{" "}
            <strong>ExpressJS</strong>, <strong>MongoDB</strong>, and{" "}
            <strong>Unity Engine</strong>.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn hire-btn">Hire Me →</button>
            <button className="btn view-btn">View Projects</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section text-center">
        <div className="container">
          <h2 className="section-title">
            What <span className="highlight">I Do</span>
          </h2>
          <p className="section-subtitle">
            These are the services I can provide to help bring your ideas to
            life
          </p>

          <div className="row justify-content-center mt-5">
            {/* Frontend Card */}
            <div className="col-md-5 mb-4">
              <div className="service-card">
                <div className="icon-wrapper">
                  <FaCode />
                </div>
                <h5 className="service-title">Front-End Development</h5>
                <p className="service-text">
                  Crafting smooth, responsive and interactive user interfaces
                  with ReactJS, Tailwind, Bootstrap, HTML, CSS, JavaScript and
                  clean component architecture.
                </p>
              </div>
            </div>

            {/* Backend Card */}
            <div className="col-md-5 mb-4">
              <div className="service-card">
                <div className="icon-wrapper">
                  <FaServer />
                </div>
                <h5 className="service-title">Back-End Development</h5>
                <p className="service-text">
                  Building robust server-side applications with Node & Express
                  JS, MongoDB, Django, MySQL, EJS.
                </p>
              </div>
            </div>

            {/* Game Development Card */}
            <div className="col-md-5 mb-4">
              <div className="service-card">
                <div className="icon-wrapper">
                  <FaGamepad />
                </div>
                <h5 className="service-title">Unity Game Development</h5>
                <p className="service-text">
                  Designing and developing cross-platform 2D & 3D games using
                  Unity Engine and C#, touch/swipe mechanics, real-time physics,
                  and polished visuals with animations, particles, and prefabs —
                  optimized for both mobile and desktop.
                </p>
              </div>
            </div>

            {/* Python Developer Card */}
            <div className="col-md-5 mb-4">
              <div className="service-card">
                <div className="icon-wrapper">
                  <FaPython />
                </div>
                <h5 className="service-title">Python Development</h5>
                <p className="service-text">
                  Developing dynamic desktop applications and data tools using
                  Python, Tkinter, MySQL integration, NumPy, Pandas, Matplotlib
                  and Django.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="tech-skills-section">
        <Container>
          <div className="text-center mb-4">
            <h2>
              Technical <span className="highlight">Skills</span>
            </h2>
            <p className="subtitle">
              Technologies and tools I'm proficient with
            </p>
          </div>
          <Row>
            {skills.map((skill, idx) => (
              <Col key={idx} xs={6} sm={4} md={3} className="mb-4">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${idx}`}>{skill.level}</Tooltip>
                  }
                >
                  <Card className="skill-card text-center">
                    <Card.Body>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon mb-2"
                      />
                      <div className="skill-name">{skill.name}</div>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
