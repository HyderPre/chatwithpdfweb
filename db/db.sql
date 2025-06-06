CREATE DATABASE IF NOT EXISTS VedaPDF;
USE VedaPDF;

CREATE TABLE IF NOT EXISTS contactinfo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50),
    query VARCHAR(30),
    member VARCHAR(10) Default 'No',
    concern TEXT
);
