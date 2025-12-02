# Client-Side Rendering

## Server-side rendering (SSR)

With **server-side rendering** the server generates the full HTML with data already included and sends it to the client. We have used this with EJS templates in previous demos.

SSR is best used when:

- You are serving static or mostly static content
- You want the page to be cached by CDNs or proxies
- You want the page to be indexed by search engines (SEO is critical)
- You want a persistent link to the page (e.g. bookmarking a page)
- You need faster initial page load and Time to First Byte (TTFB)
- You want content to be immediately visible without waiting for JavaScript execution

## Client-side rendering (CSR)

With **client-side rendering** the browser receives a minimal HTML shell along with JavaScript code. The JavaScript code fetches data from the server (typically via API calls) and dynamically updates the DOM in the browser.

CSR is best used for:

- **Single-page applications** (SPAs); websites that behave like desktop applications
- Highly interactive websites that need to update content without full page reloads
- Partial page updates

## Fetch API

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is modern way to make HTTP requests (GET, POST, etc.) in JavaScript using promises.

## Return Types

The fetch promise will resolve with a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object that represents an HTTP response. From there we must convert the response to the desired type:

- **text()** - returns a promise that resolves with the response as text
- **json()** - returns a promise that resolves with the response as JSON
- **blob()** - returns a promise that resolves with the response as a Blob (binary data)

## Examples

### Webscrape

Try running this example in the browser console. For browser security reasons you must run this from a tab that is open to "https://example.com/" for it to work.

```js
const response = await fetch("https://example.com/");
const data = await response.text();
console.log(data);
```

### API Call

We have build several restful APIs in this course. These typically return JSON data, and serve as the endpoints for many client-side fetch requests.

Here's a dummy API that returns a list of posts:

| Method | URL                                          | Description             |
| ------ | -------------------------------------------- | ----------------------- |
| GET    | https://jsonplaceholder.typicode.com/posts   | Returns a list of posts |
| GET    | https://jsonplaceholder.typicode.com/posts/1 | Returns a single post   |

```js
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();
console.log(data);
```

### Post Builder Demo

The demo site included in this repository fetches the posts from the API and displays them as HTML elements after they are fetched.
