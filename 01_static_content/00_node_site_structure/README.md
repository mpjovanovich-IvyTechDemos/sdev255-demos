# Node Site Structure

This project is meant to demonstrate the basic structure of a Node.js application. The focus is on the file system structure rather than the application logic.

## What to look for

### Root Directory

The root directory is the starting point for the project. It typically contains project configuration files that do not contain program logic.

As an example, you will almost always see see a `.gitignore` file. This defines which files should not go into the Git repository. When you look at your repository on github you will see that the `node_modules` directory is not included. That's because it is in the `.gitignore` file.

Application code usually goes in a subdirectory under the root. You may see this called `src`, `app`, `lib`, or `server`.

To keep things simple for this course we will put our application logic directly in the project root.

### package.json

Every Node.js project must have a package.json file. This file tells Node things like:

- Which is the starting file for the program?
- What should the package (program) that we wrote be named?
- What other packages does our program use?

When you run the `npm install` command form a directory that contains a package.json file it uses this file to figure out what packages and third-party libraries need to be installed. These are called **dependencies**.

Installed dependencies go in a node_modules directory. This should always be ignored in the .gitignore file.

The install command also creates a `package-lock.json` file. This is used to track the
specific versions of each package that are used in the project. Packages are frequently updated, so keeping track of version information helps ensure that the project will continue to work as expected. For example - there may be a new version of Express that gets pushed out next week, but we don't want our application to use it until we're ready. The `package-lock.json` file will keep us "locked into" the current version of Express.

### Public Directory

The public directory contains static assets (files) that will be served by the web server: the html pages, css, and javascript files that are returned to the client.

### Other Directories

As projects get more complex, you will see many other subdirectories that help keep the project organized. These may contain helper functions, configuration files, or class files to model the data for the application.

## Try it

Try installing the project dependencies and running the application.
