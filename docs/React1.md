---
id: React1
title: React
sidebar_label: Introduction
---

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.
## 1. Introduction
#### JSX
It is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript. JSX produces React “elements”.
### 1. Exploring JSX
``` javascript
var template = (
    <div>
    <h1> NAME : AMARJIT PHEIROIJAM</h1>
    <h1> AGE :23 </h1>
    <h1> LOCATION : CHANDIGARH, INDIA </h1>
    </div>
)
```
This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.

### 2. JSX Expressions

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

{ } - Use Bracket to write Javascript to render template
()  - JSX should be inside a bracket
``` javascript
var user = {
    name:"Amarjit Pheiroijam",
    age:23,
    Address:'Chandigarh'
}

var template2 = (
    <div>
    <h1> NAME : {user.name} </h1>
    <h1> AGE : {user.age} </h1>
    <h1> LOCATION : {user.Address} </h1>
    </div>
)
```

### 3. Conditional Rendering in JSX

``` javascript
var user = {
    name:"Amarjit Pheiroijam",
    age:29,
    Address:'Chandigarh'
}

// true ? "PASS" : "FAIL"       [  PASS ]
// false ? "PASS" : "FAIL"      [ FAIL   ]

function getLoc(location){
    if(location){
        return <h1>LOCATION : {location}</h1>
    }else{
         return undefined;
        }
}

var template3 = (
    <div>
    <h1> NAME : {user.name ? user.name : 'Anonymous'} </h1>
    <h1> AGE: {user.age && user.age >= 18 && user.age }</h1>
    {getLoc(user.Address)}
    </div>
);
```
### 4. Event And Attributes

READ CHECK FOR SUPPORTED EVENTS AND ATTRIBUTES
https://reactjs.org/docs/events.html

#### EXAMPLE
``` javascript
<button onclick="activateLasers()">
  Activate Lasers
</button>
```
It is slightly different in React:

``` javascrit
<button onClick={activateLasers}>
  Activate Lasers
</button>
```


### 5. Manual Data Binding
```js
let count = 0;
let addone = () => {
    count++;
    renderCount();
}

let minone = () => {
    count--;
    renderCount();
}

let reset = () => {
    count = 0;
    renderCount();
}

let renderCount = () =>{
const template = (
    <div>
    <h1> COUNT : {count} </h1>
    <button onClick={addone}>+1</button>
    <button onClick={minone}>-1</button>
    <button onClick={reset}>Reset</button>
    </div>
);
ReactDOM.render(template,document.getElementById('root'));
}
renderCount();
```

### 6. Forms And Input
``` javascript 
<form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
```
* Prevent default to submit to full page refresh 
``` javascript
const onFormSubmit = e => {
  e.preventDefault(); //Stop refresh

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp(); //RE-RENDER
  }
};
```

### 7. Arrays in Jsx

```javascript
Const = [10,20,30,40,50];
{	
	num.map(numbers => {
        return <p>NO:{numbers * 2}</p>;
      	})
}
```
### EXAMPLE [ FILE.1]

## 2. React Components
* Reusable 
* Individual piece of User Interface
* Custom Html Element [React Component]

Example :  ``<Header />``

* Uppercase First Letter is Important is React Components
* Differentiate Between Html and Components
* Must define Render function 

COMPONENT EXAMPLE :
``` javascript
import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return <p> This is from Header</p>;
  }
}
const jsx = (
  <div>
    <h1>TITLE</h1>
    <Header />
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));
```

### 1. Creating Components

Creating a New Component

``` javascript 
import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}
const jsx = (
  <div>
    <Header />
  </div>
);
ReactDOM.render(jsx, document.getElementById("root"));
```

### 2. Nesting Components
<!--Nesting Example : [Files.2] -->
Nesting Option Component inside Options Component
``` javascript 
class Options extends React.Component {
  render() {
    return (
      <div>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>OPTION</div>;
  }
}
```

### 3. Components Props

React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:
* Props are arguments passed into React components.
* Props are passed to components via HTML attributes.

Example: 
Add a "brand" attribute to the Car element:
``const myelement = <Car brand="Ford" />;``

The component receives the argument as a props object:

Use the brand attribute in the component:
``` javascript
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h1>;
  }
}
```
<!--# PROPS EXAMPLE[Files.3]-->

### 4. Event Methods
<!--# Event Methods Example : [Files.4]-->
Look on React Documentation

### 5. Stateless functional components
Function Which cannot Use the React State but still a react Components
Props are accessible when props are pass as parameter to the function


EXAMPLE:
``` javascript
const User = (props) => {
  return (
    <div>
      <h1>STATELESS FUNCTIONAL COMPONENTS </h1>
      <h2>Function Which cannot User the React State but still a react Components</h2>
      { props.name }
    </div>
  )
}
```

### 6. Default Props Values

Allow to past data through props and create default Props
``` javascript 
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}
```
