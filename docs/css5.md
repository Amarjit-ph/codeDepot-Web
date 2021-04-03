---
id: css5
title: Flex Box
sidebar_label: Flex Box
---
## Introduction
The Flexbox Layout aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word “flex”).

[Complete Guid to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Basics
**Main Axis** - Horizontal<br/>
**Cross Axis** - Vertical

## Display
This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

```css
.container {
  display: flex; /* or inline-flex */
}
```

## Flex Direction
This establishes the main-axis, thus defining the direction flex items are placed in the flex container.
1. row (default)
2. row-reverse
3. column
4. column-reverse

## Flex Wrap 
Prevent overflow of items
1. flex-wrap:wrap;
2. flex-wrap:wrap-reverse;


## Justify Content 

**[ MAIN AXIS ]**<br/>
How the remaining space in the container will be distributed around the flex elements if there is any remaining spaces in the container.

1. Flex-start [Deafault] : Align items to the Begining of the flex-container
2. Flex-end : Align items to the end of flex container
3. Center : Centers the content inside the flex container
4. Space-between : Seperates the content with equal spaces with no spaces at the begining or at the end of the container
5. Space-around : Seperates the content with equal spaces and add spaces at the end of the container

## Align Items 
**[ CROSS AXIS ]**<br/>
This defines the default behavior for how flex items are laid out along the cross axis on the current line.

1. Justify-content work along the main axis while align items work along the cross-axis
2. flex-start : Aligns items along the cross axis to the start of the flex container
3. lex-end : Align items along the cross axis to the end of flex container
4. Center : Centers the content inside the flex container along the cross axis
5. stretch [Default] : Stretches the element to fll up the container

## Align Self 
**[ SELF ]**<br/>
This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

1. auto
2. flex-start
3. flex-end
4. center
5. baseline
6. stretch

Align Self affect a single flex element only inside the Flex container.




