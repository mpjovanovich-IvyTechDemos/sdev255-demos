# Using HTTP POST

HTTP defines several methods for sending data to the server. We have used **GET** so far.

**POST** does not pass parameters as query string text. Instead the data are sent in the request _body_. This is a special section of the request reserved for data.

Data in the request body are not visible in the URL bar of the browser, and will not appear in server logs.

## GET vs POST

GET and query strings should be used when:

- Parameters are not sensitive
- Parameters are small
- Parameters have simple data structure
- The operation is truly a "read" operation, requesting some resource from the server

POST should be used when:

- Parameters are sensitive (e.g. credentials, credit card numbers, etc.)
- Parameters are large (e.g. a file upload)
- Parameters have complex data structure
- The operation is truly a "write" operation creating some resource on the server (usually a database record)

## What to look for

### Express forms middleware

```js
app.use(express.urlencoded({ extended: true }));
```

In this application we are simulating a POST that comes from an HTML form submission. To do this, we need to use the `express.urlencoded` middleware.

### app.post()

```js
app.post("/", (req, res) => {
```

The express "app" object has a `post` method that is used to define a route handler for a POST request.

### req.body

```js
const text = req.body.text;
```

Instead of using the query string, we use the body property of the request object to get the data that was sent to the server.

## Try it

### Setup

Try installing the project dependencies and running the application.

Now try putting the follwing URL into the browser address bar:

- `http://localhost:3000`

You will not see a response, because there is no route handler on the root for GET requests.

### Using Postman

While it isn't the only way to send a POST request, Postman is a popular tool among developers for testing HTTP requests.

1. Install [Postman](https://www.postman.com/) from the web.
1. Create a new collection on the left hand sidebar. You can simply call it "Demos"
1. Create a new request in the collection using the `+` button as you hover over the collection name.
1. Give the request a friendly title. As you get more endpoints you will come up with a sensible naming convention for each test.
1. Change the request method from GET to POST.
1. In the URL field, enter the URL of the endpoint you want to test, such as `http://localhost:3000`.
1. In the Body tab, select the "x-www-form-urlencoded" option.
1. Add a key-value pair for the parameter you want to send to the server. For this demo that's "text" and "Hello".
1. Click the "Send" button.

You should see the response "Post received: Hello" in the Response tab.
