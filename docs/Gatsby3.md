---
id: Gatsby3
title: Contentful
sidebar_label: Contentful
---

## 1. Contentful
1. SETUP 
CONTENTFUL [ https://www.contentful.com/ ]
2. CONNECT API
3. QUERY IN GRAPHQL

``` graphql
query{
  allContentfulBlogPost{
    edges{
      node{
        title
        slug
        publishedDate
      }
    }
  }
}
```

## 2. Rendering Contenful Posts

``` javascript
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import blogStyles from './blog.module.scss'
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql
        `
    query {
        allContentfulBlogPost(sort:{fields:publishedDate,order:DESC}){
            edges{
                node{
                    title
                    slug
                    publishedDate(formatString:"Do MMMM YYYY")
                }
            }
        }
    }
     `)
    return (
        <div>
            <Layout>
                <h1>BLOG</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })
                    }
                </ol>

            </Layout>
        </div>
    )
}

export default BlogPage
```
## 3. Dynamic Pages from Contentful

1. Install 

`npm i @contentful/rich-text-react-renderer`

2. Configure

``` javascript
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}
export default Blog
```

## 4. 404 Page & Helmet 

src/pages/404.js

HELMET
1. Install 

`npm i gatsby-plugin-react-helmet@3.0.12`
`npm i react-helmet@5.2.0`

2. Configure in Gatsby
3. Create Head

``` javascript
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = (props) => {

    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                title
            }
        }
    }
    
    `)
    return (
        <Helmet title={`${props.title} | ${data.site.siteMetadata.title}`} />
    )
}
export default Head
```
4. Use on Pages

``` javascript
import Layout from '../components/layout'
import Head from '../components/head'

const Indexpage = () => {
    return (
        <div>
            <Layout>
                <Head title="Home" />
                <h1> Hello !</h1>
                <h2> I'm Amarjit Pheiroijam,A full-stack Developer living in Beautiful Bangalore.</h2>
                <p> Need a Developer ? <Link to="/contact"> Contact Me</Link> </p>
            </Layout>
        </div>
    )
}
export default Indexpage
```

## 5. Deploy on Netlify

1. Uplooad on Github
2. Go to Netlify
3. Connect the Repository
4. Setup Environment Variable
5. Deploy

### 1. Rebuild New Content
1. Go to Deploys tab
2. Tigger Deploy - Clear Cache and Deploy site
3. Restart Automatically

### 2. Continious Integration
1. git push
2. Auto Deploy Workflow from Github