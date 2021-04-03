---
id: css1
title: Cascading Style Sheet
sidebar_label: Introduction
---
## Introduction
CSS stands for Cascading Style Sheets

CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files


1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)


```css title="Inline stying"
<h1 style="color:blue;text-align:center;">
This is a heading </h1>
```
```css title="External Styling"
h1 {
  color: blue;
  text-aling:center;
}
```

## Syntax
A CSS rule-set consists of a selector and a declaration block:

**Selector** - The selector points to the HTML element you want to style. 

` p is the selector in the example below`

**Declaration** - The declaration block contains one or more declarations separated by semicolons.

`{
  color: red;
  text-align: center;
}`

```css title="Selector & Declaration"
p {
  color: red;
  text-align: center;
}
```

Each declaration includes a CSS property name and a value, separated by a colon.
Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.


## Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.

**Class Selector** - Selects all elements with classname intro `.intro{ }`<br/>
**Id Selector** - Selects element with id firstname ` #firstname{ }`<br/>
**Select All** - Selects all elements - ` *{ }`<br/>
**Select Element** - Selects all paragraphs elements -`p{ }`

``` css title="Element Inside Element or Class"
.class {
    color: white;
    p{
        color:green;
    }
}
```

## Colors
Colors are specified using predefined 
1. Color name - `color:Red;`
2. RGB - `color:rgb(255, 255, 255);`
3. RGBA - `color:rgba(255, 255, 255,0.5);`
4. HEX - `color:#ff6347;`
5. HSL - `color:hsl(0, 100%, 50%);`


## Text
CSS has a lot of properties for formatting text.

**Text Color** - The `color` property is used to set the color of the text.

**Text Alignment** - The `text-align` property is used to set the horizontal alignment of a text.

- left
- right
- aligned
- centered
- justified.

**Text Decoration** - The `text-decoration` property is used to set or remove decorations from text.

- none
- overline
- line-through
- underline

**Text Transformation** - The `text-transform` property is used to specify uppercase and lowercase letters in a text.

- uppercase 
- lowercase letters
- capitalize


**Text Indent** - The `text-indent : 50px` property is used to specify the indentation of the first line of a text


**Letter Spacing** - The `letter-spacing : 50px` property is used to specify the space between the characters in a text.

**Text Shadow** - The `text-shadow : 2px 2px black` property adds shadow to text.

## Font

**Font Family** - The CSS font properties define the font family, boldness, size, and the style of a text.

- font-family: "Times New Roman", Times, serif;
- font-family: Arial, Helvetica, sans-serif;
- font-family: "Lucida Console", Courier, monospace;

**Font Style** - The right font can create a strong identity for your brand.
- font-style: normal;
- font-style: italic;
- font-style: oblique;

**Font Size** - The `font-size : 50px` property sets the size of the text.

```css title="Font"
.a {
  font: 20px Arial, sans-serif;
}
```

## Icons
To use the Font Awesome icons, go to fontawesome.com, sign in, and get a code to add in the `<head> `section of your HTML page:

``` javascript title="ICONS"
// https://fontawesome.com/ - Add script tag
<i class="fas fa-cloud"></i>
```

## List
**Unordered lists** `<ul>` - the list items are marked with bullets<br/>
**Ordered lists** `<ol>` - the list items are marked with numbers or letters

- list-style-type: circle;
- list-style-type: square;
- list-style-type: upper-roman;
- list-style-type: lower-alpha;
- list-style-image: url('sqpurple.gif');
- list-style: square inside url("sqpurple.gif");

