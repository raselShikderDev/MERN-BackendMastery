-- Active: 1747436690330@@127.0.0.1@5432@selectpractice
SELECT * FROM students

SELECT DISTINCT blood_group FROM students 

SELECT * FROM students 
WHERE country = 'USA'

SELECT * FROM students
where grade = 'A' and course = 'Physics'

SELECT * FROM students
where country = 'USA' OR country = 'Canada'

SELECT * FROM students
where (country = 'USA' OR country = 'Canada') AND age = 20

SELECT * FROM students
where age > 20 AND country = 'Canada'

SELECT * FROM students
where age != 20

SELECT * FROM students
where country <> 'USA'


