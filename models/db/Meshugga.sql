
CREATE DATABASE Meshugga_db;
USE Meshugga_db;

CREATE TABLE artist	(
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
artist_name VARCHAR(50) NOT NULL
);

INSERT INTO artist (artist_name) 
    VALUES ("Van Gogh"), ("Matisse"), ("Rembrandt");
    
SELECT * FROM artist;

CREATE TABLE artpiece	(
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
artpiece_name VARCHAR(50) NOT NULL
);
