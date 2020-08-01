---
id: css1
title: Cascading Style Sheet
sidebar_label: Introduction
---
## 1. Introduction
CSS stands for Cascading Style Sheets

CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files


1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)

#### 1. INLINE
```css
<h1 style="color:blue;text-align:center;">
This is a heading </h1>
```

#### 2. EXTERNAL OR INTERNAL

```css
h1 {
  color: navy;
}
```


#### CSS EXAMPLE :
``` css
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
```


## 2. Syntax
A CSS rule-set consists of a selector and a declaration block:
```css
p {
  color: red;
  text-align: center;
}
```

### Selector

The selector points to the HTML element you want to style. 

` p is the selector in above example`

### Declaration
The declaration block contains one or more declarations separated by semicolons.

`{
  color: red;
  text-align: center;
}`

Each declaration includes a CSS property name and a value, separated by a colon.
Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.


## 3. Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

- Simple selectors (select elements based on name, id, class)
- Combinator selectors (select elements based on a specific relationship between them)
- Pseudo-class selectors (select elements based on a certain state)
- Pseudo-elements selectors (select and style a part of an element)
- Attribute selectors (select elements based on an attribute or attribute value)
This page will explain the most basic CSS selectors.

### Class Selector   
Selects all elements with `class="intro"`

`.intro{ }`

### Id Selector
Selects the element with `id="firstname"`

` #firstname{ }`	

### Select All
Selects all elements

` *{ }`

### Select Element 
Selects all `<p>` elements

`p{ }`

### Element Inside Element or Class
``` css
.class {
    color: white;
    p{
        color:green;
    }
}
```

## 4. Colors
Colors are specified using predefined 
- Color names `color:Red;`
- RGB `color:rgb(255, 255, 255);`
- RGBA `color:rgba(255, 255, 255,0.5);`
- HEX `color:#ff6347;`
- HSL `color:hsl(0, 100%, 50%);`

## 5. Backgrounds
The CSS background properties are used to define the background effects for elements.

In these chapters, you will learn about the following CSS background properties:

- background-color `background-color:blue:`
- background-image `background-image:url("paper.png");`
- background-repeat `background-repeat: no-repeat;`
- background-attachment `background-attachment: fixed;`
- background-position `background-position: right top;`


## 6. Border

### Border Style
- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border

### Border Width

The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:

```css
p.four {
  border-style: dotted;
  border-width: thick;
}
```

### Border Color
```css
p.one {
  border-style: solid;
  border-color: red;
}
```

### Border Short Hand

```css
p {
  border: 5px solid red;
}
```


## 7. Margin

- margin-top
- margin-right
- margin-bottom
- margin-left

``` css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```
## 8. Padding

The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

``` css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```


## 9. Height & Width

The height and width properties are used to set the height and width of an element.

The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.
``` css
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```