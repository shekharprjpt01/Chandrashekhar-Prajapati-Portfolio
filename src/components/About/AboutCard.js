import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
<Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">Chandrashekhar Prajapati </span>
        from <span className="purple">Indore, India.</span>
        <br />
        I’m currently working as an <b>Android and React Native Developer</b> with 3.8+ years of experience.
        <br />
        I hold a Master’s degree in Computer Applications from LNCT Vidhyapeeth University.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Watching tech & cinema videos
        </li>
        <li className="about-activity">
          <ImPointRight /> Exploring UI design trends
        </li>
        <li className="about-activity">
          <ImPointRight /> Gaming & chilling with good music
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Code with purpose, learn every day, and build apps that people love!"{" "}
      </p>
      <footer className="blockquote-footer">Chandrashekhar</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
