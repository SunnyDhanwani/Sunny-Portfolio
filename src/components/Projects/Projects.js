import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import precize from "../../Assets/Projects/precizePreview.jpeg";
import pazago from "../../Assets/Projects/pazagoPreview.png";
import propaze from "../../Assets/Projects/propazePreview.png";
import precizeWebapp from "../../Assets/Projects/precizeWebappPreview.png";
import pazagoWebapp from "../../Assets/Projects/pazagoWebappPreview.png";

function Projects() {
  useEffect(() => {
    document.title = "Sunny Dhanwani | Work";
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My contribution at <strong className="purple">Work </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={precize}
              isBlog={false}
              title="Precize (formerly Leadoff)"
              description="Precize is a world-class unlisted share market gateway where investors of all levels can buy and sell unlisted shares online securely."
              gitLink="https://github.com/kkm980/bluemercury"
              liveLink="https://www.precize.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pazago}
              isBlog={false}
              title="Pazago"
              description="Pazago makes trade between 90 different countries painless, ensuring effortless international payments, streamlined compliance, efficient financing, and an optimized supply chain"
              gitLink="https://github.com/neerajmasai/yatra-clone"
              liveLink="https://www.pazago.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={propaze}
              isBlog={false}
              title="Propaze"
              description="Reliable cross-border logistics with end-to-end solutions for exporters and importers"
              gitLink="https://github.com/neerajmasai/yatra-clone"
              liveLink="https://www.propaze.com/"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={precizeWebapp}
              isBlog={false}
              title="Precize Portal"
              description="Precize portal is a world-class unlisted share market gateway where investors of all levels can buy and sell unlisted shares online securely."
              gitLink=""
              liveLink="https://portal.precize.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pazagoWebapp}
              isBlog={false}
              title="Pazago Webapp"
              description="Pazago webapp makes trade between 90 different countries painless, ensuring effortless international payments, streamlined compliance, efficient financing, and an optimized supply chain"
              gitLink="https://github.com/neerajmasai/yatra-clone"
              liveLink="https://app.pazago.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
