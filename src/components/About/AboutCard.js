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
            <br />A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing Graphics
            </li>
            <li className="about-activity">
              <ImPointRight /> Baking Cookies and Cakes
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
