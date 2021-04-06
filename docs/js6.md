---
id: js6
title: Object
sidebar_label: Object
---

Core Data Structure in Javascript
1. Store data in properties and actions in
methods
2. Allow you to “group” related data
together and split your code into logical
pieces

**Primitive values** - [Numbers,String,Booleans]<br/>
**Reference value** - (Objects)


```js title="Object"
const person = {
    name :'Amarjit Pheiroijam',
    age:25,
    hobbies:['Sports','Cooking'],
    greet : function(){
        alert('Hello world');
    }

}

person.greet();
```
## Accessing Properties

objectName.property - `person.age`<br/>
objectName["property"] - `person["age"]`<br/>
objectName[expression] - `x = "age"; person[x]`<br/>

## Adding, Modifying & Deleting Properties

Add - `person.isAdmin = true;`<br/>
Modify - `person.name = 'Rahul Dev'`<br/>
Delete - `delete person.age | person.age = null`<br/>

## "This" Keyword

In a function definition, this refers to the "owner" of the function.
In the example above, this is the person object that "owns" the fullName function.

```js
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
## Useful Links 
More on the this keyword (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this