import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I am <span className="purple">Sunny Dhanwani. </span>
            <br />
            <ImPointRight /> I am passionate about using technology to solve
            complex problems and always seek new challenges to grow personally
            and professionally. <br />
            <ImPointRight /> In my current role as an early Front-end Engineer
            at a Y-Combinator-backed startup, I contributed to cross-functional
            teams to deliver successful projects, ensuring that deadlines are
            met while maintaining high standards of quality. <br />
            <ImPointRight /> With a strong foundation in modern technologies and
            frameworks, I specialize in developing responsive, mobile-first
            designs that seamlessly adapt to user needs. <br />
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
