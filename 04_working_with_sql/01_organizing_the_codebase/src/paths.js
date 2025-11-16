import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// This says "go up one level from the current file, then go to the data folder,
// then go to X file"
export const DB_PATH = path.join(__dirname, "..", "data", "mustard.db");
export const INIT_PATH = path.join(__dirname, "..", "data", "init.sql");
