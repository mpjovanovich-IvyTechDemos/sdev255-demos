# Connecting to SQLite

SQLite is a lightweight database engine that keeps a database in a single file. This makes it easy to deploy and use in a wide variety of applications.

## What to look for

### Setting file paths

#### Getting the current directory

There is a common pattern in Node.js applications to get the directory of the current file:

```js
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
```

#### Joining directories and file names

Any time that we need to join directories or file names we should use the `path` module instead of hardcoding path separators like `\`. We can simply comma separate the path segments:

```js
import path from "path";
const filePath = path.join(__dirname, "data", "example.txt");
```

Using the `path` module makes sure that paths work on all operating systems.

### Opening the database

The `sqlite3.Database` constructor takes a file path and opens the database file for read/write access. This will create the file if it does not exist:

```js
const db = new sqlite3.Database(DB_PATH);
```

After opening the database we can execute SQL statements. In this case we are executing the SQL from the `init.sql` file to create a table.

```js
db.exec(sql);
```

## Try it

Try installing the project dependencies and running the application.

In order to see the data you will need to install an extension in VS Code or an application like DB Browser for SQLite.
