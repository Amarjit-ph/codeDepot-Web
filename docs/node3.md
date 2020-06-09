---
id: node3
title: Authentication
sidebar_label: Authentication
---

## 1. Authentication
It is the process of determining whether Someone or something, in fact,
Who or what it declared itself to be.
Users are Usually identify with User ID and authentication is accomplished when the user provides a credential.

CREDENTIAL

It is something that’s proof of a claim you make about yourself
Or your skills.

INTRODUCTION TO AUTHENTICATION

TOOLS USED:
- PASSPORT
- PASSPORT LOCAL
- PASSPORT LOCAL MONGOOSE

AUTHENTICATION REQUIREMENTS

- Express 
- Express-session
- Body-parser
- Mongoose
- Passport
- Passport-local
- Method- override
- Passport-local-mongoose
- Embedded Javascript 

USER SCHEMA
```js
Var userSchema = new mongoose.Schema({
Username:String,
Password:String    });

userSchema.plugin(passportLocalMongoose);
// Add all the methods required to perform authentication

module.export = mongoose.module(“User”,userSchema);
```

ON APPLICATION JS FILE [ SERVER FILE ]
```js
#SETUPS
#DATABASE

var app = express();
app.set(“view engine”,”ejs”);

// SETTING SESSION
app.use(require(“express-session”)({
	secret:”My name is Amarjit “,
	resave:false,
	SaveUnitialized:false
}));     				//Secret is used for encoding and decoding session

// SETTING PASSPORT
app.use(passport.intialized());
app.use(passport.session());

// SERIALIZE AND DESERIALIZE
passport.use(new LocalStrategy(user.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

Responsible for Reading the data from session and sending the data, Encoding 
And decoding of Data.

REGISTER USER WITH PASSWORD
```js
App.post(“/register”,function(req,res){
User.register(newUser({username:req.body.username}),
Req.body.password,function(err,user)
{	if(err) {console.log(err);  return res.render(“/register”); }
	passport.authenticate(“local”)(req,res,function()
		{ res.render(“/secret”); }
	});
     });
});
```
Password is passed as the second argument since it has to hash and salted
In database to store the password.
LOGIN ROUTES
APPILCATION GET FORM ROUTE
```js
app.post(“/login”,passport.authenticate(“local”,
{	SuccessRedirect:”/secret”,
	failure:”/login”
}),function(req,res){ });
```

Passport will automatically take req.body.password and username
From the request

LOGOUT ROUTE
```js
app.get(“/logout”,function(req,res){
	req.logout()l
	res.redirect(“/”);
});
```

## 2. Middleware
It is a function that sit between the route to check anything which function
Is define.

```js
Function isLoggedIn(req,res,next){
If(req.isAuthenticate()){
	Return next();
}
res.redirect(“/login”);
}
```

USING MIDDLE WARE
```js
App.get(“/Secret”,isLoggedIn,function(req,res){
	res.render(“secret”);
});
```

This means that the isLoggedIn function will be executed before executing the
The function(req,res) After isLoggedIn then it will be executed.
	 

## 3. Locals
MAKE DATA AVAILABLE IN EVERY ROUTE & TEMPLATE
[ INFORMATION OF CURRENT USER ]

Current User information is available at `[REQ.USER]`
```
App.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
});
```

The data for the current user will be available in every Route 
As currentUser in Routes and Templates.

## 4. Express Router

Make different Folder `[Routes]`

[ CAMPGROUND ]
``` js
var express = require(“express”);
var Router  = express.Router();

Router.get(“/”,function(req,res)
{  _______________});

Router.post(“/”,function(req,res)
{  _______________});

module.export = Router 
```
[ON APP.JS]
```js
var CampRoutes(“./routes/Campground”);
var IndexRoutes(“./routes/Index”);

app.use(CampRoutes);
app.use(IndexRoutes);
```


## 5. Comparing Two ID's Mongo

```js
If(Foundcampid.equals(req.user._id)){
Console.log(“EQUAL”);
Else{console.log(“NOT EQUAL”); }
```

Comparing the two Foundcampid and req.user._id with the method given by mongodb

## 6. Method Override

EDIT & UPDATE ROUTES
```js
var methodOverride = require(“method-override”);
app.use(methodOverride(“_method”));
```

EJS FORM:
``` html
<form action=”/blogs/<%=blog._id%>?_method=PUT” method=”POST>
```

APP.JS
```js
app.put(“/blogs/:id”,function(req,res){
Blog.findbyIdAndUpdatet(req.params.id,req.body.blog,function(err,foundBlog)
{  REDIRECT IF NO ERROR }
});
```

## 7. Flash Message

```js
var flash = require(“connect-flash”);
app.use(flash());
```

NORMAL FLASH
```js
req.flash(“error”,”PLEASE LOG IN”);
res.redirect(“/login”);

res.render(“login”,{message:req.flash(“error”);
```

FLASH EVERYROUTE
```js
app.use(function(req,res,next){
res.locals.error = req.flash(“error”);
res.locals.success = req.flash(“success’);
next();
});
```

AVAILABLE IN EVERY TEMPLATE
``` js
req.flash(“error”,”INVAILD PASSWORD”);
res.redirect(“/login”);
```
