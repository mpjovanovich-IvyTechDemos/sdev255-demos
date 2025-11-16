# CRUD with SQL

In this example we will create the same CRUD API as in the previous example, but this time we will use a SQL database to store the data.

## What to look for

### SQLite methods

The `db` sqlite object that we created has methods on it to handle SQL statements:

| Method | Description                                                  |
| ------ | ------------------------------------------------------------ |
| `all`  | Executes a SQL query and returns all rows                    |
| `get`  | Executes a SQL query and returns a single row                |
| `run`  | Executes a SQL query and returns the number of rows affected |
| `exec` | Executes a SQL query and returns the result of the query     |

### Callback functions

Each of the methods above accepts an anonymous callback function that takes an error and optionally a result.

This function will be called after the SQL statement is executed. We can check for errors and use the results:

```js
db.all(sql, function (err, rows) {
  if (err) {
    res.status(500).json({ error: err.message });
  } else {
    res.status(200).json(rows);
  }
});
```

_Note:_ We will see later that it is best to not use arrow functions when defining callback functions using the sqlite3 package. Instead use the `function` keyword.

## Try it

Run the application. From Postman, try the following paths.

If you need to reset the mustards you can restart the application.

### Get records

Get all: _GET http://localhost:3000/mustards_:

Get one: _GET http://localhost:3000/mustards/1_:

### Create new record

_POST: http://localhost:3000/mustards_

```json
{ "id": "3", "brand": "Excellent Kate", "type": "Exotic Purple" }
```

## Challenge

Try adding a PUT and DELETE route to update and delete a mustard by ID.
