# Demos

## Table of Contents

- Express Basics
  - [Node Express App Basics](00_basic_express/00_node_express_app/README.md)
  - [Returning the Server Time](00_basic_express/01_datetime_message_basic/README.md)
  - [Returning HTML Content](00_basic_express/02_datetime_message_html/README.md)
  - [Datetime Message HTML Template](00_basic_express/03_datetime_message_html_template/README.md)
- Serving Static Content
  - [Node Site Structure](01_static_content/00_node_site_structure/README.md)
  - [Static Site](01_static_content/01_static_site/README.md)
  - [Middleware Demo](01_static_content/02_middleware_demo/README.md)
- Serving Dynamic Content
  - [Using Query Strings](02_dynamic_content/00_using_query_strings/README.md)
  - [Text Printer](02_dynamic_content/01_text_printer/README.md)
  - [List Filter](02_dynamic_content/02_list_filter/README.md)
- RESTful Endpoints
  - [Post with HTML Response](03_restful_endpoints/post_with_html_response/README.md)

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
