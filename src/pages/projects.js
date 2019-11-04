import React, { useState } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props => {
  const [show, setshow] = useState(false)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1 className="h1">Projects</h1>
      <div className="content">
        <div className="center">
          <button
            className="project"
            onClick={() =>
              window.open("http://dogeat.herokuapp.com/", "_blank")
            }
          >
            Dog Eat? <br></br>
            <p style={{ fontSize: 18, margin: 0 }}>v2 coming soon!</p>
          </button>
          <button
            className="project"
            onClick={() =>
              window.open(
                "https://davidnymanmusic.github.io/white-noise/#",
                "_blank"
              )
            }
          >
            White Noise
          </button>
          <button
            className="project"
            onClick={() => window.location.assign("/")}
            onMouseEnter={() => setshow(true)}
            onMouseLeave={() => setshow(false)}
          >
            {show ? (
              <>
                <FaArrowUp />
                <FaArrowUp />
              </>
            ) : (
              <>
                <FaArrowDown />
                <FaArrowDown />
              </>
            )}
            <br></br>
            This Site
            {show ? (
              <>
                <FaArrowDown />
                <FaArrowDown />
              </>
            ) : (
              <>
                <FaArrowUp />
                <FaArrowUp />
              </>
            )}
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
