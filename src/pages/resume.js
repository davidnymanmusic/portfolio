import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GoMarkGithub } from "react-icons/go"
import { FaTwitter } from "react-icons/fa"

const size = { height: 120, width: 120 }
const SecondPage = props => (
  <Layout>
    <SEO title="resume" />
    <h1 class="h1">Resume</h1>
    <div class="content"></div>
    <GoMarkGithub className="icon" style={size} />
    <FaTwitter className="icon" style={size} />
  </Layout>
)

export default SecondPage
