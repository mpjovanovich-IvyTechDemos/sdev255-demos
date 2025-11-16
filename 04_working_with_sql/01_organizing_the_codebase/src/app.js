import { createConnection, initializeDatabase } from "./db.js";

// Our app will open the database and initialize the tables when it starts
const db = createConnection();
initializeDatabase(db);

// The main application logic goes here

// Our app will close the database when it stops
db.close();
