# localStorage

**localStorage** is a way to store UTF-16 string data in the browser. It is a key-value store that is similar to a JavaScript object.

## Methods

The localStorage API has the following methods:

| Method                | Description                          |
| --------------------- | ------------------------------------ |
| `setItem(key, value)` | Sets the value for the given key.    |
| `getItem(key)`        | Gets the value for the given key.    |
| `removeItem(key)`     | Removes the value for the given key. |
| `clear()`             | Removes all values.                  |

We typically keep data in localStorage in the form of JSON strings.

_Serializing a JSON Object_

To serialize data (go from JavaScript object to JSON string), we use `JSON.stringify()`.

```javascript
const user = { name: "Susan", age: 30 };
// Serialize the user object to a JSON string
const jsonString = JSON.stringify(user);
// Save the JSON string to localStorage
localStorage.setItem("user", jsonString);
```

_Deserializing a JSON String_

To deserialize data (go from JSON string to JavaScript object), we use `JSON.parse()`.

```javascript
// Get the JSON string from localStorage
const jsonString = localStorage.getItem("user");
// Parse the JSON string to a JavaScript object
const user = JSON.parse(jsonString);
// Now we can use the user object in our code
```

## Common Use Cases

localStorage provides a way to retain state between page reloads and browser restarts. localStorage is only cleared when the user clears the browser cache.

## State Management

In this demo we have **application state** to manage.

_Retaining state between page reloads_

We load the items from localStorage into an in-memory array when the page loads

When we update the items in the in-memory array, we save the items back to localStorage to keep them in sync. This way if the browser is closed or the page is refreshed, the items will still be there.

The localStorage values become the **source of truth** for the items on the page.

_Filtering items_

We also have a **current filter** term that we use to filter the items in the in-memory array. This way we can show only the items that match the current filter term.

This is stored in memory, but it is not stored in localStorage, so it does not persist between page reloads.
