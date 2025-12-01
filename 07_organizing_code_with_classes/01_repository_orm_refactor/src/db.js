// db.js
import Database from "better-sqlite3";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let db;

export function getDb() {
  // The first time this function is called, it will initialize the database
  // Every subsequent call will return the same database instance
  if (!db) {
    const dbPath = join(__dirname, "..", "data", "data.db");
    const initSqlPath = join(__dirname, "..", "data", "init.sql");

    try {
      db = new Database(dbPath);
      const initSql = readFileSync(initSqlPath, "utf8");
      db.exec(initSql);
    } catch (err) {
      console.error("Failed to initialize database:", err.message);
      process.exit(1);
    }
  }
  return db;
}
