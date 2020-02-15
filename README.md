# express-project-beginner-tutorial

Step by step beginner tutorial for express project.

## Setting up repository #step-1

- ### Git repo initialization

  ```bash
  git init
  # or
  # git clone <git repository url>
  ```

- ### Adding git ignore file

  [gitignore.io](http://gitignore.io/) is a great tool to generate custom `.gitignore` files that follows the community best practices.

  Just select your OS, IDE and language (or combination of those) and save the output as your `.gitignore` file.

  ```bash
  npx gitignore-dot-io node macos visualstudiocode
  # or use http://gitignore.io/ to create the file
  ```

- ### npm initiation

  ```bash
  npm init
  # or 'npm init -y' for skipping interactive init (replay yes to all)
  ```

## Setting express server #step-2

- ### Installing dependencies

  ```bash
  npm i express
  ```

- ### Adding sever with health check

 See: `src/server/server.js`

## Setting client project #step-3

- ### Client dependencies

  ```bash
  npm i react react-dom parcel-bundler
  ```

- ### Creating hello world react app

 See: `src/client` folder.

- ### Bundle client application

  We have multiple ways to approach this problem, we went with [Parcel](https://parceljs.org/getting_started.html) - a simple zero config bundler, the more common (and complex) solution is webpack.

  See `package.json` for added scripts.

## ESLint - more than a linter #step-4

  [ESLint](https://eslint.org/docs/user-guide/getting-started) is highly recommend on every JavaScript project we will add it to our project as a development dependency.

  ```bash
  npm install eslint --save-dev
  ```

- ### Server side linting

  ```bash
  cd src/server/
  npx eslint --init
  ##### Those are the answers given in this tutorial
  # ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
  # ? What type of modules does your project use? CommonJS (require/exports)
  # ? Which framework does your project use? None of these
  # ? Does your project use TypeScript? No
  # ? Where does your code run? Node
  # ? How would you like to define a style for your project? Use a popular style guide
  # ? Which style guide do you want to follow? Standard: https://github.com/standard/standard
  # ? What format do you want your config file to be in? JavaScript
  ```
  
- ### Client side linting

  ```bash
  cd src/client/
  npx eslint --init
  ##### Those are the answers given in this tutorial
  # ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
  # ? What type of modules does your project use? JavaScript modules (import/export)
  # ? Which framework does your project use? React
  # ? Does your project use TypeScript? No
  # ? Where does your code run? Browser
  # ? How would you like to define a style for your project? Use a popular style guide
  # ? Which style guide do you want to follow? Standard: https://github.com/standard/standard
  # ? What format do you want your config file to be in? JavaScript
  ```

## Testing #step-5

- ### Testing dependencies

  ```bash
  npm install faucet tape node-fetch --save-dev
  ```

- ### Code changes

  Exporting server for closing the http listener on test end.

## Nodemon #step-6

[nodemon](https://github.com/remy/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
  
- ### Nodemon dependencies

  ```bash
  npm install nodemon --save-dev
  ```

## RESTFul API #step-7

- ### Get tasks list

- ### Create task

## RESTFul API - continue #step-8

- ### Router params

- ### Get task

- ### Update task

- ### Delete task
