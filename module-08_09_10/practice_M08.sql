-- Active: 1747436690330@@127.0.0.1@5432@practice_m08
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    roll INT UNIQUE,
    name VARCHAR(50),
    age INT,
    department VARCHAR(100),
    score INT,
    status BOOLEAN,
    last_login DATE
)

SELECT * FROM students

ALTER TABLE students ADD COLUMN email VARCHAR(100)

ALTER TABLE students RENAME email TO student_email

ALTER TABLE students
ADD CONSTRAINT uniqe_student_email UNIQUE (student_email)

ALTER TABLE students DROP CONSTRAINT students_pkey

ALTER TABLE students DROP COLUMN id

ALTER TABLE students ADD COLUMN courses TEXT;

ALTER TABLE students ADD CONSTRAINT stu_primary_key PRIMARY KEY(courses)




---- Number 06

INSERT INTO students (roll, name, age, department, score, status, last_login, student_email, courses) VALUES
(101, 'Alice Khan', 20, 'Computer Science', 85, true, '2025-05-20', 'alice.khan@example.com', 'CSE101'),
(102, 'Bob Rahman', 22, 'Electrical Engineering', 78, true, '2025-05-18', 'bob.rahman@example.com', 'EEE201'),
(103, 'Carla Hossain', 21, 'Mechanical Engineering', 88, false, '2025-05-15', 'carla.hossain@example.com', 'MECH301'),
(104, 'Danish Ali', 23, 'Civil Engineering', 91, true, '2025-05-22', 'danish.ali@example.com', 'CIVIL101'),
(105, 'Elina Akter', 20, 'Computer Science', 82, true, '2025-05-10', 'elina.akter@example.com', 'CSE102'),
(106, 'Fahim Islam', 21, 'Mathematics', 76, false, '2025-05-12', 'fahim.islam@example.com', 'MATH101'),
(107, 'Gulzar Ahmed', 22, 'Physics', 80, true, '2025-05-21', 'gulzar.ahmed@example.com', 'PHYS201'),
(108, 'Hena Parvin', 24, 'Chemistry', 79, true, '2025-05-14', 'hena.parvin@example.com', 'CHEM101'),
(109, 'Imran Chowdhury', 22, 'Biology', 84, false, '2025-05-17', 'imran.chowdhury@example.com', 'BIO301'),
(110, 'Jarin Nahar', 23, 'Statistics', 90, true, '2025-05-16', 'jarin.nahar@example.com', 'STAT101'),
(111, 'Kamal Hossain', 21, 'Computer Science', 73, true, '2025-05-13', 'kamal.hossain@example.com', 'CSE103'),
(112, 'Lima Sultana', 20, 'Software Engineering', 89, true, '2025-05-20', 'lima.sultana@example.com', 'SWE101'),
(113, 'Masud Rana', 22, 'Information Technology', 81, false, '2025-05-11', 'masud.rana@example.com', 'IT201'),
(114, 'Nadia Alam', 23, 'Computer Science', 87, true, '2025-05-09', 'nadia.alam@example.com', 'CSE104'),
(115, 'Omar Faruk', 20, 'Business Administration', 74, true, '2025-05-19', 'omar.faruk@example.com', 'BBA101'),
(116, 'Papia Das', 21, 'Finance', 92, false, '2025-05-22', 'papia.das@example.com', 'FIN301'),
(117, 'Quazi Tanvir', 24, 'Marketing', 83, true, '2025-05-18', 'quazi.tanvir@example.com', 'MKT101'),
(118, 'Ripa Khan', 22, 'Human Resource', 70, true, '2025-05-20', 'ripa.khan@example.com', 'HR101'),
(119, 'Sakib Hossain', 21, 'Tourism Management', 68, true, '2025-05-15', 'sakib.hossain@example.com', 'TOUR101'),
(120, 'Tania Sultana', 23, 'Environmental Science', 86, false, '2025-05-21', 'tania.sultana@example.com', 'ENV101');


SELECT *, roll FROM students
WHERE (score > 80) AND score IS NOT NULL



-- Number 07

SELECT * FROM students
WHERE last_login >= now() - INTERVAL '3 days'



-- NUmber 08

SELECT * FROM students
WHERE name LIKE 'A%'


SELECT * FROM students
WHERE name ILIKE 'A%'

-- Problem 9
SELECT * FROM students
WHERE age BETWEEN 18 AND 25


-- Problem 10
SELECT * FROM students
WHERE roll IN(112, 114, 117, 120)


-- Problem 11
SELECT count(*) FROM students


-- Problem 12
SELECT avg(score) FROM students


-- Problem 13
SELECT max(age) as max_age, min(age) as min_age  FROM students


-- Problem 14
UPDATE students
SET status = false
WHERE score >  50  


-- Problem 15
DELETE FROM students 
WHERE last_login >= now() - INTERVAL '1 YEAR'


-- Problem 16
SELECT * FROM students LIMIT 5

SELECT * FROM students LIMIT 5 OFFSET 1
