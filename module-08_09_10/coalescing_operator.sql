SELECT * FROM students
WHERE NOT country = 'USA'

SELECT * FROM students

TRUNCATE TABLE students

SELECT * FROM students
WHERE email IS NOT NULL

SELECT COALESCE(email, 'email address is not found') as nthing FROM students
