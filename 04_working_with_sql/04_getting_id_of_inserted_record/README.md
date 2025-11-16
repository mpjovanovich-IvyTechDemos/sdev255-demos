# Getting the ID of an Inserted Record

## What to look for

### AUTOINCREMENT primary keys

Many databases use an **AUTOINCREMENT** keyword to automatically assign a unique ID to a new record. This tells the database to keep track of the next available ID for the primary key column and automatically assign it to the new record when it is inserted.

```sql
CREATE TABLE mustard (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT NOT NULL,
    type TEXT NOT NULL
);
```

### The `this` keyword

When we create a new record in the web API service, we should return the object that was created after a POST, including the new ID.

The `this` keyword is a special variable that refers to the current object. In the context of a callback function, it refers to the object that the function is a method of.

We can access the `lastID` property from `this` to get the ID of the newly inserted record.

```js
db.run(sql, [brand, type], function (err) {
  // Note the id property on the returned JSON object
  res.status(201).json({ id: this.lastID, brand: brand, type: type });
});
```

## Try it

Run the application. From Postman, try the following paths.

If you need to reset the mustards you can restart the application.

### Create new record

Note the lack of an ID in the request body:

_POST: http://localhost:3000/mustards_

```json
{ "brand": "Excellent Kate", "type": "Exotic Purple" }
```
