import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bluemercury from "../../Assets/Projects/bluemercury.png";
import yatra from "../../Assets/Projects/yatra.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bluemercury}
              isBlog={false}
              title="Bluemercury"
              description="This is a clone of a US based e-commerce website build with HTML, CSS, JS, Express.js, Node.js, and MongoDB. Have features which allows user live search, voice serach."
              gitLink="https://github.com/kkm980/bluemercury"
              liveLink="https://bluemercuryclone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yatra}
              isBlog={false}
              title="Yatra"
              description="A clone of an India based online travel agency. Built using MERN stack and Meterial UI. User can search flight details and book tickets. The Flight data is fetched from APIs."
              gitLink="https://github.com/neerajmasai/yatra-clone"
              liveLink="https://bluemercuryclone.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
