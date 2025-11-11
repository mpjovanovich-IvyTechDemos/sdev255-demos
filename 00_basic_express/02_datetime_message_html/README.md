# Returning HTML Content

This example shows how you can return HTML content from the server.

## What to look for

### HTML Content

In the previous examples we've returned raw text from the server. The browser will display this text, but in a real application we'll want to return HTML content.

In this app we construct a couple of HTML elements, `h1` and `p`, and then return them as a string. They also include some inline CSS to style the text.

### Template Literals

The current date is injected into the HTML content using a **template literal**; the string with backticks around it.

These allow us to embed variables directly into a string. It's much easier to construct and read complex strings using this syntax.

## Try it

Try installing the project dependencies and running the application. Then try the following paths:

- `http://localhost:3000`

## Challenge

Try adding another HTML paragraph element to the response that says "Have a great day!"
