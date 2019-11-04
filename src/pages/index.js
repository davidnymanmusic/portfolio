import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../index.css"

const IndexPage = () => {
  return (
    <Layout>
      <div id="App">
        <SEO title="Home" />
        <div class="statement">
          <div class="typewriter first">
            <h1>
              {" "}
              <span style={{ color: "#94b2b3", fontWeight: 900 }}>></span>{" "}
              Hello, I'm a{" "}
              <span style={{ textDecoration: "underline" }}>web developer</span>
            </h1>
          </div>
          <div class="typewriter second">
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
          <div class="typewriter third">
            <h1>
              {" "}
              <span style={{ color: "#94b2b3", fontWeight: 900 }}>></span> and
              ready to{" "}
              <span style={{ textDecoration: "underline" }}>collaborate.</span>
            </h1>
          </div>
        </div>

        <div class="content"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
