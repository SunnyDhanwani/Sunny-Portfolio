import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ReactGA from "react-ga4";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sunny Dhanwani</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SunnyDhanwani"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "FOOTER_LINK",
                    action: "CLICKED",
                    label: "Github",
                  });
                }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:dhanwanisunny678@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "FOOTER_LINK",
                    action: "CLICKED",
                    label: "Mail",
                  });
                }}
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sunny-dhanwani/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "FOOTER_LINK",
                    action: "CLICKED",
                    label: "Resume",
                  });
                }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
