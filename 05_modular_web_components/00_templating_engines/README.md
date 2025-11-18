# Templating Engines

So far we have used string concatenation and string interpolation (template literals) to generate HTML with dynamic content. This approach becomes impractical as the complexity of the HTML increases.

**Template engines** are libraries that allow you to generate HTML templates with dynamic content. They work very much like string interpolation, but they are more powerful and tightly integrated with the application's logic.

We will use the **EJS (Embedded JavaScript)** template engine in this course, because the syntax is closest to pure HTML and JavaScript.

## What to Look For

### Templating Syntax

There are three ways to output data in EJS

### Output (With Escaping): `<%= ... %>`

This is the default way to output data in EJS. It will interpolate the value of the variable into the HTML where it appears in the html string.

```js
let food = "pizza";
let html = "<p>I like <%= food %>.</p>";
```

It will also escape the HTML characters in the data to prevent XSS attacks. If the input comes from a query paramenter, for example, we do not want to allow the user to inject HTML code into the page:

```js
// request: /favfood?food=<script>alert('XSS attack!')</script>
let food = req.query.food;
let html = "<p>I like <%= food %>.</p>";
```

This will generate HTML with proper **escape codes** for the HTML characters in the data.

```html
<p>I like &lt;script&gt;alert(&#34;XSS attack!&#34;)&lt;/script&gt;.</p>
```

### Output (Without Escaping): `<%- ... %>`

This is the same as the output with escaping, but it will not escape the HTML characters in the data.

This might be used if you, as the developer, have HTML content that you trust and want to output without escaping:

```js
let food = "<em>pizza</em>";
let html = "<p>I like <%- food %>.</p>";
```

_Note:_ Only use this if you understand the security implications.

### Scriptlet Tags: `<% ... %>`

These tags are used to execute JavaScript code. This is the subject of the next demo.

## Try it

Run the application. From the browser, try supplying different values for the `food` and `foods` query parameters in the two routes.

## Challenge

Try modifying the favfood route to use the output without escaping (`<%- ... %>`). Then drop in the script
