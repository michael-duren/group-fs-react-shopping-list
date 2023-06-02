-- Don't forget to add your create table SQL 
CREATE TABLE shoppinglist (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    quantity REAL NOT NULL,
    unit VARCHAR(20)

);

-- It is also helpful to include some test data

INSERT INTO shoppinglist (name, quantity, unit) 
VALUES 
('ground beef', 1.5, 'lbs'),
('avocado', 6, 'count'),
('bagels', 2, 'packs');
