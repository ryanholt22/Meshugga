CREATE DATABASE Meshugga1_db;

USE Meshugga1_db;

CREATE TABLE submission	(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
artpiece_link VARCHAR(500) NOT NULL,
artpiece_name VARCHAR(100) NOT NULL, 
artpiece_description TEXT(100) NOT NULL
);