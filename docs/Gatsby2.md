---
id: Gatsby2
title: Gatsby & GraphQL
sidebar_label: Gatsby & GraphQL
---

## 1. Gatsby data with GraphQL

1. QUERY TO FIND TITLE
```graphql
query{
  site{
    siteMetadata {
      title
    }
  }
}
```
2. INSIDE GATSBY JAVASCRIPT
```
import { Link,graphql,useStaticQuery } from 'gatsby'

const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata{
                title
            }
        }
    }
`)

return (
    <header className={headerStyles.header}>
        {data.site.siteMetadata.title}
    </header>
)
```

## 2. GraphQL Playground

### 2.1 Change Playground
1. Setup Env variable
.eve.dev
```
GATSBY_GRAPHQL_IDE=playground
```

2. Install Env-cmd : ` npm install --save-dev env-cmd@8.0.2

3. Edit Json File :
` "dev": "env-cmd .env.development gatsby develop"`
   
### 2.2 Blog Powered by Markdown

1. Create Markdowns
``` md
---
title: "The Great Gatsby Bootcamp"
date: "2020-04-03"
---

I just launch a new bootcamp

# Topics Covered
1. Gatsby
2. Graphql
3. React
```

2. Install :
``npm install gatsby-source-filesystem@2.0.28``

3. Configure the Plugin

gatsby-config.js
``` javascript
module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
  siteMetadata: {
    title: 'Full-stack Bootcamp',
    author: "Amarjit Pheiroijam"
  }
}
```

## 3. Working with Markdown Posts

1. Install Plugin for parsing Mardowns files

`npm i gatsby-transformer-remark@2.3.8`

2. Add Plugin
3. Try on Graphql
```
query {
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          date
        }
        html
        excerpt
      }
    }
  }
}

```
4. Use on the gatsby post

``` javascript

const BlogPage = () => {
    const data = useStaticQuery(graphql
        `
    query {
        allMarkdownRemark{
         edges{
            node{
                frontmatter{
                 title
                 date
                 }
              }
            }
          }
        }
     `)
    return (
        <div>
            <Layout>
                <h1>BLOG</h1>
                <p> Posts will show up here later on.</p>
                <ol>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>Date :{edge.node.frontmatter.date}</p>
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
## 4. Generating Slugs for Posts

GOALS LIST : 
1. Generate a slug for each post
2. Generate the blog post page template
3. Generate a new page for each post

GATSBY NODE API's
1. Create gatsby-node.js

NODE FOR GATSBY
``` javascript 
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    console.log(JSON.stringify(node, undefined, 4))
}
```

MD FILE AS SLUGS
``` javascript 
const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        console.log('########### = ', slug);
    }

}
```


[ COMPLETE ] GOAL ONE SLUG FOR EACH POST
``` javascript
const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}
```
CONFIRMATION :
``` graphql
query{
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          date
        }
        html
        excerpt
        fields{
          slug
        }
      }
    }
  }
}
``` 
## 5. Dynamically Generating Pages

- GOAL 2 - Generate the blog page template
- GOLA 3 - Generate a new page for each post

*  Node API's - createPages

GOAL [COMPLETED]
``` javascript
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    //1. Get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')

    //2. Get Markdown data
    const res = await graphql(`
    query{
        allMarkdownRemark{
            edges{
                node{
                    fields{
                        slug
                    }
                }
            }
        }
    }`)
    //3. Create new pages
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}
```
### 5.1 Target Post by Slug Value using Argurments

``` graphql
query{
  fields{
    slug{
      eq:"gatsby
    }
  }
}
```

``` javascript
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query($slug:String!) {
        markdownRemark(fields:{slug:{eq:$slug}}){
            frontmatter{
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog
```

## 6. Adding Images to Post

npm install 
`gatsby-plugin-sharp@2.0.32`
`gatsby-remark-images@3.0.10`
`gatsby-remark-relative-images@0.2.2`

``` javascript
module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-puglin-sharp', {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images', {
            resolve: 'gatby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],

  siteMetadata: {
    title: 'Full-stack Bootcamp',
    author: "Amarjit Pheiroijam"
  }
}
```