import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Braxton Omondi </span>
            from <span className="purple"> Nairobi , Kenya.</span>
            <br /> I am a student currently pursuing a certificate 
            in software engineering at Moringa School.
            <br />
            Additionally, I am currently  a freelancer and working on building my experience by 
             contributing to open source
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to gym 
            </li>
            <li className="about-activity">
              <ImPointRight /> learning new stuff
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Braxton</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
