# Week 1

### What is a Node js ?

- Node.js is an open-source, cross-platform runtime environment that executes JavaScript code outside of the browser.
- Some powerful applications that are built with Node.js are
  - Paypal
  - Netflix
  - Uber
  - Ebay
  - Linkdin
- It is an open source, server-side platform built on google Chrome's V8 engine for developing fast and scalable network applications.
- It is a way to run Javascript on the v8 engine outside the browser.
- It is written in Javascript and can be run within the Node.js runtime on any OS.
- It also provides a rich library of modules that simplifies the development of web applications.
-  
    ```Node.js = Runtime Environment + JavaScript Library```
- The Chrome browser uses the v8 engine to run the JavaScript code in the browser, same as Node does.
- When running JavaScript, both provide bindings through C++ Code.
- In the browser, the v8 engine works inside the DOM context of the browser.
- v8 does'not know a file system or a DOM; this is provided by Chrome or Node.
- Node js is asynchronous and can handle multiple requests from clients and processs them efficiently on the server.

### Features Of Node.js

- #### Asynchronous

  - All API's Of Node.js libraries are asynchronous, that is non-blocking.
  - It means that Node.js server never waits for api to return data. It moves to other api after calling it.

- #### Very Fast

  - Node.js executes code faster since it is built on the v8 engine.

- #### Single Threaded

  - Node.js uses a single-threaded model with event looping.
  - There is only one thread of execution at any given time.

- #### No Buffering

  - Node.js applications do not buffer data.

- #### Event Driven

  - The notification mechanism of the events of Node.js helps the server to get a response from the previous API call.

### How Does Event Loop Work?

- An event loop is an entity responsible for executing callback functions in response to events.
- Events could be I/O events (file read operations, network connections) or timers.
- Callback function is a piece of code which gets executed when an event occurs.
- **Event Loop** keeps track of all the pending callbacks using a queue called the `Call Stack`.
- If there are no more items in the `Call Stack`, then it will look into the `Task Queue` and execute them.
- Once the task from Task Queue is done, it again looks into the `Call Stack` if there are any tasks left.

### Node.js Components

- #### Node CLI

  - Node.js comes with a variety of CLI options to run commands and script files.
  - These options expose built-in debugging multiple ways to execute scripts, and other helpful runtime options.

- #### NPM

- NPM stands for Node Package Manager.
- It is used to install, update, uninstall, and configure Node.js modules or packages very easily.
- You can say that it is a ```Google PlayStore``` of packages  for Node.js.

- #### package.json

  - ```package.json``` is a plain text file in JSON format.
  - It's the file that records important metadata about a project and defines information such as the application name, module dependencies, and the module version.
  - This file contains information about your module such as name, version, main module, dependencies etc.

- #### Node Modules

  - They include core modules such as http, url, querying, and fs, as well as third-party modules such as mongoose and MongoDB, which are required for application development.
