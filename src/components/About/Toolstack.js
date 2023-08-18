import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgFigma } from "react-icons/cg";
import { SiVisualstudiocode, SiPostman, SiAwsamplify } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwsamplify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
