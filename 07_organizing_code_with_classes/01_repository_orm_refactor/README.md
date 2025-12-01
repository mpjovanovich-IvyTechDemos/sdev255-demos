# Refactoring Code with Classes: Refactored

We've made several improvements to the previous demo. Let's take a look.

## What to look for

### db.js

Database logic is consolidated into a single file.

On application startup the db object, which lets us interact with the database, is created in memory. It will stay in memory for the duration of the application since it is scoped to the module (the db.js file).

### userRepository.js

We have modified our program to use a simple **object relational mapping (ORM)** class to interact with the database.

In particular, we are using the **repository pattern** to encapsulate all data access logic for the user domain. In this pattern each entity (which usually corresponds to a database table) has a repository class. This class contains:

- Methods that are used to interact with the database table, and holds
- The state of the object within the application (the values of all of its properties).

Now other developers can use the userRepository class and not have to know implementatino details such as validation rules or how to interact with the database.
