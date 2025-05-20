SELECT * FROM students


SELECT * FROM students
WHERE country NOT IN('UK', 'USA', 'Canada')

SELECT * FROM students LIMIT 5 OFFSET 5 * 0;
SELECT * FROM students LIMIT 5 OFFSET 5 * 1;
SELECT * FROM students LIMIT 5 OFFSET 5 * 2;
SELECT * FROM students LIMIT 5 OFFSET 5 * 3;
SELECT * FROM students LIMIT 5 OFFSET 5 * 4;



DELETE FROM students
WHERE grade = 'A-'

DELETE FROM students
WHERE grade = 'A-' AND country = 'USA'

UPDATE students 
SET email = 'default@gmail.com'
WHERE age BETWEEN 18 AND 20

UPDATE students 
SET email = 'older@gmail.com', grade = 'C+'
WHERE age > 20
