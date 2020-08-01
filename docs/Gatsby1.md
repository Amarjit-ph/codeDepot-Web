---
id: Gatsby1
title: Gatsby
sidebar_label: Introduction
---
Fast in every way that matters

Gatsby is a free and open source frame work
based on React that helps developers build 
blazing fast websites and apps

* Fast & Easy
* Require NodeJs


## 1. Starter Template
```cmd
gatsby new Gastby-BootCamp
https://github.com/gatsbyjs/gatsby-starter-hello-world.git
```

## 2. Gatsby Pages

#### SOURCE DIRECTORY
PAGES = Generate Sites [ROUTES]

* pages/contact = .com/contact
* pages/about = .com/about
* pages/service = .com/service

Javascript files that should render React Components

``` Javascript 
import React from 'react'

const Indexpage = () => {
    return (
        <div>
            <h1> Hello !</h1>
            <h2> I'm Amarjit Pheiroijam </h2>
            <h2>A full stack Developer living in Beautiful Bangalore.</h2>
        </div>
    )
}
export default Indexpage
```

` src/page/blog.js = localhost:8000/blog`

``` js
import React from 'react'

export default function blogPage() {
    return (
        <div>
            <h1> BLOG </h1>
            <p> Posts will show up here later on.</p>
        </div>
    )
}
```

## 3. Link Between Pages

#### 1. Using Anchor tag | Full Page Reload |
```js
<a href="/contact"> Contact me</a>
```

#### 2. Using import { Link } from 'gatsby'
```js
<p> Need a Developer ? <Link to="/contact">
Contact Me</Link> </p>
```


#### COMPONENTS FOLDER
`src/components/React-Components-live-Here`
Create Header & Footer in Component Folder

## 4. Shared Page Components

1. Create Layout component
src/components/layout.js

``` javascript
import React from 'react'
export default function Layout(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}
```

2. Use Layout in Other pages 

#### [ PAGE 1 ]
src/pages/index.js

``` javascript 
import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Indexpage = () => {
    return (
        <div>
            <Layout>
                <h1> Hello !</h1>
                <h2> I'm Amarjit Pheiroijam </h2>
                <h2>A full stack Developer living in Beautiful Bangalore.</h2>
                <p> Need a Developer ? <Link to="/contact"> Contact Me</Link> </p>
            </Layout>
        </div>
    )
}
export default Indexpage
```
#### [ PAGE 2]
src/pages/about.js

``` javascript
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default function AboutPage() {
    return (
        <div>
            <Layout>
                <h1>About me</h1>
                <p> I Currently teach full time on Bootcamp</p>
                <p> <Link to="/contact"> Want to work with me ? Reach out </Link></p>
            </Layout>
        </div>
    )
}
```

## 5. Styling Gatsby

1. Import Style
`import '../styles/index.css'`

2. Install gatby sass plugin
npm install --save node-sass gatsby-plugin-sass

3. Configure Plugin
/gatsby-config.js

``` javascript
module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass'
  ],
}
```

4. Using scss
src/styles/index.scss

``` scss
$color:green;
* {
    color: $color
}
```


## 6. Styling with CSS Modules

* Styles Import in a Single Component doesn't mean that it apply only to the Component
* Styles are globally acessible
* Target by Class Name

#### SOLUTION IS CSS MODULES
Make Local Scope

1. Create Scss/css module

`header.module.scss`

2. Import on javascript File

``` javascript
import headerStyles from './header.module.scss'

export default function Header() {
    return (
        <header>       
        <li>
    <Link className={headerStyles.link} to="/">
    Home
    </Link>
        </li>       
        </header>
    )
}
```

### 6.1 Sticky Footer

``` scss
.container {
    margin: 0 auto;
    max-width: 750px;
    padding:1rem;

    display: flex;
    flex-direction: column;
    min-height:100vh;
}

.content{
    flex-grow:1;
}
```

``` javascript 
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

export default function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>

            <Footer />
        </div>
    )
}
```

### 6.2 Navigation

```scss
.nav_list{
    display: flex;
    list-style-type:none;
    margin: 0;
}
```

```javascript
<nav>
    <ul className={headerStyles.nav_list}>
        <li><Link className={headerStyles.link}
        to="/">Home</Link></li>

        <li><Link className={headerStyles.link}
        to="/blog">Blogs</Link></li>

        <li><Link className={headerStyles.link}
        to="/about">About</Link></li>

        <li><Link className={headerStyles.link}
        to="/contact">Contact</Link></li>
    </ul>
</nav>
```

### 6.3 Hover & Active
``` scss

.nav_item:hover {
    color:black
}

.active_nav_item {
    color:#333333;
}
```

```javascript
<nav>
    <ul className={headerStyles.nav_list}>
        <li><Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/">Home</Link></li>

        <li><Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/blog">Blogs</Link></li>

        <li><Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/about">About</Link></li>
        
        <li><Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/contact">Contact</Link></li>
    </ul>
</nav>
```
