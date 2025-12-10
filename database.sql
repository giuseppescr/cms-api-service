CREATE DATABASE IF NOT EXISTS market_db;
USE market_db;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    is_on_sale BOOLEAN DEFAULT FALSE
);

-- Dados iniciais (Baseado no seu print)
INSERT INTO products (id, name, description, price, is_on_sale) VALUES 
(1, 'Gaming Mouse', 'High precision RGB mouse', 45.50, 0),
(2, 'Mechanical Keyboard', 'Red switches, silent keys', 120.00, 1),
(3, 'Monitor 24"', 'Full HD IPS Display', 199.99, 0);
