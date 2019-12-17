CREATE USER 'dating-app'@'localhost' IDENTIFIED BY 'dating-app';

CREATE DATABASE dating_app;

GRANT ALL PRIVILEGES ON dating_app.* TO 'dating-app'@'localhost';

FLUSH PRIVILEGES;
