DROP TABLE IF EXISTS mustard;

-- Normally AUTOINCREMENT the PK, but we'll save for later demo
CREATE TABLE mustard (
    id INTEGER PRIMARY KEY, 
    brand TEXT NOT NULL,
    type TEXT NOT NULL
);

-- Add a sample record
INSERT INTO mustard (id, brand, type) VALUES (1, 'Duke', 'Yellow');