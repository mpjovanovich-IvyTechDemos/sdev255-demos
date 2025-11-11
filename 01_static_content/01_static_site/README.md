# Static Site

Up until now we have had to write the HTML that we want to serve to the client in the route handlers within the JavaScript file. This is messy and not very maintainable.

**Static content** is content that does not change as it is being served to the client. This can include static HTML pages that never change, CSS files, JavaScript files, and images.

Most sites have some static content that is served to the client. At the very least, even highly personalized sites need to serve static CSS, scripts, and images.

_Note:_ Remember that resources are each fetched separately with their own HTTP GET request. When you request a web page that includes a CSS file, the CSS file is fetched separately from the HTML page. You can see this separate request in the browser's developer tools under the "Network" tab.

## What to look for

### Express static middleware

```js
app.use(express.static("public"));
```

This line tells our web server to check the `public` directory for files that match the requested URL. If a file is found, it will be served to the client.

## Try it

Try installing the project dependencies and running the application. Then try the following paths:

- `http://localhost:3000`
  - The index.html page will be served to the client.
- `http://localhost:3000/about.html`
  - The about.html page will be served to the client.
- `http://localhost:3000/contact.html`
  - The contact.html page will be served to the client.

Note that although you never explicitly requested the CSS or image files, they were requested automatically by the client browser and served by ther server.

## Challenge

Try creating a new HTML page in the `public` directory and add a link to it in the index.html page. Then try serving the new page.
