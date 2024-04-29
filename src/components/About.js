import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpeg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
            I am a web developer with a vast array of knowledge in many different
            front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer
            that I can be and to contribute to the technology industry all that I know
            and can do. I am dedicated to perfecting my craft by learning from more
            seasoned developers, remaining humble, and continuously making strides to 
            learn all that I can about development.
            </p>
            <div className="about-action">
              <Button
                link="https://raw.githubusercontent.com/shakilahmed0369/protfolio/master/src/data/file/MyResume.pdf"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
