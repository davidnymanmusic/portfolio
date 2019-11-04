import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GoMarkGithub } from "react-icons/go"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { Parallax, ParallaxBanner } from "react-scroll-parallax"
import Fade from "react-reveal/Fade"
import ibm from "../images/ibm.png"

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
      <Fade top>
        <div className="content">
          <h1 className="h1">Résumé</h1>

          {/* <Parallax y={["600%", "100%"]} x={["50%", "50%"]} tagOuter="figure">
          <div
            style={{
              height: 200,
              width: "300px",
              border: "3px solid yellow",
              backgroundColor: "white",
              opacity: 0.5,
            }}
          >
            {" "}
            <img style={{ width: "200px" }} src={ibm}></img>
          </div>
        </Parallax>
        <Parallax y={["700%", "50%"]} x={["0%", "0%"]} tagOuter="figure">
          <div
            style={{
              height: 200,
              width: "300px",
              border: "3px solid red",
              zIndex: 2,
              backgroundColor: "white",
              opacity: 0.5,
            }}
          ></div>
        </Parallax> */}
          {/* <Parallax y={["1%", "160%"]} x={["-190%", "240%"]} tagOuter="figure">
          <div
            style={{
              height: 200,
              width: "300px",
              border: "3px solid white",
              zIndex: 4,
              backgroundColor: "white",
              opacity: 0.5,
            }}
          ></div>
        </Parallax>
        <Parallax y={["-10%", "20%"]} x={["-100%", "180%"]} tagOuter="figure">
          <div
            style={{
              height: 200,
              width: "300px",
              border: "3px solid blue",
              zIndex: 4,
              backgroundColor: "white",
              opacity: 0.5,
            }}
          ></div>
        </Parallax> */}
          <div className="resume">
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
          </div>
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
      </Fade>
    </Layout>
  )
}

export default SecondPage
