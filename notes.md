<!-- Course Outline : -->
- Node fundamentals
- Express.js
- MongoDB, Mongoose
- Applications
- Deployment

------------------------------------------------------
------------------------------------------------------

<!-- LABELING: -->
1. Globals
2. Modules
3. In-built modules
7. NPM
8. Event loops, async-await, promises, node natives
9. Node.js Events
10. Streams


<!-- About NodeJS -->
- Environment to run JS outside browser
- Built on Chrome's V8 JS engine
- Big community
- Full-stack

<!-- Pre-requisites -->
- HTML, CSS, JS, ES6
- Callbacks, promise, Async-Await

------------------------------------------------------
------------------------------------------------------

<!-- Outline : -->
- Intro
- Install
- Node fundamentals
- Express
- Building apps

<!-- Difference between browser JS environment & NodeJS environment -->
<!-- browser  / Node.js -->
- DOM   /  No Dom
- Window    /  No window
- Interactive Apps  /  Server side Apps
- No filesystem    /    Filesystem  
- Fragmentation    /    Versions
- ES6 Moduels   /   CommonJS

<!-- Globals -->
- Can be used throughtout all the files irrespective of complexity of project
- There is no window object and it's methods since there is no browser

<!-- Modules -->
- CommonJS, every file is a module (by default)
- ES6, modeule has extension .mjs instead of js
- To use es6 import , add "type":"module" in package.json
  to use CommonJS import, remove same from package.json
- Modules are encapsulated code (only share minimum and required)
- Built-in modules :
    ~ OS
    ~ PATH
    ~ FS
    ~ HTTP

------------------------------------------------------
------------------------------------------------------

<!-- NPM -->
//npmjs.com
- get pre-built packages
- checking the version : npm --v
- Install :
    ~ check installed packages with versions : `npm ls , npm list`
    ~ check installed version of a package : `npm ls <packagename>`
    ~ local dependancy install : `npm i <packagename>`
    ~ global dependancy install : `npm install -g <packagename>`
    ~ version install : `npm i <package-name>@<version-number>`
    ~ install as devdependacy : `npm i -D <packagename>`
    ~ latest version check : `npm view <packagename> version`
    ~ available versions check : `npm view <packagename> versions`
    ~ prefix ^ -  specify to install latest minor
      prefix ~ -  specify to install latest patch
- package.json : manifest file with info about project/package
    ~ manually create in root directory, create properties etc OR
    ~ command : `npm init`
    ~ command : `npm init -y` (everything default, can be edited later)
    ~ dev dependencies are installed for local usage, for deployed apps, they are not considered. e.g. nodemon
    ~ scripts can be manipulated to add custom script options. Some commands require `npm run nameOfCommand`.
    - for more information about package.json : https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/
- package-lock.json :
    ~ a json containing information about dependencies of all dependencies in package.json
- NODEMON :
    ~ `npm i nodemon -D` OR `npm i nodemon --save-dev`
    ~ Use it as a dev dependancy for local projects only, use something serious than nodemon while deploying the app
- npm start :
    ~ add "start":"node app.js" to "scripts" in package.json
    ~ use `npm start` to run this script
    ~ use  `npm run commandName` to run any other script (e.g. `npm run clap`)
- Unistall :
    ~ `npm unistall packageName`
    ~ `npm unistall packageName -g` if package is installed globally OR
    ~ delete node_modules folder, delete package-lock.json, delete packageName from package.json and run 'npm install'
- Version formatting :
    ~ e.g. v.m.p
      v - version
      m - minor
      p - patch

------------------------------------------------------

<!-- Event Loop -->
- Way to offload time consuming tasks
- e.g. thousand console logs are executed first before a callback function is executed regardless of time and the number of line it is written on.

<!-- Promises and async await -->
- promises hold back a functionality that is dependant on previous task. once that promise is resolved or rejected, rest of code in that function will act accordingly
- async await is more effective way to do same functioning as promises
  an async function will run the code inside, once it reaches the await statement, it checks if it is executable, if yes then execute and proceed next otherwise exit function, keep it waiting till rest of code is executed and then come back to it.
- 'util' provides the easier syntax to do the same


<!-- Events -->
- Event-driven programming
- used heavily in node.js
- to use events, we need to include 'events' module in our file which is basically a class
  we can add custom events to this by extending the existing class e.g. CustomEmitter extends EventEmitter{}
  to use the methods, initialize an instance of the class and access methods
  ~ 'on' method : arguments = nameOfEvent, callbackFunction
  ~ 'emit' method : arguments = nameOfEvent, arguments for callbackFunction
- we can use same event multiple times unlike gui events, the result will be shown according to the emit() method (check corresponding file)
- we can find default events in node.js' documentation

<!-- Streams -->
- Streams are useful to handle continuous data e.g. continuously changing files or big files
- available streams :
  ~ writeable : write data sequentially
  ~ readable : read data sequentially
  ~ duplex : read and write data sequentially
  ~ transform : for data modification
- readStream :
  Sending a huge amount of data using readFile is not valid