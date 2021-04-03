---
id: bs1
title: Bootstrap
sidebar_label: Layout
---

## Introduction
Build fast, responsive sites with Bootstrap

Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.


[ **Bootstrap CheatSheet - An interactive list of Bootstrap classes for version 4.3.1** ](https://hackerthemes.com/bootstrap-cheatsheet/)


## Layout
Containers are the most basic layout element in Bootstrap and are required when using our default grid system.

## Container

Responsive, fixed-width container, meaning its max-width changes at each breakpoint.

```html title="Container"
<div class="container">
  <!-- Content here -->
</div>
```

## Fluid

Full width container, spanning the entire width of the viewport.

```html title="Fluid Contianer"
<div class="container-fluid">...</div>
```

## Responsive breakpoints

Allow you to specify a class that is 100% wide until the specified breakpoint is reached.

```html title="Responsive"
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
```

## Grid System

Mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

**Total Column Units = 12**

Responsive class should start defining for extra small

```html title="Grid System"
<div class="container">
  <div class="row">
    <div class="bg-primary col-12 col-md-6 col-lg-4">R1-C1</div>
    <div class="bg-secondary col-12 col-md-6 col-lg-4">R1-C2</div>
    <div class="bg-primary col-12 col-md-6 col-lg-4">R1-C3</div>
  </div>
</div>
```

1. Mobile - Extra Small = `col-12`
2. Tablet - Small = `col-sm-6`
3. Laptop - Medium = `col-md-4`
4. Desktop - Large = `col-lg-3`
5. Monitor - Extra Large = `col-xl-3`

## Alignment

[Bootstrap Alignment Documentation](https://getbootstrap.com/docs/4.6/layout/grid/#vertical-alignment)

**VERTICAL ALIGNMENT**

1. Align items
`Align multiple items inside the div`

- start
- center
- end

```html title="Align items"
<div class="container">
  <div class="row align-items-start">
    <div class="col">One of three columns</div>
    <div class="col">One of three columns</div>
    <div class="col">One of three columns</div>
  </div>
</div>
```

2. Align self
`Align the element itself alone`

- start
- center
- end

```html title="Align Self"
<div class="container">
  <div class="row">
    <div class="col align-self-start">One of three columns</div>
    <div class="col align-self-center">One of three columns</div>
    <div class="col align-self-end">One of three columns</div>
  </div>
</div>
```

**HORIAZONTAL ALIGNMENT**

Align the items horizontally `justify content`

- start
- center
- end
- around
- between

```html title="Justify Content"
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">One of two columns</div>
    <div class="col-4">One of two columns</div>
  </div>
</div>
```

## Hiding Elements

To hide elements simply use the .d-none class or one of the .d-{sm,md,lg,xl}-none classes for any responsive screen variation.

[Hiding Elements Display Property](https://getbootstrap.com/docs/4.0/utilities/display/)


