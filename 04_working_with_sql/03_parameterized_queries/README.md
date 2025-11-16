# Parameterized Queries

Our previous example used template literals or string concatenation to build SQL statements. This is insecure because it leaves the application open to **SQL Injection** attacks.

## What is SQL Injection?

SQL Injection is a type of attack where an attacker injects malicious SQL code into a SQL query. Someone could try to post SQL to our API that looks like this:

```json
{
  "id": "3",
  "brand": "Excellent Kate",
  "type": "Exotic Purple; DROP TABLE mustard;"
}
```

_Note:_ Many library calls that connect to a database, such as sqlite3's `run` method, will prevent this type of attack. Others like `exec` will not however.

## How to avoid SQL Injection

The best way to avoid SQL Injection is to use **parameterized queries**.

It works much like a template literal, but adds extra safety by passing values directly to the database instead of building the query string in the application code.

In the sqlite3 method calls we add a `?` placeholder for the value that will be passed in as a parameter, then pass the value as an array to the method.

```js
const sql = `SELECT * FROM Mustard WHERE id = ?`;
db.get(sql, [id], function (err, row) {
  // ...
});
```

## Try it

Run the application. From Postman, try the following paths.

If you need to reset the mustards you can restart the application.

### Get records

Get one: _GET http://localhost:3000/mustards/1_:

### Create new record

_POST: http://localhost:3000/mustards_

```json
{ "id": "3", "brand": "Excellent Kate", "type": "Exotic Purple" }
```

## Challenge

Try adding a new field to the mustard table for `description` and update the API to include it.
