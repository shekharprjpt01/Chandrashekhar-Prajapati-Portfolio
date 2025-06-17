import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    I'm a passionate mobile app developer with <b className="purple">3.8+ years</b> of experience building efficient, scalable, and user-centric applications.
    <br />
    <br />I specialize in 
    <i>
      <b className="purple"> Android (Java/Kotlin) and React Native</b>
    </i>{" "}
    with strong hands-on knowledge of 
    <i>
      <b className="purple"> MVVM, Retrofit, Room, Redux, and Firebase</b>
    </i>.
    <br />
    <br />
    My areas of interest include building smart and performance-focused mobile apps, and integrating advanced tools like{" "}
    <b className="purple">ML Kit, TensorFlow Lite, and real-time features</b>.
    <br />
    <br />
    I love crafting clean UI/UX and bringing ideas to life using{" "}
    <i>
      <b className="purple">Jetpack Compose, React Native, and JavaScript</b>
    </i>. I also have experience with{" "}
    <b className="purple">payment gateways, API integration, and cross-platform development</b>.
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chandrashekhar-prajapati-307863194/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
