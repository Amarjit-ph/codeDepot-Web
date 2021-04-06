---
id: js9
title: Object Oriented programming
sidebar_label: Object Oriented programming
---

The basic idea of OOP is that we use objects to model real world things that we want to represent inside our program.

- Work with Real-life Entities in code
- Classes & Instances
- Properties, Fields & Methods
- Inheritance

```js title=" Explaination"
PRODUCT
- Define characteristics of each
- Fetch from server

PRODUCT LIST
- List of Products
- Fetched from a server
- Object holds adding & removing logic

SHOPPING CART
- Renders cart products
- Total and allows user to order
- Object holds ordering logic

```

```js title="Object"
const products = [
  {
    title: 'Pillow',
    imageUrl: 'https://www.image.com',
    price: 150,
    description: 'A soft pillow for good night sleep',
  },
  {
    title: 'Carpet',
    imageUrl: 'https://www.image.com',
    price: 250,
    description: 'A carpet which is great for room',
  },
];
```

## Class

Class are blueprints of objects Define how objects look like, which properties and methods they have

- Objects are Instances of class
- Class-based creation is an alternative to using object literals

```js title="Class'

class Product{
    title,
    imageUrl,
    price,
    description
}
new Product() // Create object or Instances
```

## Constructor

The constructor() method is a special method for creating and initializing objects created within a class.

```js title="Constructor"
class Product {
  // Class Field
  title;
  imageUrl;
  price;
  description;

  constructor(title, imageUrl, desc, price) {
    // Class Property
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = desc;
    this.price = price;
  }
}
```

## Static

The static keyword defines static methods for classes.

Static methods are called directly on the class without creating an instance/object of the class.

```js title="Static"
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    // static method
    return 'Hello!!';
  }
}

mycar = new Car('Ford');

//Call 'hello()' on the class Car:
Car.hello();
```

## Inheritance

A class created with a class inheritance inherits all the methods from another class: To create a class inheritance, use the `extends` keyword. The `super()` method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

```js title="Inheritance"
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model('Ford', 'Mustang');

myCar.show();
myCar.present(); // Parent class method
```

## Getters and Setters

Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

```js title="Getters and Setters"
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car('Ford');

myCar.cnam; // Getter
myCar.cname('Ferrari'); // Setter
```
