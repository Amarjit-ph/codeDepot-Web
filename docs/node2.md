---
id: node2
title: MongoDB
sidebar_label: Node & Mongo
---
## 1. Mongo Database 

MONGO DATABASE USING MONGOOSE

Every Access of database require three steps :
1. Schema 
2. Model
3. Access Method

DATABASE CONNECTION

```
mongoose.connect(“process.env.DATABASEURL”,{useNewUrlParser:true});
```

SCHEMA
It is about defining a pattern of the data and more pattern can also be added.

``` js
var catSchema = new mongoose.Schema(
{		
	Name:String,
	Age:Number,
});
```

MODEL

The Schema is complied into a model and all the method can be used to on model to access the database with those methods.

`Var cat=moongose.model(“Cat”.catSchema);`

ACCESS METHODS

1. Create 
2. FindOne
3. FindAll

``` js
Cat.create(
{
	Name: “Garfield’,
	Age:12
},function(err,cat){

	if(err){ console.log(err); }
		else{ conolse.log(cat);
		}
});
```

#### CREATE AND RETRIVE DATA FROM DATABASE

CREATING DATA TO DATABASE

1. USING SAVE
``` js
Var geroge = new Cat({
	Name:”Georage”,
	Age:12
});

geroge.save(function(err,cat)
{   if(err){ console.log(err);  }
else { console.log(“ SAVED : “,cat);
}
});
```

2. USING CREATE
```js
Cat.create({ Name:”Georage”, Age:12 },function(err,cat)
{   if(err){ console.log(err);  }
else { console.log(“ SAVED : “,cat);
}
});
```

#### RETRIVING DATA FROM DATABASE

1. USING FIND [RETIVING ALL THE DATA]

``` js
Cat.find({},function(err,cats){
If(err){ console.log(err);}
Else{console.log(cats);
});
```

2. FINDONE [RETRIVING ONE SPECIFIC DATA]
```js
Cat.findOne({name:Gerogre},function(err,cats){
If(err){ console.log(err);}
Else{console.log(cats);
});
```

## 2. Restful Routing

REST : Representational State Transfer 

It is a way of Mapping HTTP verbs (Get,Post,Put,Delete) and CURD actions
(Create,Read,Update,Delete) together.

CURD
- C : CREATE
- U : UPDATE
- R : READ
- D : DESTORY

There are 7 different RestFull Routes pattern to follow when creating an application or web service that interact with server.

 |     NAME       |     PATH              |     HTTP VERB    |
|----------------|-----------------------|------------------|
|     Index      |     /blog             |     GET          |
|     New        |     /blog/new         |     GET          |
|     Create     |     /blog             |     POST         |
|     Show       |     /blog/:id         |     GET          |
|     Edit       |     /blog/:id/edit    |     GET          |
|     Update     |     /blog/:id         |     PUT          |
|     Destroy    |     /blog/:id         |     DELETE       |

## 3. Protection from Scripts

PROTECTION FROM SCRIPTS USING SANITIZER

```js
var expressSanitize = require(“express-sanitizer”);
-----  AFTER BODY PARSER  -----
app.use(expressSanitizer());
```

SANITIZING THE DATA FROM HTML FORM

``` js
Req.body.blog = req.sanitize(req.body.blog);
```
Removing the Unwanted tags and scripts from the HTML form input that is send to the server.


## 4. Association of Data

Relation that exist between the data which are associated with some specific attributes

TYPES OF RELATION
1. One to One
2. One to Many
3. Many to Many	

METHODS OF ACHIEVING ASSOCIATION:
1. Embedding Data
2. Referencing Data

SCHEMA & MODEL EXAMPLE FOR IMPLEMENTATION

1. USER SCHEMA & MODEL
```js
var userSchema = new mongoose.Schema({ 
email:String,
name:String    });
var User = mongoose.model(“User”,userSchema);
```
2. POST SCHEMA & MODEL
```js
var postSchema = new mongoose.Schema({
title:String,
content:String  });
var Post = mongoose.model(“Post”,postSchema);
```

### 1. Embedding Data
```js
var postSchema = new mongoose.Schema({
		title:String,
	    content:String  });
var Post = mongoose.model(“Post”,postSchema);

var userSchema = new mongoose.Schema({
email:String,
name:String
posts:[postSchema] });
var User = mongoose.model(“User”,usersSchema);
```

CREATING A USER AND A POST 

1. CREATE USER
```js
Var newUser = new User ({
Email:hero@gmail.com,
name:Hermoine   });
```

2. CREATE POST AND PUSH TO USER
```js
newUser.posts.push({
title:”How to Aspectro Pratonum”,
content:”Remove wand and say partromun” });
```
3. SAVE THE USER
```js
newUser.save(function(err,user){
  if(err){ Console.log(err);}
else{ Console.log(user);}
```
FIND THE USER AND PUSHING THE POST
```js
User.findOne({name:Hermoine},function(err,userDB){
If(err){console.log(err); }
Else{
	userDB.posts.push({
			title:”How to Aspectro Pratonum”,
content:”Remove wand and say partromun” });
           User.save(function(err,userDB2){
		If(err){console.log(err);
			Else{ console.log(userDB2);
		});
     } 	//Closing Else
});	    //Closing FindOne();
```

### 2. Referencing Data

POST SCHEMA & MODEL
```js
var postSchema = new mongoose.Schema({
title:String,
content:String  });
var Post = mongoose.model(“Post”,postSchema);

USER SCHEMA AND MODEL [ REFERENCING DATA]
var userSchema = new mongooseSchema ({
email:String,
name:String,
posts: [   
		{ type:mongoose.Schema.Types.ObjectId,
		   ref:”Post” }
]          });
var User = mongoose.model(“User”,userSchmea);
```
CREATING POST AND REFERENCING TO USER
```js
Post.create({
Title:”How to Cook”,
Content:” XYZ” },function(err,post){
	User.findOne({email:bob@gmail.com”},
		Function(err,foundUser){
	If(err){console.log(err); }
	Else{ 	foundUser.posts.push(post);	
		foundUser.save(function(err,data){
			if(err) {console.log(err); }
			   else{console.log(data);
			}
	});
});
```

FIND USER AND POPULATING THE POST
```js 
User.findOne({email:bob@gmail.com}).populate(“posts).exec(function
(err,user){  if(err){console.log(err); }
else(err){ console.log(user); }
});
```

All the data which are reference will be populated and available on user.

ASSOCIATING A USERNAME WITH COMMENT

```js
var commentSchema = mongoose.Schema({
text:String,
author:{
	id: { type:mongoose.Schema.Types.ObjectId,
	         ref:”User”
	      },
	Username:String

}
});
```

CODE OF CREATING THE COMMENT

``` js
//ADD USERNAME AND ID
Comment.author.id = req.user._id;
Comment.author.username= req.user.username;

//SAVE
Comment.save();
Campground.Comments.push(Comment);
Campground.save();
```
REDIRECT TO CAMPGROUND SHOW PAGE

## 5. Module Exports

This function will clean and dry up the code 
Make more modular and organized

PROS & CONS

Making the code reusable
Required more often than the single File.

EXPORTING

`Module.export= ANYTHING WE WANT TO EXPORT`

IMPORTING

`var anything = require(“./models/post”);`

MULTIPLE EXPORT / MIDDLE WARE REFACTORING

```
middlewareObj.checkCommentOwnership = function(req,res,next){
_____________FUNCTION DEFENTION_______________
}

middlewareObj.IsloggedIn = function(req,res,next){
_____________FUNCTION DEFENTION_______________
}
module.export= middlewareObj
```

IMPORTING:
```js
var middleware = require(“./models/middlewareObj”);
middleware.isLoggedIn
middleware.checkCommentOwnership
```















