import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
    imgPath="https://play-lh.googleusercontent.com/xcCnuuAFFOVWUM4f1MD8GRO31w5iIjunPnf1bSl8qX-l5XSyUCnaUtTYV_9YeJcwOi4=w5120-h2880-rw"
    isBlog={false}
              title="MAA Health and Care"
              description="An e-commerce medical app built using React Native, Redux, and React Navigation. Customers can browse and order medicines, upload prescriptions for auto-cart fill, and book doctor appointments based on available time slots. Built end-to-end as a solo developer."
              // ghLink=""
              demoLink=""
              playStoreLink="https://play.google.com/store/search?q=maa+health+and+care&c=apps&hl=en"
              appStoreLink="https://apps.apple.com/in/app/maa-health-and-care/id6446773121?platform=iphone"
            
            />
          </Col>

          
<Col md={4} className="project-card">
  <ProjectCard
    // imgPath={"https://play-lh.googleusercontent.com/BdWZG6vy4p5XnHlHJFt1CEtVcE6gnfkzVGtJnm8dCTcnmkP5xAxnRrZauf2RPZKK1nX6=s248-rw"}
    isBlog={false}
    title="Payall Electrics App"
    description="An Android e-commerce app built using Java for selling electrical items like wires and tools. The app includes a token-based reward system where customers earn redeemable tokens on purchases. Features include QR scanner integration, REST API support, and a smooth shopping experience."
    ghLink={""} // Add your GitHub link here, or leave as "" if private
    demoLink={""} // Optional: Add a demo video or Play Store link
    playStoreLink="https://play.google.com/store/apps/details?id=com.payallelectrics.dealer.electrician&hl=en"

  />
</Col>


<Col md={4} className="project-card">
  <ProjectCard
    // imgPath={"https://play-lh.googleusercontent.com/tPp1ZNDeyUh58H_vdGa4aWycmQNaeWzSOI2hymBOgcwjzbsB0V8j3S-yv7ZUJzVGaiNO=w5120-h2880-rw"}
    isBlog={false}
    title="Payall Yodha"
    description="A delivery tracking app built in Java for the Payall Electrics system. It uses WebView to load the web dashboard, with added support for native Android location permissions and real-time GPS display for delivery personnel."
    ghLink="" // or leave blank if private
    demoLink="" // optional if you have a video/demo    
    playStoreLink="https://play.google.com/store/apps/details?id=erpyodha.payallelectrics.com&hl=en"

  />
</Col>


{/* <Col md={4} className="project-card">
  <ProjectCard
    // imgPath={editor}
    isBlog={false}
    title="Vidhik Sahayata"
    description="An Android app that connects customers with lawyers. Includes dual login for lawyers and customers. Customers can view lawyer profiles, book appointments based on available time slots, and communicate via video, voice calls, or chat using Agora SDK."
    ghLink={""} // Add GitHub link if available
    demoLink={""} // Optional: Demo video or Play Store link
  />

  
</Col> */}


{/*           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
