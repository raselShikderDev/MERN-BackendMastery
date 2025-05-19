-- aggregate - Provide singale value or DATA of all row
-- scaler - gives multiple data ( provide single pr a data for every single row)




--- Scaler function -----

SELECT upper(first_name) FROM students

SELECT upper(first_name) as first_name_upprcase FROM students

SELECT concat(first_name, ' ', last_name) FROM students

SELECT length(first_name) FROM students




----- AGGREGATE function ----

SELECT avg(age) FROM students

SELECT max(age) FROM students

SELECT min(age) FROM students

SELECT sum(age) FROM students

SELECT count(*) FROM students

SELECT max(length(first_name)) FROM students