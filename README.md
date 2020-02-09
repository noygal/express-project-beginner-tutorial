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
