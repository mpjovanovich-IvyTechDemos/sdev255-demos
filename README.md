# Running a Node.js Express Application

## Setup

1. From the terminal use the `cd` command to navigate to the directory of the application you want to run. This is the directory that contains the `package.json` file.
1. Run the `npm install` command to install dependencies. This must be done before you can run the application.

## Running and Debugging

You can run the project using:

### VS Code Debugger

- Click Run and Debug or press `F5`.
- You can hit breakpoints and step through code
- You will need to stop and restart the server anytime you make changes
- Good for server-side development

### Nodemon

- From the terminal make sure you are in the `server` directory, then run the `npm run dev` command.
- You can refresh pages and it will pick up saved changes.
- It will not hit any debugging breakpoints.
- Good for rapid UI development.
