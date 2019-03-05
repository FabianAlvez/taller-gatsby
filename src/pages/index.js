import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ArticleList from '../components/articlesList'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <ArticleList />
  </Layout>
)

export default IndexPage
