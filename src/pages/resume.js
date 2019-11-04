import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GoMarkGithub } from "react-icons/go"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { Parallax } from "react-scroll-parallax"

import ibm from "../images/ibm.png"
import { useScroll } from "../hooks/useScroll"
import useWindowDimensions from "../hooks/useWindowDimensions"

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
  // const isSlower = getRandomInt(0, 1) ? true : false
  const { scrollX, scrollY, scrollDirection } = useScroll()
  const { height, width } = useWindowDimensions()

  console.log(Math.ceil(scrollY * 0.2))
  // console.log(scrollX, scrollY, scrollDirection)
  return (
    <Layout>
      <SEO title="resume" />

      <div className="content" style={{ height: 10000 }}>
        <h1 className="h1">Résumé</h1>

        {/* <Parallax
          styleInner={{ backgroundColor: "green", width: "fit-content" }}
          y={[0, 370]}
          // x={[10, -scrollY + 1000]}
          tagOuter="figure"
        > */}
        <div
          style={{
            height: 200,
            width:
              scrollDirection === "up" && scrollY < 1595
                ? Math.ceil(scrollY * 2)
                : "1595px",
            maxWidth: width * 0.5,
            border: "3px solid yellow",
            backgroundColor: "white",
            // opacity: 0.5,
            position: "fixed",
            top: "8em",
            padding: 0,
            margin: 0,
            whiteSpace: "no-wrap",
          }}
        >
          <h1 style={{ whiteSpace: "nowrap", overflow: "auto" }}>
            Software Engineer
          </h1>
          <p style={{ whiteSpace: "nowrap", overflow: "auto" }}>
            Officia irure non eiusmod incididunt sit eiusmod duis id
            labore.Commodo voluptate eiusmod qui et commodo voluptate cupidatat
            anim veniam do.Ex mollit nostrud aliqua veniam.Eu velit nostrud
            eiusmod nulla deserunt fugiat commodo fugiat dolore.
          </p>
          <img style={{ width: "200px" }} src={ibm}></img>
        </div>
        <div
          style={{
            height: 200,
            width:
              scrollDirection === "up" && scrollY < 1595
                ? Math.ceil(scrollY * 1.5)
                : "1595px",
            maxWidth: width * 0.5,
            border: "3px solid yellow",
            backgroundColor: "white",
            // opacity: 0.5,
            position: "fixed",
            top: "42em",
            padding: 0,
            margin: 0,
            whiteSpace: "no-wrap",
          }}
        >
          <h1>Software Engineer</h1>
          <img style={{ width: "200px" }} src={ibm}></img>
        </div>
        <div
          style={{
            height: 200,
            width:
              scrollDirection === "up" && scrollY < 1595
                ? Math.ceil(scrollY)
                : "1595px",
            maxWidth: width * 0.5,
            border: "3px solid yellow",
            backgroundColor: "white",
            // opacity: 0.5,
            position: "fixed",
            top: "22em",
            padding: 0,
            margin: 0,
            whiteSpace: "no-wrap",
          }}
        >
          <h1>Software Engineer</h1>
          <img style={{ width: "200px" }} src={ibm}></img>
        </div>
        {/* </Parallax> */}

        {/* <Parallax
          styleInner={{ backgroundColor: "blue", width: "fit-content" }}
          // y={[400, 300]}
          y={[-300, 240]}
          x={[10, 240]}
          tagOuter="figure"
        > */}

        {/* </Parallax> */}
        {/* <Parallax
          styleInner={{ width: "fit-content" }}
          y={["700%", "50%"]}
          x={["0%", "0%"]}
          tagOuter="figure"
        >
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
        </Parallax> */}
        {/* <Parallax y={["-10%", "20%"]} x={["-100%", "180%"]} tagOuter="figure">
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
    </Layout>
  )
}

export default SecondPage
