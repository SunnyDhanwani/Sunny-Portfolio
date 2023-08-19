import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgFigma } from "react-icons/cg";
import { SiVisualstudiocode, SiPostman, SiAwsamplify } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS Amplify">
        <SiAwsamplify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <CgFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
