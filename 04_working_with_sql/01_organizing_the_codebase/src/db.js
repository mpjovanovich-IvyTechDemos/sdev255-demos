import fs from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";
import sqlite3 from "sqlite3";

const __dirname = dirname(fileURLToPath(import.meta.url));

// This says "go up one level from the current file, then go to the data folder,
// then go to X file"
export const DB_PATH = path.join(__dirname, "..", "data", "mustard.db");
export const INIT_PATH = path.join(__dirname, "..", "data", "init.sql");

export function createConnection() {
  return new sqlite3.Database(DB_PATH);
}

export function initializeDatabase(db) {
  const sql = fs.readFileSync(INIT_PATH, "utf8");
  db.exec(sql);
}
