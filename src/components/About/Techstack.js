import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiGit,
  DiMysql,
} from "react-icons/di";
import {
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiChakraui,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <SiNextdotjs />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tailwind CSS">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Chakra UI">
        <SiChakraui />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML 5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS 3">
        <DiCss3 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
