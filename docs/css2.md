---
id: css2
title: Box Model
sidebar_label: Box Model
---

import  useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction
All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of:
**margins, borders, padding, and the actual content.** The image below illustrates the box model:

<img src={useBaseUrl('img/Box-Model.png')} />

Explanation of the different parts:

1. **Content** - The content of the box, where text and images appear
2. **Padding** - Clears an area around the content. The padding is transparent
3. **Border** - A border that goes around the padding and content
4. **Margin** - Clears an area outside the border. The margin is transparent


## Border

**Border Style** -
The border-style property sets the style of an element's four borders. This property can have from one to four values.
1. dotted
2. dashed
3. solid 
4. double

**Border Width** - The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick.

```css title="Border"
p {
  border: 5px solid red;
}
```


## Margin
Margins are used to create space around elements, outside of any defined borders.
``` css title="Margin"
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```
## Padding
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

``` css tile="Padding"
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

## Backgrounds
The CSS background properties are used to define the background effects for elements.
1. background-color -`background-color:blue:`
2. background-image - `background-image:url("paper.png");`
3. background-repeat - `background-repeat: no-repeat;`
4. background-attachment - `background-attachment: fixed;`
5. background-position - `background-position: right top;`

## Height & Width

The height and width properties are used to set the height and width of an element.

The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.

``` css title="Height & Width"
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```
