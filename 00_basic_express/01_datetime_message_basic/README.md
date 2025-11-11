# Datetime Message Basic

This example shows how you can include logic to control the response that is sent by the server.

## What to look for

### Application Logic

The application logic in the root route handler figures out the current time and constructs a message based on the time of day. This way if you run the app in the morning you'll see a different message than if you run it in the afternoon.

## Try it

Try installing the project dependencies and running the application. Then try the following paths:

- `http://localhost:3000`

Note that the message will change based on the server's current time.
