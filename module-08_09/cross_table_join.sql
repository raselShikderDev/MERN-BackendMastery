SELECT * FROM posts
FULL JOIN users ON posts.user_id = users.user_id



CREATE TABLE emplyees(
    emp_id INT,
    emp_name VARCHAR(50),
    dept_id INT
)

CREATE TABLE departments(
    dept_id INT,
    dept_name VARCHAR(50)
)

INSERT INTO emplyees (emp_id, emp_name, dept_id) VALUES
(101, 'Alice Johnson', 1),
(102, 'Bob Smith', 2),
(103, 'Charlie Lee', 3);


INSERT INTO departments (dept_id, dept_name) VALUES
(1, 'Human Resources'),
(2, 'Engineering'),
(3, 'Marketing');

SELECT * FROM departments

SELECT * FROM emplyees





------ cross join table

SELECT * FROM emplyees
CROSS JOIN departments



------ Natural join table

SELECT * FROM emplyees
NATURAL JOIN departments