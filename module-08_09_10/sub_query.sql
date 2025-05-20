CREATE TABLE jobholder (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(50),
    department_id INT,
    salary DECIMAL(10, 2),
    hire_date DATE,
    department_name VARCHAR(50)
);

INSERT INTO jobholder (employee_name, department_id, salary, hire_date, department_name) VALUES
('Alice Smith', 101, 55000.00, '2018-03-15', 'Finance'),
('Bob Johnson', 102, 62000.00, '2019-06-20', 'Marketing'),
('Charlie Lee', 103, 70000.00, '2017-11-01', 'Engineering'),
('David Brown', 104, 48000.00, '2020-01-10', 'Human Resources'),
('Eve Davis', 105, 53000.00, '2021-04-22', 'Sales'),
('Fay Wilson', 101, 58000.00, '2018-07-13', 'Finance'),
('Grace Miller', 103, 72000.00, '2019-09-17', 'Engineering'),
('Henry Moore', 102, 61000.00, '2020-10-05', 'Marketing'),
('Ivy Taylor', 104, 47000.00, '2021-01-08', 'Human Resources'),
('Jack Anderson', 105, 54000.00, '2022-05-19', 'Sales'),
('Karen Thomas', 101, 56000.00, '2020-02-02', 'Finance'),
('Leo Harris', 102, 64000.00, '2018-12-30', 'Marketing'),
('Mia Martin', 103, 75000.00, '2017-08-21', 'Engineering'),
('Nathan Lewis', 104, 49000.00, '2021-03-12', 'Human Resources'),
('Olivia Clark', 105, 55000.00, '2022-06-11', 'Sales'),
('Paul Walker', 101, 59000.00, '2019-10-25', 'Finance'),
('Quinn Hall', 102, 63000.00, '2020-08-14', 'Marketing'),
('Rachel Allen', 103, 76000.00, '2018-05-27', 'Engineering'),
('Steve Young', 104, 50000.00, '2021-07-23', 'Human Resources'),
('Tina King', 105, 56000.00, '2022-09-30', 'Sales'),
('Uma Scott', 101, 57000.00, '2020-11-03', 'Finance'),
('Victor Wright', 102, 65000.00, '2019-01-18', 'Marketing'),
('Wendy Hill', 103, 77000.00, '2017-10-09', 'Engineering'),
('Xander Green', 104, 51000.00, '2021-05-06', 'Human Resources'),
('Yara Adams', 105, 57000.00, '2022-03-01', 'Sales'),
('Zane Baker', 101, 60000.00, '2020-04-29', 'Finance'),
('Ava Nelson', 102, 66000.00, '2018-09-07', 'Marketing'),
('Ben Carter', 103, 78000.00, '2017-06-18', 'Engineering'),
('Cara Mitchell', 104, 52000.00, '2021-10-12', 'Human Resources'),
('Derek Perez', 105, 58000.00, '2022-08-15', 'Sales');


SELECT * FROM jobholder

SELECT max(salary) from jobholder WHERE department_name = 'Human Resources'

SELECT employee_name, salary FROM jobholder WHERE salary > (SELECT max(salary) from jobholder WHERE department_name = 'Human Resources')


SELECT *, (SELECT sum(salary) from jobholder) FROM jobholder

SELECT department_name, sum(salary) FROM jobholder GROUP BY department_name


SELECT * FROM (SELECT department_name, sum(salary) as s FROM jobholder GROUP BY department_name) as sum_of_salary

SELECT s FROM (SELECT department_name, sum(salary) as s FROM jobholder GROUP BY department_name) as sum_of_salary

SELECT employee_name, salary FROM jobholder 
WHERE department_name IN 
(SELECT department_name from jobholder WHERE department_name LIKE '%R%')
