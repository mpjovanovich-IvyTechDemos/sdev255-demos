DROP TABLE IF EXISTS mustard;

-- AUTOINCREMENT means that the database will keep track of the next available ID for us
-- and assign it to the new record automatically.
CREATE TABLE mustard (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    brand TEXT NOT NULL,
    type TEXT NOT NULL
);

-- Create unique index on brand and type
CREATE UNIQUE INDEX idx_brand_type ON mustard (brand, type);

-- Note: we don't need to (and should not) specify the ID because of the
-- AUTOINCREMENT keyword.
INSERT INTO mustard (brand, type) VALUES 
('Duke', 'Yellow'),
('Frenchs', 'Brown');