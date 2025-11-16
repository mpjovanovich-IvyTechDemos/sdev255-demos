import { createConnection, initializeDatabase } from "./db.js";

// Our app will open the database and initialize the tables when it starts
// Create a global variable to store the database connection
let db;

try {
  // Set the db variable in a try/catch block to catch any issues and exit if
  // needed
  db = await createConnection();
  initializeDatabase(db);
} catch (err) {
  console.error("Failed to initialize database:", err.message);
  // This will exit the application
  process.exit(1);
}

// The main application logic goes here
