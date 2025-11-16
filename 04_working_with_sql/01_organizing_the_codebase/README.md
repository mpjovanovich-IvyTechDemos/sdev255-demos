# Organizing the codebase

Now that our applications are getting more complex, we need to do more than cram all of the code into one file.

Instead we should encapsulate related functionality into separate files and import them where they are needed.

## What to look for

### Side note: CommonJS vs ES Modules

**CommonJS** is the older way to import and export modules in JavaScript. It is the default module system in Node.js if you don't specify otherwise in the `package.json` file. If you see code using `require` and `module.exports` it is using CommonJS:

```js
const sqlite3 = require("sqlite3");
```

ES Modules is the newer way to import and export modules in JavaScript. We enable it by setting the `type` field in the `package.json` file to `module`:

_package.json_

```json
{
  "type": "module"
}
```

After that we can use the `import` keyword to import the module into our file:

```js
import sqlite3 from "sqlite3";
```

### Creating a custom module

Creating a custom module is a simple as creating a new file and exporting the functionality we want to use in other files. We do this with the `export` keyword:

```js
export SOME_CONSTANT = "some value";

export function someFunction() {
    console.log("I am a function in a module");
}
```

Then we can import and use the module in other files:

```js
import { SOME_CONSTANT, someFunction } from "./module.js";

console.log(SOME_CONSTANT);
someFunction();
```

### Restructuring our application

Let's review the changes we made since the previous version of the application:

#### Application code moved to `src` directory

Placing application code in the `src` directory is a Node.js convention. The package.json goes in the root directory. Now that we have multiple files we should start following this convention.

In this case we also have a `data` directory that contains the database file and the SQL script to initialize the database.

#### New `db.js` file

Everything that has to do with creating and initializing the database goes in this file. This keeps it out of the main application file.

#### Cleaner `app.js` file

The `app.js` file focuses only on initializing and starting the application.

## Try it

Try installing the project dependencies and running the application.

In order to see the data you will need to install an extension in VS Code or an application like DB Browser for SQLite.
