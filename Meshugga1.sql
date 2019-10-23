DROP DATABASE IF EXISTS Meshugga1_db;

CREATE DATABASE Meshugga1_db;

USE Meshugga1_db;

CREATE TABLE submission	(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
artpiece_link VARCHAR(500) NOT NULL,
artpiece_name VARCHAR(100) NOT NULL, 
artpiece_description TEXT(100) NOT NULL
);

INSERT INTO submission (artpiece_link, artpiece_name, artpiece_description) VALUES ("https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "Hedgehog", "Epitomy of Adorable");
INSERT INTO submission (artpiece_link, artpiece_name, artpiece_description) VALUES ("https://media.mnn.com/assets/images/2010/02/baby-orangutan.jpg.1000x0_q80_crop-smart.jpg", "Orangutan", "Everyone loves me");
INSERT INTO submission (artpiece_link, artpiece_name, artpiece_description) VALUES ("https://t2.kn3.net/taringa/B/A/6/C/1/D/mundial-2014/A58.jpg", "Chihuahua", "I am going to haunt you in your nightmares");
INSERT INTO submission (artpiece_link, artpiece_name, artpiece_description) VALUES ("https://cdna.artstation.com/p/assets/images/images/006/639/184/large/thomas-veyrat-anglerfish-view01-3-4.jpg?1500132196", "Anglerfish", "I'm a pretty, pretty lady");

SELECT * FROM submission;





