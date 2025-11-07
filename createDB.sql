CREATE DATABASE todoApp;

\c todoApp

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (title, status)
VALUES 
    ('Acheter du lait', FALSE),
    ('Terminer le projet', TRUE),
    ('Appeler Alice', FALSE),
    ('Lire un livre', FALSE);


SELECT * FROM tasks;