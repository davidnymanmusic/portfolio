import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GoMarkGithub } from "react-icons/go"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

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
      <h1 class="h1">Résumé</h1>
      <div class="content">
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
        {icons.map(i => (
          <div className="icon" onClick={() => window.open(i.link, "_blank")}>
            {i.icon}
            {<p>{i.text}</p>}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default SecondPage
