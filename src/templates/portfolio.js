// src/templates/portfolio.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfolioTemplate = ({ data }) => {
    const post = data.wpPost
  return (
    <Layout>
      <Seo title={post.title} />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

export const query = graphql`
query($id: String!) {
  wordpressPost(id: { eq: $id }) {
    title
    content
  }
}
`

export default PortfolioTemplate
