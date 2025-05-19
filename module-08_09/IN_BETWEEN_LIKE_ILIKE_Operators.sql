SELECT * FROM students


SELECT * FROM students
WHERE country = 'USA' OR country = 'Canada' OR country = 'UK'

SELECT * FROM students
WHERE country IN('UK', 'USA', 'Canada')

SELECT * FROM students
WHERE country NOT IN('UK', 'USA', 'Canada')

SELECT * FROM students
WHERE age BETWEEN 19 AND 22

SELECT * FROM students
WHERE dob BETWEEN '2001-01-01' AND '2004-01-01' ORDER BY dob

SELECT * FROM students
WHERE last_name LIKE '%wn'

SELECT * FROM students
WHERE last_name LIKE 'E%'

SELECT * FROM students
WHERE last_name LIKE '---r--'

SELECT * FROM students
WHERE last_name ILIKE 'a%'

SELECT * FROM students
WHERE last_name ILIKE '%b'