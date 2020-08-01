---
id: React2
title: State & Life Cycle
sidebar_label: State & Life Cycle
---
 The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

State Re Render UI When the Data is change

## 1. React State
* This.setState
* This.state = { Count: 0 }

``` javascript 
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.state = {
            count: 0
        };
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    resetAll() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>COUNT :{this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.resetAll}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
```



## 2. Method Binding
### 1. Working Binding
``` javascript
// WORKING THIS BINDING
const obj = {
  name: "AMARJIT",
  getName() {
    return this.name;
  }
};
console.log(obj.getName());
//OUTPUT : AMARJIT 
```
### 2. Brokent Binding
```javascript
//BROKEN THIS BINDING
const obj = {
  name: "AMARJIT",
  getName() {
    return this.name;
  }
};
const getName = obj.getName;
console.log(getName()); //BROKEN THIS BINDING
```
### 3. Solve Binding
``` javascript
//SOLVE WITH BIND
const getName = obj.getName.bind(obj); //BIND FORM OBJECT [obj]^
console.log(getName());

//BIND FORM PARAMETER
const getName = obj.getName.bind({ name: "Andrew" });
console.log(getName());
```

### Example
``` javascript 
class Options extends React.Component {
  removeAll() {
    alert(this.props.options); // BROKEN THIS BIND
  }
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        <button onClick={this.removeAll.bind}>RESET</button>
      </div>
    );
  }
}
```

### Fixed This Bind
``<button onClick={this.removeAll.bind(this)}>RESET</button>``

### Final Fixed for this Binding
CALL CONSTRUCTOR SUPER PROPS THEN BIND IN THE FUNCTION
``` javascript
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert(this.props.options);
  }
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        <button onClick={this.handleRemoveAll}>RESET</button>
      </div>
    );
  }
}
```
:::tip
## PROPS 
#### TOP DOWN DATA STREAM 
Which passes form parent class to the child component class 
Through props
:::
:::tip
## FUNCTIONAL PROPS
#### BOTTON UP STREAM
Method call from child via props communicate with parents
:::

## 3. Life Cycle Methods

* Fire at Start
``` javascript
  componentDidMount() {
    console.log('MOUNTED');
  }
```

* Fire when something change
``` javascript
componentDidUpdate() {
    console.log('UPDATED');
  }
```
* Fire when Component is Close
``` javascript 
componentWillUnmount() {
    console.log('UNMOUNTED');
  }
```

## 4. Saving and Loading Data
Using localStorage [Files.5]
## 5. Passing Children to Component

### 1. Passing Template component as Childern to layout component 
``` javascript 
const Layout = (props) => {
    return (
        <div>
            <h1>1</h1>
            {props.content}
            <h1>3</h1>
        </div>
    )
}
```
``` javascript
const template = (
    <div>
        <h1>2</h1>
    </div>
);

ReactDOM.render(<Layout content={template} />, document.getElementById('root'));
```
### 2. Another method of passing

``` javascript
const Layout = (props) => {
    return (
        <div>  
            <h1>1</h1>
            {props.children}
            <h1>3</h1>
        </div>
    )
}
ReactDOM.render(<Layout>
    <div>
        <h1>2</h1>
    </div>
</Layout>, document.getElementById('root'));
```
