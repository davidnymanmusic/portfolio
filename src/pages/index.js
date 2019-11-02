import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../index.css"

const und = props => <span>{props.children}</span>

const IndexPage = () => {
  return (
    <Layout>
      <div id="App">
        <SEO title="Home" />
        <div class="statement">
          <div class="typewriter first">
            <h1>
              {" "}
              > Hello, I'm a{" "}
              <span style={{ textDecoration: "underline" }}>web-developer</span>
            </h1>
          </div>
          <div class="typewriter second">
            <h1>
              {" "}
              >{" "}
              <span style={{ textDecoration: "underline" }}>
                music composer
              </span>
            </h1>
          </div>
          <div class="typewriter third">
            <h1>
              {" "}
              > and all-around{" "}
              <span style={{ textDecoration: "underline" }}>good dude.</span>
            </h1>
          </div>
        </div>

        <div class="content"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
