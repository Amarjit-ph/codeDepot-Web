---
id: React5
title: Firebase & React
sidebar_label: Firebase & React
---

## 1. Firebase
### 1.1 Configure Firebase
``` javascript
import * as firebase from 'firebase';

const firebaseConfig = {
  /*
    COPY ALL THE CREDENTIALS 
    FROM CONSOLE
  */
};
```
``` javascript
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
```

### 1.2 Create Data
``` javascript
database.ref().set({
    name: 'Amarjit Pheiroijam',
    age: 26,
    isSingle: true,
    location: {
        city: "Chandigarh",
        country: 'India'
    },
    attributes: {
        hight: 5.9,
        weight: 80
    }
});
```
### 1.3 Replace All data
``` javascript
//REPLACE ALL DATA
database.ref().set("this is my data");
```
``` javascript
//REPLACE ALL DATA
database.ref().set({
     age: 100
});
```
### 1.4 Replace specific Data
``` javascript
//REPLACE SPECIFIC DATA
database.ref('age').set(100);
```

### 1.5 Update Data
``` javascript
//UPDATE SPECIFIC DATA
database.ref('name').set('Pheiroijam Amarjit');
```
``` javascript
//UPDATE DATA TO SPECIFIC PART
database.ref('location/city').set('New York');
```
UPDATE WITH PROMISE

``` javascript
//UPDATE WITH PROMISE
database.ref('location/city').set('Imphal')
    .then(() => {
        console.log('DATA: SAVED');
    })
    .catch((e) => {
        console.log("DATABSE ERROR : EXPENSIFY \n\n", e);
    });
```
``` javascript
//UPDATE MULTI WITH SPECIFIC PART
database.ref().update({
    job: 'Manager',
    'location/city': 'Boston'
});
```


### 1.6 Remove Data
``` javascript
//REMOVE ALL DATA
database.ref().remove()
    .then(() => {
        console.log(' DATA : WIPED COMPLETED');
    });
```
``` javascript 
//REMOVE SPECIFIC DATA
database.ref('isSingle').set(null)
    .then(() => {
        console.log(' DATA : REMOVE COMPLETED');
    });
```
``` javascript
//REMOVE SPECIFIC DATA PART
database.ref('location/city').set(null)
```

### 1.7 Fetch Data
``` javascript
//FETCH ALL DATA
database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log("Error :", e);
    });
```
``` javascript 
//FETCH SPECFIC DATA
database.ref(location/city)
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log("Error :", e);
    });
```


### 1.8 Subscriptions

``` javascript
//SUBSCRIBE
database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});
```
``` javascript
//UNSUBSCRIBE
database.ref().off()
```
```javascript 
//UNSUBSCRIBE
const onValueChange = (snapshot) => {
    console.log(snapshot.val());
}
database.ref().on('value', onValueChange);

setTimeout(() => {
    database.ref('age').set(20)
}, 3000);
setTimeout(() => {
    database.ref('age').set(30)
}, 5000);

setTimeout(() => {
    database.ref().off(onValueChange)
}, 6000);

setTimeout(() => {
    database.ref('age').set(50)
}, 7000);
```

EXAMPLE :
``` javascript
//SUBSCRIBE EXAMPLE
database.ref().on('value', (snapshot) => {
    console.log(`${snapshot.val().name} is a ${snapshot.val().job}`)
});
```

## 1.9 Array in Firebase

* ADD TO ARRAY TYPE USING PUSH
* UNIQUE ID S CREATED AS INDEX

``` javascript
var note = {
    description: "",
    note: "",
    amount: '1500',
    createdAt: '97533555'
}

OR

Database.ref().push({
    description: "",
    note: "",
    amount: '1500',
    createdAt: '97533555'
});

Database.ref().push(note);
```
``` javascript
//UPDATE ARRAY
database.ref('Notes/-LyyvvbgL0Zl_8QvgnpM').update({
    amount:9999
});
```

``` javascript
//FIREBASE TO JS ARRAY
database.ref('expense').once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log('\n\n\n\n', expenses);
    });
```
## 1.10 Subscription Functions

### 1. Child Remove
```
database.ref('expense').on('child_removed', (snapshot) => {
    console.log('REMOVED :', snapshot.val());
});
```
### 2. Child Change
```
database.ref('expense').on('child_changed', (snapshot) => {
    console.log('CHANGED :', snapshot.val());
});
```

### 3. Child Added
```
database.ref('expense').on('child_added', (snapshot) => {
    console.log('CHANGED :', snapshot.val());
});
```


## 2. Redux & Firebase

* Redux-thunk
### 1. Add thunk Middleware
``` javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
```

### 2. Dispatch using Firebase
``` javascript
import database from '../firebase/firebase';
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData) => {
    return (dispatch) => {
        const {
            description = '',
            amount = 0,
            note = '',
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));

            });
    };
};
```

### 3. Firebase Authentication
``` javascript
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default }
```

1. LOGIN :
``` ACTION```
``` javascript
import { firebase, googleAuthProvider } from '../firebase/firebase';
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};
```
``` LOGIN-PAGE```
``` javascript
//LOGIN PAGE
import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
        <button
            onClick={startLogin}>
            Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
```

``INDEX``
``` javascript
import { firebase } from './firebase/firebase';
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('LOGIN ');
    } else {
        console.log("LOG OUT");
    }
});
```

``LOGOUT``
``` javascript
import { startLogout } from '../actions/auth';
export const Header = ({ startLogout }) => (
    <header>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
```

`HISTORY` 

```Npm install history --save```
``` javascript
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
            </Switch>
        </div>
    </Router >
);
```

``INDEX``
``` javascript
import AppRouter,{ history } from './routers/AppRouter';

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("root"));
        hasRendered = true;
    }
}
```

``FIREBASE``
``` javascript
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('SESSION : LOGIN');
        console.log('USER ID:', user.uid);

        store.dispatch(startSetExpense())
            .then(() => {
                renderApp();
                //ReactDOM.render(jsx, document.getElementById("root"));

                //REDIRECT TO DASHBOARD IF LOGIN
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                }
            });
    } else {
        console.log('SESSION : LOGOUT');
        renderApp();
        //ReactDOM.render(jsx, document.getElementById("root"));
        history.push('/');
    }
});
```




## 3. Reducer Authentication

AUTHENTICATION REDUCER
``` javascript
//AUTH REDURCER
export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }

}
```

STORE REDUCER
``` javascript 
//STORE REDUCER 
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
```
INDEX
``` javascript 
//INDEX
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('SESSION : LOGIN');
        console.log('USER ID:', user.uid);

        //STORE THE UID IN REDUCER
        store.dispatch(login(user.uid));

        store.dispatch(startSetExpense())
            .then(() => {
                renderApp();
                //ReactDOM.render(jsx, document.getElementById("root"));

                //REDIRECT TO DASHBOARD IF LOGIN
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                }
            });
    } else {
        console.log('SESSION : LOGOUT');
        store.dispatch(logout());
        renderApp();
        //ReactDOM.render(jsx, document.getElementById("root"));
        history.push('/');
    }
});
```

## 4. Private Route

ROUTER
``` javascript
//ROUTER
import PrivateRoute from './PrivateRoute';
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <PrivateRoute path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router >
);

export default AppRouter;
```

PRIVATE ROUTE
``` javascript
//PRIVATE ROUTE
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (<Route {...rest} component={(props) => (
    isAuthenticated ? (
        <div>
            <Header />
            <Component {...props} />
        </div>
    )
        :
        (<Redirect to="/" />)
)} />

    );


const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
```