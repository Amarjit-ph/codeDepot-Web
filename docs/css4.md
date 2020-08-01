---
id: css4
title: Flex Box
sidebar_label: Flex Box
---

1. Determine which elements you want to control with flexbox
2. Wrap them inside an outer container
3. Set Display property of the container to flex

## 1. Flex Flow
Choose the Main Axis

#### ROW 
1. Main >
2. Cross ^

#### COLUMN
1. Main ^
2. Cross >


Flex Flow Options
1. flex-flow: row; [Default]
2. flex-flow: column;
3. flex-flow : row-reverse;
4. flex-flow : column-reverse;

## 2. Flex Wrap 
Prevent overflow of items

1. flex-wrap:wrap;
2. flex-wrap:wrap-reverse;

## 3. Justify Content 
[ MAIN AXIS ] 

How the remaining space in the container will be distributed around the flex elements if there is any remaining spaces in the container.

1. Flex-start [Deafault] : Align items to the Begining of the flex-container
2. Flex-end : Align items to the end of flex container
3. Center : Centers the content inside the flex container
4. Space-between : Seperates the content with equal spaces with no spaces at the begining or at the end of the container
5. Space-around : Seperates the content with equal spaces and add spaces at the end of the container

## 4. Align Items 
[ CROSS AXIS ]

Justify-content work along the main axis while align items work along the cross-axis

flex-start : Aligns items along the cross axis to the start of the flex container
flex-end : Align items along the cross axis to the end of flex container
Center : Centers the content inside the flex container along the cross axis
stretch [Default] : Stretches the element to fll up the container

## 5. Align Self 
[ Single Element ]

- Works on Cross axis
- Accepts same values as Align Items

Align Self affect a single flex element only inside the Flex container

## 6. Order Property
- order: 1 = Last
- order: -1 = First

Order are Reversed in number

## 7. Flex Grow
How much the Flex item will grow
How much Space the element will take relative to other eliment

flex-grow:1 = Take full Size

## 7. Flex Shrink
Shrinking the Item relative to elements
- flex-shrink : 0 > Not Shrink

## 8. Flex basis
Set the intial size of the flex element before distribution any free space of the container

- flex-basis:300px;
- flex-basis:auto;





