import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GoMarkGithub } from "react-icons/go"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { Parallax } from "react-scroll-parallax"

const size = { height: 100, width: 100 }
const SecondPage = props => {
  const icons = [
    {
      icon: <GoMarkGithub className="icon" style={size} />,
      text: "GitHub",
      link: "https://github.com/davidnymanmusic",
    },
    {
      icon: <FaTwitter className="icon" style={size} />,
      text: "Twitter",
      link: "https://twitter.com/davidnyman",
    },
    {
      icon: <FaLinkedin className="icon" style={size} />,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/david-nyman-music/",
    },
  ]
  return (
    <Layout>
      <SEO title="resume" />
      <div className="content">
        <h1 className="h1">Résumé</h1>
        <Parallax y={[-200, 200]} x={[-60, 20]} tagOuter="figure">
          <div
            style={{
              height: 200,
              width: "10px",
              border: "3px solid yellow",
              backgroundColor: "yellow",
              opacity: 0.5,
            }}
          ></div>
        </Parallax>
        <Parallax y={[260, 5]} x={[30, 80]} tagOuter="figure">
          <div
            style={{
              height: 200,
              width: "10px",
              border: "3px solid red",
              zIndex: 2,
              backgroundColor: "red",
              opacity: 0.5,
            }}
          ></div>
        </Parallax>
        <Parallax y={[160, 20]} x={[22, 100]} tagOuter="figure">
          <div
            style={{
              height: 200,
              width: "10px",
              border: "3px solid white",
              zIndex: 4,
              backgroundColor: "white",
              opacity: 0.5,
            }}
          ></div>
        </Parallax>
        <Parallax y={[-40, 0]} x={[-12, 50]} tagOuter="figure">
          <div
            style={{
              height: 200,
              width: "10px",
              border: "3px solid blue",
              zIndex: 4,
              backgroundColor: "blue",
              opacity: 0.5,
            }}
          ></div>
        </Parallax>
      </div>
      <div className="center">
        {icons.map((i, index) => (
          <div
            key={index}
            className="icon"
            onClick={() => window.open(i.link, "_blank")}
          >
            {i.icon}
            {<p>{i.text}</p>}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default SecondPage

{
  /* <div className="resume">
            <h1>Work Experience</h1>
            <p>
              Software Engineer Apprentice at <b>IBM</b>
              <br></br>
              Spent time at the <i>Garage for Cloud</i> building an internal
              application for deploying Talent onto client engagements
            </p>
 
          <h1>Education</h1>
          <p>
            Hampshire College - 2006-2010<br></br>
            B.A. in Music Compostion for Film
          </p>
        </div> */
}
