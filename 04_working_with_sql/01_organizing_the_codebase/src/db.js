import fs from "node:fs";
import sqlite3 from "sqlite3";
import { DB_PATH, INIT_PATH } from "./paths.js";

export function createConnection() {
  return new sqlite3.Database(DB_PATH);
}

export function initializeDatabase(db) {
  const sql = fs.readFileSync(INIT_PATH, "utf8");
  db.exec(sql);
}
