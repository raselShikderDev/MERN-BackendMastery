select * from jobholder

CREATE FUNCTION get_count()
RETURNS INT
LANGUAGE SQL
AS
$$
    SELECT count(*) FROM jobholder
$$

SELECT get_count();


CREATE FUNCTION delete_id(rmv_id INT)
RETURNS void
LANGUAGE SQL
AS
$$
    DELETE FROM jobholder WHERE rmv_id = jobholder.employee_id
$$

SELECT delete_id(4);