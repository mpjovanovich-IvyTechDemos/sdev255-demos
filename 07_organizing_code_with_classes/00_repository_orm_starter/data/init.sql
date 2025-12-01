-- Drop existing table if it exists
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  created_at TEXT NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 1
);

-- Insert some sample data
INSERT INTO users (email, username, password, created_at, is_active) VALUES
  ('alice@example.com', 'alice', 'password123', '2024-01-15T10:00:00.000Z', 1),
  ('bob@example.com', 'bob', 'password123', '2024-02-20T14:30:00.000Z', 1),
  ('charlie@example.com', 'charlie', 'password123', '2024-03-10T09:15:00.000Z', 0);