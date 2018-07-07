CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;

CREATE TABLE burgers (
 id int NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR(255) NOT NULL,
 eat BOOL DEFAULT false,
 PRIMARY KEY (id)
);

INSERT INTO burgers(burger_name,eat) VALUES ('Cheese Burger',False);
INSERT INTO burgers(burger_name,eat) VALUES ('Pineapple Burger',False);
INSERT INTO burgers(burger_name,eat) VALUES ('Fish Burger',False);

SELECT *FROM burger_db.burgers;
