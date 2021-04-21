---
id: bs2
title: Utilities
sidebar_label: Utilities
---

Use Bootstrap utilities to quickly style the of an element. Great for images, buttons, or any other element.

## Spacing

Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.

Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties.

**m** - for classes that set margin<br/> **p** - for classes that set padding

Where sides is one of:<br/><br/> **t** - for classes that set margin-top or padding-top<br/> **b** - for classes that set margin-bottom or padding-bottom<br/> **l** - for classes that set margin-left or padding-left<br/> **r** - for classes that set margin-right or padding-right<br/> **x** - for classes that set both _-left and _-right<br/> **y** - for classes that set both _-top and _-bottom<br/> **blank** - for classes that set a margin or padding on all 4 sides of the element<br/> <br/> Where size is one of:<br/> <br/>

**0** - for classes that eliminate the margin or padding by setting it to 0<br/> **1** - (by default) for classes that set the margin or padding to $spacer _ .25<br/> **2** - (by default) for classes that set the margin or padding to $spacer _ .5<br/> **3** - (by default) for classes that set the margin or padding to $spacer<br/> **4** - (by default) for classes that set the margin or padding to $spacer _ 1.5<br/> **5** - (by default) for classes that set the margin or padding to $spacer _ 3<br/> auto - for classes that set the margin to auto<br/>

## Colors

Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.

```css title="Colors"
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
<p class="text-info">.text-info</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-dark">.text-dark</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
```

## Border

Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.

[Border Documentation](https://getbootstrap.com/docs/4.0/utilities/borders/)

```css title="Border"
<span class="border"></span>
<span class="border-top"></span>
<span class="border-right"></span>
<span class="border-bottom"></span>
<span class="border-left"></span>
```

```css title="Color"
<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>
<span class="border border-warning"></span>
<span class="border border-info"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-white"></span>
```

```css title="Radius"
<img src="..." alt="..." class="rounded">
<img src="..." alt="..." class="rounded-top">
<img src="..." alt="..." class="rounded-right">
<img src="..." alt="..." class="rounded-bottom">
<img src="..." alt="..." class="rounded-left">
<img src="..." alt="..." class="rounded-circle">
<img src="..." alt="..." class="rounded-0">
```

## Backgrounds

Similar to the contextual text color classes, easily set the background of an element to any contextual class.

```css title="Background Colors"
<div class="p-3 mb-2 bg-primary ">.bg-primary</div>
<div class="p-3 mb-2 bg-secondary ">.bg-secondary</div>
<div class="p-3 mb-2 bg-success">.bg-success</div>
<div class="p-3 mb-2 bg-danger">.bg-danger</div>
<div class="p-3 mb-2 bg-warning">.bg-warning</div>
<div class="p-3 mb-2 bg-info">.bg-info</div>
<div class="p-3 mb-2 bg-light">.bg-light</div>
<div class="p-3 mb-2 bg-dark">.bg-dark</div>
<div class="p-3 mb-2 bg-white">.bg-white</div>
```
