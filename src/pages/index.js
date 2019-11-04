import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../index.css"

const IndexPage = () => {
  return (
    <Layout>
      <div id="App">
        <SEO title="Home" />
        <div className="statement">
          <div className="typewriter first">
            <h1>
              {" "}
              <span style={{ color: "#94b2b3", fontWeight: 900 }}>></span>{" "}
              Hello, I'm a{" "}
              <span style={{ textDecoration: "underline" }}>web developer</span>
            </h1>
          </div>
          <div className="typewriter second">
            <h1>
              {" "}
              <span style={{ color: "#94b2b3", fontWeight: 900 }}>> </span>
              <span
                onClick={() =>
                  window.open("https://www.davidnymanmusic.com", "_blank")
                }
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                music composer
              </span>
            </h1>
          </div>
          <div className="typewriter third">
            <h1>
              {" "}
              <span style={{ color: "#94b2b3", fontWeight: 900 }}>></span> and
              ready to{" "}
              <span style={{ textDecoration: "underline" }}>collaborate.</span>
            </h1>
          </div>
        </div>

        <div className="content"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
