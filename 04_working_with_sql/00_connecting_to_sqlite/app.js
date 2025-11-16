import fs from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";
import sqlite3 from "sqlite3";

// Get the directory of the current file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define file paths as constants
const DB_PATH = path.join(__dirname, "data", "mustard.db");
const INIT_PATH = path.join(__dirname, "data", "init.sql");

// Open the database file for read/write access
const db = new sqlite3.Database(DB_PATH);

// Read the SQL script into a string variable
const sql = fs.readFileSync(INIT_PATH, "utf8");

// Execute the SQL commands in the script
db.exec(sql);

// Close the database connection (the open file)
db.close();
