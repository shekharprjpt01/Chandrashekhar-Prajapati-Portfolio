import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiReact, DiJavascript1, DiGit } from "react-icons/di";
import { SiKotlin, SiRedux, SiFirebase, SiAndroid, SiRealm, SiSqlite, SiJetpackcompose } from "react-icons/si";
import { SiAxios } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  {/* Android & Languages */}
  <Col xs={4} md={2} className="tech-icons">
    <DiJava />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiKotlin />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiJavascript1 />
  </Col>

  {/* Frameworks / Platforms */}
  <Col xs={4} md={2} className="tech-icons">
    <DiReact />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiRedux />
  </Col>

  {/* Android Development Tools */}
  <Col xs={4} md={2} className="tech-icons">
    <SiAndroid />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiFirebase />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiJetpackcompose />
  </Col>

  {/* Backend / APIs / Database */}
  <Col xs={4} md={2} className="tech-icons">
    <SiAxios />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiSqlite />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiRealm />
  </Col>

  {/* Tools */}
  <Col xs={4} md={2} className="tech-icons">
    <DiGit />
  </Col>
</Row>

  );
}

export default Techstack;
