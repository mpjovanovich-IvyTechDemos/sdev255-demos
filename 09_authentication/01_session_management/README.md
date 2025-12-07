# Session Management

## Session Storage

Session storage stores user session data as key-value pairs on the server. It can be implemented using a database, file system, or in-memory store.

With session storage, the server tracks user state using a **session ID** - a unique identifier that serves as a lookup key to retrieve the user's session data from the server's session store.

This keeps each user's data isolated.

...

General demo: server-side counter application; show two different browsers each with its own session ID and related state. When the user visits the increment or clear page, the server will increment or clear the count for the user's session.

...

In our lab we will implement an authentication workflow using session cookies.

We will refer to this diagram in our walkthrough:

[Login Session Cookie Workflow](images/login_session_cookie_workflow.svg)
