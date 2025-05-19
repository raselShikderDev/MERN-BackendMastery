CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) UNIQUE NOT NULL
)

INSERT INTO users(id, username)
VALUES
(1, 'user1'),
(2, 'user2'),
(3, 'user3'),
(4, 'user4'),
(5, 'user5')

SELECT * FROM users

ALTER TABLE users
RENAME COLUMN id TO user_id;


CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    title TEXT,
    user_id INTEGER REFERENCES users(user_id)
)

INSERT INTO posts (title, user_id) VALUES
( 'Getting started with PostgreSQL', 3),
( 'Understanding JOIN operations', 5),
( 'Building REST APIs with Node.js', 1),
( 'How to optimize SQL queries', 4),
( 'A guide to database indexing', 2);

SELECT * FROM posts

SELECT * FROM posts
WHERE user_id = 4

ALTER TABLE users
ADD COLUMN post_id INTEGER REFERENCES posts(post_id)

SELECT * FROM posts
where username = 'user3'


UPDATE users SET post_id = 1 WHERE user_id = 3;
UPDATE users SET post_id = 2 WHERE user_id = 5;
UPDATE users SET post_id = 3 WHERE user_id = 1;
UPDATE users SET post_id = 4 WHERE user_id = 4;
UPDATE users SET post_id = 5 WHERE user_id = 2;




-- Deletion constraint on DELETE user
-- Cascading Deletion -> ON DELETE CASCADE
-- Setting NULL -> ON DELETE SET NULL
-- Restrict Deletion -> ON DELETE RESTRICT / ON DELETE NO ACTION (default)
-- Set Default value -> ON DELETE SET DEFAULT

