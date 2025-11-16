DROP TABLE IF EXISTS mustard;

-- Normally AUTOINCREMENT the PK, but we'll save for later demo
CREATE TABLE Mustard (
    id INTEGER PRIMARY KEY, 
    brand TEXT NOT NULL,
    type TEXT NOT NULL
);

-- Add a sample record
INSERT INTO Mustard (id, brand, type) VALUES (1, 'Duke', 'Yellow');