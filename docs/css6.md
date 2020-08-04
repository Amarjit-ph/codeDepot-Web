---
id: css6
title: Syntactically Awesome StyleSheets
sidebar_label: SASS
---

- Css with Superpowers
- Css PreProcessor/Extension
- Extent Features that do not exist in CSS
- Scss files are compiled to regular CSS

## 1. Varibles in CSS
- Easier to read amd write than CSS custom properties
- Prefixed with a '$'
- $primary-color:blue

Example :
```scss
$font-stack: Helvetica , san-serif;
$primary-color: #333;

body {
    font: 100% $font-stack;
    color:$primary-color;
}
```

## 2. Nesting
```scss
nav{
    ul{
        margin:0;
    }
    a{
        display:block;
    }
}
```

```css

nav ul {
    margin:0;
}
nav a {
    display:block;
}
```

## 3. Modules

```scss
// _base.scss
$font-stack: Helvetica , san-serif;
$primary-color: #333;
body{
    color: $primary-color;
}
```

```scss
// styles.scss

@use 'base';

.inverse{
    color: base.$primary-color;
}
```

## 4. Mixins & Functions

``` scss
@mixin transform($property){
    -webkit-transform:$property;
    -ms-transform:$property;
    transform:$property;
}
.box { @include transform(rotate(30deg)); }
```

```css
.box{
    -webkit-transform:rotate(30deg);
    -ms-transform:rotate(30deg);
   
    transform:rotate(30deg);
}
```

## 5. Inheritance

```scss
%message-shared {
    border:1px solid #ccc;
    padding :10px;
    color:#333;
}

.message {
    @extend %message-shared;
}
.sucess {
    @extend %message-shared;
    border-color:red;
}
.warning {
    @extend %message-shared;
    border-color:yellow;
}
```

## 6. Operators

```scss
article[role='main']{
    float: left;
    width: 600px/960px * 100%;
}
```

## 7. Conditionals

```scss
@mixin triangle($size, $color, $direction ){
    height:0;
    widht:0;

    @if $direction == up {
        border-bottom-color: $color;
    } @else if $direction == right {
        border-bottom-color:$color
    }

    }
}
```