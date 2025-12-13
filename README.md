# SDEV 255 Demos

Each of the demos below is a standalone project that can be run independently.

This is best done by cloning the repository and then opening the demos in VS Code. Use the File > Open Folder command to open the demo that you are interested in.

## Table of Contents

- Express Basics
  - [Node Express App Basics](00_basic_express/00_node_express_app/)
  - [Returning the Server Time](00_basic_express/01_datetime_message_basic/)
  - [Returning HTML Content](00_basic_express/02_datetime_message_html/)
  - [Datetime Message HTML Template](00_basic_express/03_datetime_message_html_template/)
- Serving Static Content
  - [Node Site Structure](01_static_content/00_node_site_structure/)
  - [Static Site](01_static_content/01_static_site/)
  - [Middleware Demo](01_static_content/02_middleware_demo/)
- Serving Dynamic Content
  - [Using Query Strings](02_dynamic_content/00_using_query_strings/)
  - [Text Printer](02_dynamic_content/01_text_printer/)
  - [List Filter](02_dynamic_content/02_list_filter/)
- RESTful Endpoints
  - [Using HTTP POST](03_restful_endpoints/00_using_http_post/)
  - [Route Parameters](03_restful_endpoints/01_route_parameters/)
  - [CRUD API](03_restful_endpoints/02_crud_api/)
- Working with SQL
  - [Connecting to SQLite](04_working_with_sql/00_connecting_to_sqlite/)
  - [Organizing the Codebase](04_working_with_sql/01_organizing_the_codebase/)
  - [CRUD API with SQL](04_working_with_sql/02_crud_api_with_sql/)
  - [Parameterized Queries](04_working_with_sql/03_parameterized_queries/)
  - [Getting ID of Inserted Record](04_working_with_sql/04_getting_id_of_inserted_record/)
- Modular Web Components
  - [Templating Engines](05_modular_web_components/00_templating_engines/)
  - [Control Logic in HTML](05_modular_web_components/01_control_logic_in_html/)
  - [Working with Views](05_modular_web_components/02_working_with_views/)
- Client Side JavaScript
  - [Working with DOM](06_client_side_javascript/00_working_with_DOM/)
  - [Event Listeners](06_client_side_javascript/01_event_listeners/)
  - [Event Object](06_client_side_javascript/02_event_object/)
  - [Local Storage](06_client_side_javascript/03_localstorage/)
- Organizing Code With Classes
  - [Repository ORM Pattern: Starter](07_organizing_code_with_classes/00_repository_orm_starter/)
  - [Repository ORM Pattern: Refactor](07_organizing_code_with_classes/01_repository_orm_refactor/)
- Fetching Data from the Client
  - [Callback Functions](08_fetching_data_from_the_client/00_callback_functions/)
  - [Promises](08_fetching_data_from_the_client/01_promises/)
  - [Async/Await](08_fetching_data_from_the_client/02_async_await/)
  - [Client-Side Rendering](08_fetching_data_from_the_client/03_client_side_rendering/)
- Authentication
  - [Cookies](09_authentication/00_cookies/)
  - [Session Management](09_authentication/01_session_management/)
  - [Password Hashing](09_authentication/02_password_hashing/)
  - [Environment Configuration](09_authentication/03_environment_configuration/)
- Software Testing
  - [Unit Testing Basics](10_software_testing/00_unit_testing_basics/)
  - [Parameterized Testing](10_software_testing/01_parameterized_testing/)

# Running a Node.js Express Application

## Setup

1. From VS Code, click File > Open Folder and select the root directory of the project (the folder that contains the `package.json` file).
1. Double check that you are in the correct directory by running the `pwd` command in the terminal to print the current working directory, and the `ls` command to list the files in the current directory. You should see the `package.json` file in the root directory.
1. Run the `npm install` command to install dependencies. This must be done before you can run the application.

## Running and Debugging

After installint the project dependencies, you can run the project using:

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
