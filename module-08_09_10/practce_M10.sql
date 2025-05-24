-- Active: 1747436690330@@127.0.0.1@5432@practice_m10
CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    stu_name VARCHAR(50) NOT NULL,
    age SMALLINT NOT NULL,
    score SMALLINT NOT NULL,
    department_id INTEGER NOT NULL REFERENCES departments(id)
)

SELECT * FROM students

CREATE TABLE departments(
    id SERIAL PRIMARY KEY,
    name VARCHAR(120)
)

ALTER Table departments
RENAME COLUMN name TO dept_name

SELECT * FROM departments

CREATE TABLE course_enrolment(
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES students(id),
    course_title TEXT,
    enrolled_on DATE
)

SELECT * FROM course_enrolment




-- Problem 01
SELECT * FROM students
WHERE score > (SELECT avg(score) FROM students)



-- Problem 02
SELECT * FROM students
WHERE age > (SELECT avg(age) FROM students)



-- Problem 03
SELECT stu_name FROM students
WHERE id IN(SELECT department_id FROM departments)



-- Problem 04
SELECT * FROM students
WHERE score > 90 AND EXISTS (SELECT name FROM departments WHERE students.id = departments.id)


-- Problem 05
CREATE VIEW student_details AS SELECT students.stu_name, departments.dept_name, students.score FROM students JOIN departments ON students.department_id = departments.id

SELECT stu_name, dept_name, score FROM student_details


