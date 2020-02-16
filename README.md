# express-project-beginner-tutorial

Step by step beginner tutorial for express project.

---

## Setting up repository #step-1

[View](https://github.com/noygal/nodejs-npm-beginner-tutorial/tree/step/1)

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

---

## Setting express server #step-2

[View](https://github.com/noygal/nodejs-npm-beginner-tutorial/tree/step/2)
[Compare](https://github.com/noygal/nodejs-npm-beginner-tutorial/compare/step/1...step/2)

- ### Installing dependencies

  ```bash
  npm i express
  ```

- ### Adding sever with health check

 See: `src/server/server.js`

---

## Setting client project #step-3

[View](https://github.com/noygal/nodejs-npm-beginner-tutorial/tree/step/3)
[Compare](https://github.com/noygal/nodejs-npm-beginner-tutorial/compare/step/2...step/3)

- ### Client dependencies

  ```bash
  npm i react react-dom parcel-bundler
  ```

- ### Creating hello world react app

 See: `src/client` folder.

- ### Bundle client application

  We have multiple ways to approach this problem, we went with [Parcel](https://parceljs.org/getting_started.html) - a simple zero config bundler, the more common (and complex) solution is webpack.

  See `package.json` for added scripts.

---

## ESLint - more than a linter #step-4

  [View](https://github.com/noygal/nodejs-npm-beginner-tutorial/tree/step/4)
  [Compare](https://github.com/noygal/nodejs-npm-beginner-tutorial/compare/step/3...step/4)

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

---

## Testing #step-5

[View](https://github.com/noygal/nodejs-npm-beginner-tutorial/tree/step/5)
[Compare](https://github.com/noygal/nodejs-npm-beginner-tutorial/compare/step/4...step/5)

- ### Testing dependencies

  ```bash
  npm install faucet tape node-fetch --save-dev
  ```

- ### Code changes

  Exporting server for closing the http listener on test end.

---

## Nodemon #step-6

[View](https://github.com/noygal/nodejs-npm-beginner-tutorial/tree/step/6)
[Compare](https://github.com/noygal/nodejs-npm-beginner-tutorial/compare/step/5...step/6)

[nodemon](https://github.com/remy/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
  
- ### Nodemon dependencies

  ```bash
  npm install nodemon --save-dev
  ```

---

## RESTFul API #step-7

[View](https://github.com/noygal/nodejs-npm-beginner-tutorial/tree/step/7)
[Compare](https://github.com/noygal/nodejs-npm-beginner-tutorial/compare/step/6...step/7)

- ### Get tasks list

- ### Create task

---

## RESTFul API - continue #step-8

[View](https://github.com/noygal/nodejs-npm-beginner-tutorial/tree/step/8)
[Compare](https://github.com/noygal/nodejs-npm-beginner-tutorial/compare/step/7...step/8)

- ### Router params

- ### Get task

- ### Update task

- ### Delete task

---

## Authentication #step-9

[View](https://github.com/noygal/nodejs-npm-beginner-tutorial/tree/step/9)
[Compare](https://github.com/noygal/nodejs-npm-beginner-tutorial/compare/step/8...step/9)

- ### Passport.js dependencies

  We will use [Passport.js](http://www.passportjs.org/) for using `github` as authentication provider.

  ```bash
  npm install passport passport-github express-session
  ```

- ### Environment variable

  ```bash
  # For running with authentication
  GITHUB_CLIENT_ID=<your-client-id> GITHUB_CLIENT_SECRET=<your-client-secret> npm run watch:server
  ```

  To create you client id/secret pair follow this [guide](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) to create `github` oauth app, you will find the id/secret on the app page.

  NOTE: it is highly advise never to never commit secrets to your repository.

- ### Added session storage
