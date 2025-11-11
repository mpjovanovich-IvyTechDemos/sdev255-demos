# Datetime Message HTML Template

In this example we construct a full HTML document from a template string and then return it from the server.

## What to look for

### HTML Content

```js
const MESSAGE_TEMPLATE = `
  <html>
    <head>
`; // ...
```

In the previous example we returned a string of HTML content, but this is not well-formed HTML. HTML must follow certain rules, such as being wrapped in a `<html>` tag, having a `<head>` and `<body>` tag, etc.

In this example we construct a full HTML document from a template string and then return it from the server. The template string contains placeholders for the dynamic content, such as the current date.

_Note:_ Constants that represent "hard" or "natural" constants are typically written in all caps in addition to useing the `const` keyword. We have done this with `MESSAGE_TEMPLATE`. This signals "this value is meant to be dropped in place somewhere".

### String Substitution

```js
let message = "My pet Tina is a ##animal##.";
message = message.replace("##animal##", "Dragon");
console.log(message); // "My pet Tina is a Dragon."
```

We use the `replace` method to replace the placeholders with the dynamic content. This is a simple way to construct HTML content from a template string.

## Try it

Try installing the project dependencies and running the application. Then try the following paths:

- `http://localhost:3000`
