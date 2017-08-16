var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
  title:"Article One"  ,
  heading :"Aricle one page",
  date: "14 August",
  content :
  `
        <p>
            This is a new article about longitudes and latitudes.This is a new article about longitudes and latitudes.This is a new article about longitudes and latitudes.This is a new article about longitudes and latitudes.
        </p>
        <p>
            This is a new article about longitudes and latitudes.This is a new article about longitudes and latitudes.This is a new article about longitudes and latitudes.This is a new article about longitudes and latitudes.
        </p>

    `
};

function createTemplate(data){

var title = data.title;
var date = data.date;
var content = data.content;

var htmlTemplate = 
    `
    <html>
    <head>

        <link href="/ui/style.css" rel="stylesheet" />

    </head>

    <body>
        <a href="/">Home</a>
        <div class="center">

            <img src="/ui/madi.png" class="img-medium"/>

        </div>
        <h3>
        ${title}
        </h3>
        <div>
        ${date}
        </div>
        <div>
        ${content}
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
 // res.send('article one requested and will be displayed here');
  //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
   res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req, res) {
  res.send('article two requested and will be displayed here');
});

app.get('/article-three', function (req, res) {
  res.send('article three requested and will be displayed here');
});
var counter =0;
app.get('/counter', function (req, res) {
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
