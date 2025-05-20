SELECT * FROM jobholder

CREATE VIEW get_max_salary
AS
SELECT max(salary) FROM jobholder

SELECT * FROM get_max_salary