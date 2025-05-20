SELECT * from users

SELECT * from posts

 ------ Inner Join Table -------

SELECT title, username FROM posts
JOIN users ON posts.user_id = users.user_id

SELECT * FROM posts
JOIN users ON posts.user_id = users.user_id;

SELECT users.user_id FROM posts
JOIN users ON posts.user_id = users.user_id

SELECT users.user_id FROM posts
JOIN users ON posts.user_id = users.user_id

SELECT users.user_id FROM posts
INNER JOIN users ON posts.user_id = users.user_id



SELECT * FROM users
INNER JOIN posts ON users.user_id = posts.user_id

INSERT INTO posts(post_id, title, user_id)
VALUES
(6, 'This is test titile', NULL)




----- left join tbale ------

SELECT * FROM posts as p
LEFT JOIN users ON p.user_id = users.user_id




----- left join tbale ------

INSERT INTO users(user_id, username, post_id)
VALUES
( 6, 'user6', NULL)

SELECT * FROM users as u
RIGHT JOIN posts as p ON u.user_id = p.user_id