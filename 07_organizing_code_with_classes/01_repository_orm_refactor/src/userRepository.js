// userRepository.js
// Repository pattern implementation for user data access

// User objects are in this format:
// Password is not included in the object
/*
{
  id: number;
  email: string;
  username: string;
  created_at: string;
  is_active: boolean;
}
*/

export class UserRepository {
  constructor(db) {
    this.db = db;
  }

  // Get single user by email; return null if not found
  fetchByEmail(email) {
    return (
      this.db
        .prepare(
          "SELECT id, email, username, created_at, is_active FROM users WHERE email = ?"
        )
        .get(email) || null
    );
  }

  // Get single user by ID; return null if not found
  fetchById(id) {
    return (
      this.db
        .prepare(
          "SELECT id, email, username, created_at, is_active FROM users WHERE id = ?"
        )
        .get(id) || null
    );
  }

  // Get all active users; return as array of user objects
  fetchActive() {
    return this.db
      .prepare(
        "SELECT id, email, username, created_at, is_active FROM users WHERE is_active = 1"
      )
      .all();
  }

  // Create a new user; return the created user object (without password)
  create(email, username, password) {
    // Validate inputs
    if (!email?.trim() || !username?.trim() || !password?.trim()) {
      throw new Error("Email, username, and password are required");
    }

    // Check if email already exists
    const existing = this.fetchByEmail(email);
    if (existing) {
      throw new Error("Email already exists");
    }

    // Not shown: password length and complexity checks, password hashing, etc.

    const stmt = this.db.prepare(
      "INSERT INTO users (email, username, password, created_at, is_active) VALUES (?, ?, ?, ?, ?)"
    );
    const result = stmt.run(
      email,
      username,
      password,
      new Date().toISOString(),
      1
    );

    // Fetch and return the created user (without password)
    // It's a common pattern to return an object after creating it
    return this.db
      .prepare(
        "SELECT id, email, username, created_at, is_active FROM users WHERE id = ?"
      )
      .get(result.lastInsertRowid);
  }

  // Update a user by ID; return the updated user object (without password)
  update(id, email, username, is_active) {
    // Check if user exists before proceeding
    const existing = this.fetchById(id);
    if (!existing) {
      throw new Error("User not found");
    }

    // Trim whitespace from any fields that are put into the database
    username = username?.trim();
    email = email?.trim();

    if (email) {
      const emailCheck = userRepository.fetchByEmail(email);
      if (emailCheck && emailCheck.id !== id) {
        throw new Error("Email already exists");
      }
    }

    // Build update query dynamically
    // We will update only the fields that were not null
    const updateFields = []; // Field names
    const values = []; // Values to update

    if (username) {
      updateFields.push("username = ?");
      values.push(username);
    }
    if (email) {
      updateFields.push("email = ?");
      values.push(email);
    }
    if (is_active) {
      updateFields.push("is_active = ?");
      values.push(is_active ? 1 : 0);
    }

    // Sanity check: if no fields to update, return null
    if (updateFields.length === 0) {
      return null;
    }

    values.push(id);
    const sql = `UPDATE users SET ${updateFields.join(", ")} WHERE id = ?`;

    // We are using the spread operator to pass the values to the prepared statement
    // It takes the array of values and expands them into individual arguments
    this.db.prepare(sql).run(...values);

    // Fetch and return the updated user (without password)
    return this.db
      .prepare(
        "SELECT id, email, username, created_at, is_active FROM users WHERE id = ?"
      )
      .get(id);
  }
}
