import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.title + "Preview image"}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title style={{ fontWeight: "600" }}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", color: "#C4C6CD" }}>
            {props.description}
          </Card.Text>
        </div>
        <Button
          style={{ marginTop: "20px" }}
          variant="primary"
          href={props.liveLink}
          target="_blank"
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Live"}
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
