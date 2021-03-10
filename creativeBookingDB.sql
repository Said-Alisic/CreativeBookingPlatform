# CreativeBookingPlatform database

CREATE DATABASE IF NOT EXISTS creativeBookingDB;

USE creativeBookingDB;

CREATE TABLE IF NOT EXISTS teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    display_name VARCHAR(120) NOT NULL,
    first_name VARCHAR(120) NOT NULL,
    last_name VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    password VARCHAR(20) NOT NULL,
    address VARCHAR(120) NOT NULL,
    phone_number VARCHAR(120) NOT NULL,
    teacher_info VARCHAR(500),
    date_joined DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_active DATETIME,
    access_level VARCHAR(120) NOT NULL DEFAULT 'TEACHER'

);

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(120) NOT NULL,
    last_name VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    password VARCHAR(20) NOT NULL,
    phone_number VARCHAR(120) NOT NULL,
    tickets INT NOT NULL DEFAULT 0,
    date_joined DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_active DATETIME,
    access_level VARCHAR(120) NOT NULL DEFAULT 'STUDENT'

);

CREATE TABLE IF NOT EXISTS classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(120) NOT NULL,
    start_date DATETIME NOT NULL,
    max_students INT(2) NOT NULL,
    skill_level VARCHAR(120) NOT NULL,
    class_info VARCHAR(255),
    status VARCHAR(120) NOT NULL DEFAULT 'ACTIVE'

);


CREATE TABLE IF NOT EXISTS classTeachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_id INT NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES teachers(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    class_id INT NOT NULL,
    status VARCHAR(120) NOT NULL DEFAULT 'ENROLLED',
    booking_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE TABLE IF NOT EXISTS timeSlots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_id INT NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    room_number INT(1) NOT NULL,
    floor_number INT(1) NOT NULL,
    available TINYINT NOT NULL DEFAULT 1,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    card_type VARCHAR(120) NOT NULL,
    card_number VARCHAR(120) NOT NULL,
    card_holder VARCHAR(120) NOT NULL,
    transaction_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    transaction_info VARCHAR(255),
    amount FLOAT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id)
);

SHOW TABLES;

# Selects all users on your server
#SELECT host, user FROM mysql.user;

# Create new testuser and grant CRUD privileges on our creativeBookingDB tables
CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'testpass';
GRANT SELECT, INSERT, UPDATE, DELETE
ON creativeBookingDB.*
TO testuser@localhost;

SELECT * FROM teachers;

