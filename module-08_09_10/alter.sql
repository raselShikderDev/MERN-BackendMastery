-- Active: 1747436690330@@127.0.0.1@5432@altertable
-- CREATE TABLE table1(
--     id SERIAL PRIMARY KEY,
--      user_name VARCHAR(20) UNIQUE NOT NULL,
--     phone INTEGER,
--     email VARCHAR(255) UNIQUE not NULL,
--     age INTEGER,
--     movie VARCHAR(50),
--     is_active BOOLEAN
-- );

ALTER TABLE table1
ADD CONSTRAINRT age CHECK (age => 18)


ALTER TABLE table1
ADD CONSTRAINT age_check CHECK (age >= 18);


INSERT INTO  table1 (id, user_name, phone, email, age, movie, is_active)
VALUES (5, 'rasel', 937292, 'rsl@gmail.com', 23, 'borbad', true)

ALTER TABLE table1 RENAME to userlist;

ALTER TABLE userlist
ADD gender VARCHAR(10);

ALTER TABLE userlist 
ADD COLUMN hudai VARCHAR(200);

ALTER TABLE userlist
RENAME gender TO status

SELECT * FROM userlist;

UPDATE userlist
SET status = 'filled'
WHERE status IS NULL;

alter TABLE userlist
DROP COLUMN hudai;

SELECT * FROM userlist

ALTER TABLE userlist
RENAME COLUMN movie TO movie_name;

SELECT * FROM userlist

ALTER TABLE userlist
ALTER COLUMN phone TYPE BIGINT

SELECT * FROM userlist

ALTER TABLE userlist
ALTER COLUMN phone SET NOT NULL;

SELECT * from userlist

alter TABLE userlist
DROP COLUMN status

ALTER TABLE userlist
ADD status BOOLEAN NOT NULL DEFAULT true

SELECT * FROM userlist

ALTER TABLE userlist
ALTER COLUMN status DROP NOT NULL

ALTER TABLE userlist
ALTER COLUMN status SET DEFAULT false;
select * FROM userlist


INSERT INTO  userlist (id, user_name, phone, email, age, movie_name, is_active)
VALUES (5, 'rasel2', 97292, 'rsl2@gmail.com', 23, 'borbad', true)

ALTER TABLE userlist
ADD constraint user_phone_uniqe UNIQUE(phone)

ALTER TABLE userlist
DROP constraint user_phone_uniqe

TRUNCATE TABLE table1

SELECT * FROM table1

DROP TABLE table1