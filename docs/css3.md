---
id: css3
title: Cascading Style Sheet
sidebar_label: Combinators
---
import  useBaseUrl from '@docusaurus/useBaseUrl';

## 1. Combinators
A combinator is something that explains the relationship between the selectors.

A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:
- descendant selector (space)
- child selector (>)
- adjacent sibling selector (+)
- general sibling selector (~)

### 1. Descendant Selector
The descendant selector matches all elements that are descendants of a specified element.

The following example selects all `<p>` elements inside `<div>` elements: 
```css
div p {
  background-color: yellow;
}
```

### 2. Child Selector
The child selector selects all elements that are the children of a specified element.

The following example selects all `<p>` elements that are children of a `<div>` element:
```css
div > p {
  background-color: yellow;
}
```

### 3. Adjacent Sibling Selector
The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects all `<p>` elements that are placed immediately after `<div>` elements:

```css
div + p {
  background-color: yellow;
}
```

### 4.General Sibling Selector
The general sibling selector selects all elements that are siblings of a specified element.

The following example selects all `<p>` elements that are siblings of `<div>` elements: 

```css
div ~ p {
  background-color: yellow;
}
```


## 2. Pseudo-classes
A pseudo-class is used to define a special state of an element.
- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus
``` css
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```

## 3. Opacity / Transparency
The opacity property can take a value from 0.0 - 1.0. The lower value, the more transparent:
```css
img {
  opacity: 0.5;
}
```
OPACITY OVER HOVER
```css
img:hover {
  opacity: 1.0;
}
```

## 4. Navigation Bars
Navigation Bar = List of Links
A navigation bar needs standard HTML as a base.

A navigation bar is basically a list of links, so using the `<ul>` and `<li>` elements makes perfect sense:

``` html
<ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
```
``` css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```
EXPLAINATION :
- list-style-type: none; - Removes the bullets. A navigation bar does not need list markers
- Set margin: 0; and padding: 0; to remove browser default settings


### 1. Vertical Navigation Bar
```css
li{
  display: block;
}
```

### 2. Horizontal Navigation Bar
One way to build a horizontal navigation bar is to specify the `<li>` elements as inline, in addition to the "standard" code from the previous page:

```css
li {
  display: inline;
}
```

## 5. Dropdowns

Create a dropdown box that appears when the user moves the mouse over an element.

```html
<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>

<div class="dropdown">
  <span>Mouse over me</span>
  <div class="dropdown-content">
    <p>Hello World!</p>
  </div>
</div>
```

# 6. Website Layout
A website is often divided into headers, menus, content and a footer:

<img src={useBaseUrl('css/Website-Layout.png')} />


### 1. Header
A header is usually located at the top of the website (or right below a top navigation menu). It often contains a logo or the website name:

```css
.header {
  background-color: #F1F1F1;
  text-align: center;
  padding: 20px;
}
```

### 2. Navigation Bar
A navigation bar contains a list of links to help visitors navigating through your website:

``` css
/* The navbar container */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Navbar links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Links - change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
```

### 3. Content
The layout in this section, often depends on the target users. The most common layout is one (or combining them) of the following:

- 1-column (often used for mobile browsers)
- 2-column (often used for tablets and laptops)
- 3-column layout (only used for desktops)

We will create a 3-column layout, and change it to a 1-column layout on smaller screens:

```css
/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other on smaller screens (600px wide or less) */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
```

### 4. Footer
The footer is placed at the bottom of your page. It often contains information like copyright and contact info:

```css
.footer {
  background-color: #F1F1F1;
  text-align: center;
  padding: 10px;
}
```

## 7. Units
<img src={useBaseUrl('css/Units.png')} />

