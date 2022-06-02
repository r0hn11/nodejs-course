<!-- About NodeJS -->
- Environment to run JS outside browser
- Built on Chrome's V8 JS engine
- Big community
- Full-stack

<!-- Pre-requisites -->
- HTML, CSS, JS, ES6
- Callbacks, promise, Async-Await

------------------------------------------------------

<!-- Outline : -->
- Intro
- Install
- Node fundamentals
- Express
- Building apps

<!-- Difference between browser JS environment & NodeJS environment -->
- DOM   /  No Dom
- Window    /  No window
- Interactive Apps  /  Server side Apps
- No filesystem    /    Filesystem  
- Fragmentation    /    Versions
- ES6 Moduels   /   CommonJS

<!-- Globals -->
- Can be used throughtout all the files irrespective of complexity of project

<!-- Modules -->
- CommonJS, every file is a module (by default)
- Modules are encapsulated code (only share minimum and required)
- Built-in modules :
    ~ OS
    ~ PATH
    ~ FS
    ~ HTTP

<!-- NPM -->
//npmjs.com
- get pre-built packages
- command:
    ~ checking the version : npm --v
    ~ local dependancy install : npm i <packagename>
    ~ global dependancy install : npm install -g <packagename>
- package.json : manifest file with info about project/package
    ~ manually create in root directory, create properties etc OR
    ~ command : npm init
    ~ command : npm init -y (everything default)