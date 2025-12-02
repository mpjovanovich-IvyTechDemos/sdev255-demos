/*
Example post object:
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita"
}
*/
async function displayPosts() {
  try {
    // Get posts from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // This is shorthand for checking if status code is not in the range
    // (200-299); for example 404 not found errors, 500 server errors, etc.
    if (!response.ok) {
      // Normally we'd handle this with a message to the user
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    // Convert the response to JSON
    const data = await response.json();

    // Certain elements like html, head, body are available as properties of the
    // document object, so we don't need to use getElementById or querySelector
    const body = document.body;

    // Create a list item element for each post
    data.forEach((post) => {
      // Use the title property of the post object to create an h1 element
      const postTitle = document.createElement("h1");
      postTitle.textContent = post.title;
      body.appendChild(postTitle);

      // Use the userId property of the post object to create a p element
      const postUserId = document.createElement("p");
      postUserId.textContent = `User ID: ${post.userId}`;
      postUserId.style.color = "gray";
      postUserId.style.fontStyle = "italic";
      body.appendChild(postUserId);

      // Use the body property of the post object to create a p element
      const postBody = document.createElement("p");
      postBody.textContent = post.body;
      body.appendChild(postBody);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

displayPosts();
