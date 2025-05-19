CREATE TABLE students(
    student_Id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    age INT,
    grade CHAR(2),
    course VARCHAR(50),
    email VARCHAR(100),
    dob DATE,
    blood_group VARCHAR(5),
    country VARCHAR(50)
)

INSERT INTO students(student_Id, first_name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES
(1, 'Alice', 'Smith', 20, 'A+', 'Computer Science', 'alice.smith@example.com', '2005-03-14', 'O+', 'USA'),
(2, 'Bob', 'Johnson', 21, 'B+', 'Mathematics', 'bob.johnson@example.com', '2004-07-22', 'A-', 'Canada'),
(3, 'Charlie', 'Williams', 19, 'A', 'Physics', 'charlie.williams@example.com', '2006-01-10', 'B+', 'UK'),
(4, 'David', 'Brown', 22, 'B', 'Economics', 'david.brown@example.com', '2003-05-05', 'AB+', 'Australia'),
(5, 'Eve', 'Davis', 20, 'A-', 'Biology', 'eve.davis@example.com', '2005-08-30', 'O-', 'USA'),
(6, 'Fay', 'Miller', 18, 'C+', 'Chemistry', 'fay.miller@example.com', '2007-11-12', 'A+', 'India'),
(7, 'Grace', 'Wilson', 23, 'B-', 'Engineering', 'grace.wilson@example.com', '2002-09-03', 'B-', 'Germany'),
(8, 'Henry', 'Moore', 21, 'A+', 'Law', 'henry.moore@example.com', '2004-12-25', 'O+', 'France'),
(9, 'Ivy', 'Taylor', 19, 'A', 'Philosophy', 'ivy.taylor@example.com', '2006-04-18', 'AB-', 'Bangladesh'),
(10,'Jack', 'Anderson', 20, 'B+', 'Sociology', 'jack.anderson@example.com', '2005-06-07', 'O-', 'Japan');



INSERT INTO students(student_Id, first_name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES
('Alice', 'Smith', 20, 'A+', 'Computer Science', 'alice.smith@example.com', '2005-03-14', 'O+', 'USA'),
('Bob', 'Johnson', 21, 'B+', 'Mathematics', 'bob.johnson@example.com', '2004-07-22', 'A-', 'Canada'),
('Charlie', 'Williams', 19, 'A', 'Physics', 'charlie.williams@example.com', '2006-01-10', 'B+', 'UK'),
('David', 'Brown', 22, 'B', 'Economics', 'david.brown@example.com', '2003-05-05', 'AB+', 'Australia'),
('Eve', 'Davis', 20, 'A-', 'Biology', 'eve.davis@example.com', '2005-08-30', 'O-', 'USA'),
('Fay', 'Miller', 18, 'C+', 'Chemistry', 'fay.miller@example.com', '2007-11-12', 'A+', 'India'),
('Grace', 'Wilson', 23, 'B-', 'Engineering', 'grace.wilson@example.com', '2002-09-03', 'B-', 'Germany'),
('Henry', 'Moore', 21, 'A+', 'Law', 'henry.moore@example.com', '2004-12-25', 'O+', 'France'),
('Ivy', 'Taylor', 19, 'A', 'Philosophy', 'ivy.taylor@example.com', '2006-04-18', 'AB-', 'Bangladesh'),
('Jack', 'Anderson', 20, 'B+', 'Sociology', 'jack.anderson@example.com', '2005-06-07', 'O-', 'Japan');


select * FROM students

SELECT FROM students

SELECT email FROM students

SELECT age, dob FROM students

SELECT email as student_email FROM students

SELECT email as "student email" FROM students

SELECT * FROM students ORDER BY first_name ASC

SELECT * FROM students ORDER BY last_name DESC

SELECT * FROM students ORDER BY age ASC;
SELECT * FROM students ORDER BY age DESC;




