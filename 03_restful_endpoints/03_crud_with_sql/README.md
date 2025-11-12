# CRUD with SQL

In this example we will create the same CRUD API as in the previous example, but this time we will use a SQL database to store the data.

## What to look for

...

## Try it

Run the application. From Postman, try the following paths. After each one, do a GET on `http://localhost:3000/grades`:

_POST: http://localhost:3000/grades_

```json
{ "id": "c004", "grade": 95 }
```

_PUT: http://localhost:3000/grades/c003_

```json
{ "grade": 95 }
```

_DELETE: http://localhost:3000/grades/c003_

If you need to reset the grades you can restart the application.

## Challenge
