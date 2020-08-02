---
id: css5
title: Responsive Design
sidebar_label: Responsive Design
---
## 1. Css Units

- Absolute = px
- Percentages = Relative to Parent ( width )
- Relative = View Port
   1. Relative to font-size ( en , rem )
   2. Relative to View Port ( vw , vh , vmin , vmax)

#### RECOMMENDED
1. Font Size = rem
2. Padding and margin = em
3. Widths = rem or percentage

## 2. Responisve Image

Controlling the width of images For Responsive Image

Use Perctange on Image and percentage is the relative to Parent

Use Maximum Width & minimum width
- max-width
- min-width
## 3. The em unit
Relative unit are always relative either to a font-size or the size of the view port

The em and rem are considered relative because they are relative to the font-size of the other elements

- em are relative to their parent's font-size
- Font-size is an inherited property, so if you don't declare it, It's getting from the body

1.5em = 150% of Parent Font-size

## 4. The rem unit
The rem unit is short for Root Em
That menans it's always reltive to the 'root' of the document

The root of an HTML page is always the html element


## 5. Media Queries
Media queries let us add new styles that target only specific contions

Syntax: <br/>
@media () {...}<br/>
@media media-type and (media-features) {...}

The media type let's us target different types of media
- Screen 
- Print
- Speech

The media condition let's us target specific conditions within that media type
- Widths
- Orientation
- Specific featues

#### From a minimun width of 400px and bigger
@media (min-width:400px){
   body{
       color:red;
   }
}
#### From a minimun width of 600px and bigger
@media (min-width:400px){
   body{
       color:red;
   }
}
#### Form a minimum width of 400px upto a width of 649px
@media (min-width:400px) and (max-width) {
   body{
       color:red;
   }
}



