---
id: css2
title: Cascading Style Sheet
sidebar_label: Box Model & Layout
---

import  useBaseUrl from '@docusaurus/useBaseUrl';

## 1. Box Model
All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:

<img src={useBaseUrl('css/Box-Model.png')} />

Explanation of the different parts:

- Content - The content of the box, where text and images appear
- Padding - Clears an area around the content. The padding is transparent
- Border - A border that goes around the padding and content
- Margin - Clears an area outside the border. The margin is transparent


## 2. Text

### 1. Text Color
The color property is used to set the color of the text.
``` css
h1 {
  color: green;
}
```

### 2. Text Alignment

The `text-align` property is used to set the horizontal alignment of a text.

- left
- right
- aligned
- centered
- justified.

```css
h1 {
  text-align: center;
}
```

### 3. Text Decoration
The `text-decoration` property is used to set or remove decorations from text.

- text-decoration: none;
- text-decoration: overline;
- text-decoration: line-through;
- text-decoration: underline;

### 4. Text Transformation
The text-transform property is used to specify uppercase and lowercase letters in a text.

It can be used to turn everything into 
- uppercase 
- lowercase letters
- capitalize
``` css
p{
  text-transform: uppercase;
}
```
### 5. Text Indent
The text-indent property is used to specify the indentation of the first line of a text
```css
p {
  text-indent: 50px;
}
```

### 6. Letter Spacing
The letter-spacing property is used to specify the space between the characters in a text.
```css
h1 {
  letter-spacing: 3px;
}
```
### 7. Text Shadow
The text-shadow property adds shadow to text.
``` css
h1 {
  text-shadow: 2px 2px black;
}
```

## 3. Font

### 1. Font Family
The CSS font properties define the font family, boldness, size, and the style of a text.
``` css
font-family: "Times New Roman", Times, serif;
font-family: Arial, Helvetica, sans-serif;
font-family: "Lucida Console", Courier, monospace;
```
### 2. Font Style
- font-style: normal;
- font-style: italic;
- font-style: oblique;

### 3. Font Size
The font-size property sets the size of the text.

```css
h1 {
  font-size: 40px;
}
```

```css
.a {
  font: 20px Arial, sans-serif;
}
```

## 4. Icons
To use the Font Awesome icons, go to fontawesome.com, sign in, and get a code to add in the `<head> `section of your HTML page:

``` javascript
<script src="https://kit.fontawesome.com/yourcode.js"></script>

<i class="fas fa-cloud"></i>
```

## 5. Lists
Unordered lists `<ul>` - the list items are marked with bullets
Ordered lists `<ol>` - the list items are marked with numbers or letters

- list-style-type: circle;
- list-style-type: square;
- list-style-type: upper-roman;
- list-style-type: lower-alpha;

* list-style-image: url('sqpurple.gif');
* list-style: square inside url("sqpurple.gif");


## 6. Layout
The display property is the most important CSS property for controlling layout.

The display property specifies if/how an element is displayed.

Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

### 1. Block-level Elements
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

EXAMPLE 
``` html
<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>
```

### 2. Inline Elements
An inline element does not start on a new line and only takes up as much width as necessary.

This is an inline `<span>` element inside a paragraph.

Examples
```html
<span>
<a>
<img>
```
### 3. Display: none;
display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them. 
### 4. Width and max-width
As mentioned in the previous chapter; a block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Setting the width of a block-level element will prevent it from stretching out to the edges of its container. Then, you can set the margins to auto, to horizontally center the element within its container. The element will take up the specified width, and the remaining space will be split equally between the two margins:

### 5. The position Property
The position property specifies the type of positioning method used for an element.
There are five different position values:

- static
- relative
- fixed
- absolute
- sticky

1. `Static` is not positioned in any special way, it is always positioned according to the normal flow of the page:

2. `Relative` is positioned relative to its normal position.Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

3. `fixed` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

4. `absolute` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

5. `sticky` is positioned based on the user's scroll position.
A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed)


## 7. Float & Clear
The `float` property is used for positioning and formatting content e.g. let an image float left to the text in a container.

- left - The element floats to the left of its container
- right - The element floats to the right of its container
- none - The element does not float (will be displayed just where it occurs in the text). This is default
- inherit - The element inherits the float value of its parent
In its simplest use, the float property can be used to wrap text around images.

```css
img {
  float: right;
}
```

The `clear` property specifies what elements can float beside the cleared element and on which side.

- none - Allows floating elements on both sides. This is default
- left - No floating elements allowed on the left side
- right- No floating elements allowed on the right side
- both - No floating elements allowed on either the left or the right side
- inherit - The element inherits the clear value of its parent
The most common way to use the clear property is after you have used a float property on an element.