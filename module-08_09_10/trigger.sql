CREATE TABLE my_users(
    user_name VARCHAR(50),
    email VARCHAR(100)
)

INSERT INTO my_users(user_name, email) 
VALUES('Rasel', 'rasel@gmail.com')

SELECT * FROM my_users


CREATE TABLE deleted_user_log(
    deleted_user_name VARCHAR(50),
    deleted_at TIMESTAMP
);

SELECT * FROM deleted_user_log


CREATE OR REPLACE FUNCTION create_myusers_deletion()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
    BEGIN
        INSERT INTO deleted_user_log(deleted_user_name, deleted_at) 
        VALUES(OLD.user_name, now());
        RAISE NOTICE 'Deleted user log is created';
        RETURN OLD;
    END
$$


CREATE OR REPLACE TRIGGER log_myusers_delete
BEFORE DELETE ON my_users
FOR EACH ROW
EXECUTE FUNCTION create_myusers_deletion();



DELETE FROM my_users WHERE user_name = 'Rasel';


drop TABLE my_users
