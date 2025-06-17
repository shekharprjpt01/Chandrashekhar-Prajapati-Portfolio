import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa"; // optional icons

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath}  alt="card-img" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* GitHub Button */}
        {props.ghLink && (
  <Button variant="primary" href={props.ghLink} target="_blank">
    <BsGithub /> &nbsp;
    {props.isBlog ? "Blog" : "GitHub"}
    </Button>
)}

        {/* Demo Link Button (optional) */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}

        {/* Play Store Button */}
        {props.playStoreLink && (
          <Button
            variant="success"
            href={props.playStoreLink}
            target="_blank"
            style={{ marginTop: "10px", marginRight: "10px" }}
          >
            <FaGooglePlay /> &nbsp; Play Store
          </Button>
        )}

        {/* App Store Button */}
        {props.appStoreLink && (
          <Button
            variant="dark"
            href={props.appStoreLink}
            target="_blank"
            style={{ marginTop: "10px" }}
          >
            <FaAppStoreIos /> &nbsp; App Store
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
