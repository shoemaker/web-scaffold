# web-scaffold
Bare-bones and reusable starting point for new Node.js based web projects. 

## Getting Started 

    $> npm install 
    $> bower install 
    $> gulp develop 

Now open your browser to `http://localhost:3000`. 

## Web 

[Express](http://expressjs.com/) is used as the web framework. This project uses a typical MVC pattern. Views use the [EJS](https://github.com/visionmedia/ejs) templating engine. Until recently I preferred [hogan.js](http://twitter.github.io/hogan.js/) to render [mustache](http://mustache.github.io/) templates, but ran into too many problems with conflicting `{{ }}` syntax with [AngularJS](https://angularjs.org/). Using [LESS](http://lesscss.org/) to pre-process CSS. 

## Tasks 
Tasks are managed using [Gulp](http://gulpjs.com/). 

`$> gulp develop` Compiles and minifies LESS and JS, launches project using nodemon. Watches for file changes to restart the project.  
`$> gulp build` Build out just the files needed for deployment, copies to the `dist` folder.  
`$> gulp test` Run tests defined in the `test` folder.  

## Tests 

A few mock tests are defined in the `test` folder using [mocha](http://visionmedia.github.io/mocha/) and [expect.js](https://github.com/LearnBoost/expect.js).  
Two ways to kick off the tests:  

    $> gulp test 
    $> npm test 

