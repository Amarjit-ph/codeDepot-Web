---
id: node1
title: Node.js
sidebar_label: Backend
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.

## 1. Introduction

- INTERNET BASICS
- STATIC VS DYNAMIC SITES
- STACKS / BACK END TECHNOLOGIES

### 1. Internet Basic

1. REQUEST A WEBSITE

`http://www.Facebook.com`

2. FIND THE RIGHT ADDRESS

Your query is submitted to you ISP (Internet Service Provider) Your ISP, The DNS takes the Domain name and turn it into IP Address

`http://www.Facebook.com` > `23.234.45.175`

3. GOING TO THE ADDRESS

A request is sent to the desired IP Address Via HTTP Request find the Fastest Path possible the server with Specified IP And return to user hoping from Server to Server.

4. SERVER RESPONDS

Server Figure out exactly what the server is asking for And Sever build the right content from pulling out form Database And Server Responds with the combinations of HTML , CSS and JAVASCRIPT Then Browser Render the Code.

### 2. Static VS Dynamic Sites

1. STATIC WEBSITE

This are the basic type of website that is easy to create, which doesn’t require knowledge of web programming and Database design to create a static website, Which are created in HTML, The codes are fixed for each page so the information contained in the page does not Change and it looks like a printed page.

2. DYNAMICS WEBSITE

This are collection of dynamic web pages whose content changes dynamically. It accesses content from a database or Content Management system (CMS). Therefore, When alter or update the content of the database, The content of the website is also altered or updated.

#### STACKS/BACK END TECHNOLOGIES

Technologies that are a particular web application used.

<img src={useBaseUrl('node/Generic.png')} />

#### [+] NODEJS BACK END TECHNOLOGIES

HTML-JAVASCRIPT-CSS-NODEJS-MONGO DB

<img src={useBaseUrl('node/Node.png')} />

### 3. Hyper text Transfer Protocol

http is the underlying protocol user by the World wide web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browser should take in response to various command. It is responsible for communication between client computer and web Servers by sending and receiving HTTP request and responds.

It is independent from Browser, request can be done form a console or anywhere.

1. HTTP VERBS

The HTTP verbs comprise a major portion of our “uniform interface” constraint and provide us the action counterpart to the noun-based resource. The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE.

- GET
- POST
- PUT
- DELETE
- PATCH

2. HTTP HEADERS

HTTP headers are the name or value pairs that are displayed in the request and response messages of message headers for Hypertext Transfer Protocol (HTTP). Usually, the header name and the value are separated by a single colon. HTTP headers are an integral part of HTTP requests and responses.

EXAMPLE :

```
HTTP/1.x 200 OK
Transfer-Encoding: chunked
Date: Sat, 28 Nov 2009 04:36:25 GMT
Server: LiteSpeed
Connection: close
X-Powered-By: W3 Total Cache/0.8
Pragma: public
Expires: Sat, 28 Nov 2009 05:36:25 GMT
Etag: "pub1259380237;gz"
Cache-Control: max-age=3600, public
Content-Type: text/html; charset=UTF-8
Last-Modified: Sat, 28 Nov 2009 03:50:37 GMT
X-Pingback: https://net.tutsplus.com/xmlrpc.php
Content-Encoding: gzip
Vary: Accept-Encoding, Cookie, User-Agent
```

### 4. Template

BACK END TEMPLATE [ SERVER FILE ] NODE JS

```js
# SETUP
var express = require (“express”);
var bodyParser = require(“body-parser”);
var mongoose = require(“mongoose”);

# INTIALIZATION
app = express();

# CONFIGURATION
app.set(‘view engine’,’ejs’);
app.use(bodyParser.urlencoded({extended:true});

# DATABASE CONNECTION
mongoose.connect(“mongodb://localhost/nameofapp”,
{useNewUrlParser:true});

# ROUTES
app.get(“/ ”,function(req,res){
res.render(“Index”);
});

# LOCAL HOST LISTEN
app.listen(8000,function(){ console.log( “ SERVER RUNNING “);
});

# CLOUD HOST LISTEN
app.listen(process.env.PORT,process.env.IP,function()
{ console.log(“SERVER RUNNING “);  });
```

SETUP DATABASE URL FROM ENVIRONMENT VARIABLE FROM THE CLOUD AND CONNECT DATABASE

```js
mongoose.connect(process.env.DATABASEURL, {useNewUrlParser: true});
```

## 2. Route Params

### 1. Variable Routes

Contains the information variable routes Use using `:id or :`

Route params are Access Using `[ Req.params.id ]`

EXAMPLE :

```javascript
app.get(“/r/ :id “, function (req,res){
console.log(req.params.id);
});

```

### 2. Rendering a template

EJS the Dynamic HTML Files which is JS are embedded By default they are stored at VIEWS folder

EXAMPLE

```javascript
app.get(“/r/ :id “, function (req,res){
res.render(“index.ejs”);
});
```

### 3. Passing Data to template

```javascript
app.get(“\”,function(req,res){
var Data = SOME DATA;
res.render(“index”,{DATA :Data });
});
```

Data is sender to the template as DATA from the `res.render` Function as the Second Argument.

To pass Multiple Data to template

```js
res.render(“index”,{DATA1 :Data1, DATA2 :Data2, DATA3 :Data3});
```

### 4. Serving Other Directories

SERVE PUBLIC ON EXPRESS:

```js
app.use(express.static(“public”));
```

This public directory or folder will be serve with express server

### 5. Header & Footer

Create the partials folder inside views folder and create the header and footer file. And Include them in Every EJS file.

ON EJS:

```js
<% include partials/header %>
-----------HTML BODY--------------
<% include partials/footer %>
```

### 6. Post Request to Server

To post some data to server or collect information form user via HTML form we use body parser to pass the data form HTML form to server.

#### ON EJS: [ EFFICIENT WAY WARPING DATA INTO OBJECT FORM ]

```html
<form action=”/route/” method=”POST”>
<input type=”text” name=”User[Name]”>
<input type=”text” name=”User[Address]”>
<button>SUBMIT</button>
</form>
```

#### DATA FROM HTML FORM

Data from the HTML form will be available on server at `[ req.body ]`.

#### ON SERVER CODE

```js
var bodyParser = require(“body-parser”);
app.use(bodyParser.urlencoded({extended:true});

app.post(“/route/”,function(req,res){
console.log(req.body.User); });
```

#### OUPUT ON CONSOLE

```
{
    Name: DATA,
	Address: DATA
}
```
