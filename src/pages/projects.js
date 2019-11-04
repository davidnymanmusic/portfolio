import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props => (
  <Layout>
    <SEO title="Page two" />
    <h1 class="h1">Projects</h1>
    <div class="content">
      <div className="center">
        <button className="project">Dog Eat?</button>
        <button className="project">White Noise</button>
      </div>
    </div>
  </Layout>
)

export default SecondPage
