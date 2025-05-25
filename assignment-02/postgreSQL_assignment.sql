-- Active: 1747436690330@@127.0.0.1@5432@assignment_02
CREATE TABLE rangers(
    ranger_id SERIAL UNIQUE NOT NULL,
    name VARCHAR(120) NOT NULL,
    region VARCHAR(120) NOT NULL
)

SELECT * FROM rangers;

DROP TABLE rangers

INSERT INTO rangers(name, region) VALUES
('Meera Singh', 'North Zone'),
('Arjun Das', 'South Zone'),
('Lina Roy', 'East Zone'),
('Rahul Ahmed', 'West Zone'),
('Kavita Joshi', 'Central Zone'),
('Imran Hossain', 'Northwest Zone'),
('Nila Khatun', 'Southeast Zone'),
('Ramesh Babu', 'Southwest Zone'),
('Faria Akter', 'Northeast Zone'),
('Dev Raj', 'Wildlife Reserve');




CREATE TABLE species(
    species_id SERIAL UNIQUE NOT NULL,
    common_name VARCHAR(150) NOT NULL,
    scientific_name VARCHAR(150) NOT NULL,
    discovery_date DATE NOT NULL,
    conservation_status VARCHAR(25) NOT NULL
)

SELECT * FROM species;

DROP TABLE species


INSERT INTO species(common_name, scientific_name, discovery_date, conservation_status) VALUES
('Shadow Leopard', 'Panthera pardus shadowi', '1995-07-12', 'Endangered'),
('Golden Langur', 'Trachypithecus geei', '1988-05-03', 'Vulnerable'),
('Forest Eagle', 'Aquila sylvestris', '1976-11-22', 'Vulnerable'),
('Dusky Tortoise', 'Testudo obscura', '2001-04-10', 'Endangered'),
('Blue River Dolphin', 'Inia geoffrensis', '1990-09-15', 'Endangered'),
('Spotted Hornbill', 'Buceros maculatus', '1985-12-05', 'Vulnerable'),
('Crimson Tree Frog', 'Litoria rubra', '1700-03-28', 'Vulnerable'),
('Marbled Gecko', 'Gekko marmoratus', '1999-08-14', 'Endangered'),
('Rusty Pangolin', 'Manis ferruginea', '1993-02-17', 'Endangered'),
('Twilight Bat', 'Myotis crepuscularis', '2010-06-30', 'Vulnerable');




CREATE TABLE sightings(
    sighting_id SERIAL UNIQUE NOT NULL,
    ranger_id INT NOT NULL REFERENCES rangers(ranger_id),
    species_id INT NOT NULL REFERENCES species(species_id),
    sighting_time TIMESTAMP NOT NULL,
    location VARCHAR(180) NOT NULL,
    notes TEXT
)

SELECT * FROM sightings

DROP TABLE sightings

INSERT INTO sightings(ranger_id, species_id, sighting_time, location, notes) VALUES
(1, 1, '2025-05-01 06:30:00', 'North Forest', 'Near riverbank at dawn'),
(2, 1, '2025-05-03 09:45:00', 'Pass Forest', 'Tracks found near campsite'),
(3, 1, '2025-05-07 17:20:00', 'North Forest', 'Seen hunting small mammals'),
(4, 7, '2025-05-02 11:15:00', 'East Hills', 'Resting on a large rock'),
(5, 2, '2025-05-10 08:50:00', 'Pass Hills', 'Moving through bushes'),
(6, 3, '2025-05-04 13:10:00', 'South Valley', 'Spotted near water source'),
(5, 4, '2025-05-05 15:00:00', 'West Plains', 'Group of three animals grazing'),
(8, 4, '2025-05-15 16:30:00', 'West Plains', 'Fresh footprints found'),
(9, 6, '2025-05-06 07:55:00', 'Central Reserve', 'Observed vocalizing'),
(10, 7, '2025-05-08 18:45:00', 'Southwest Lake', 'Near water at dusk'),
(1, 7, '2025-05-11 05:40:00', 'Southwest Lake', 'Fishing behavior noted'),
(2, 7, '2025-05-14 20:15:00', 'Southwest Pass', 'Mating call recorded'),
(3, 8, '2025-05-09 10:05:00', 'Northeast Meadow', 'Solitary individual'),
(4, 9, '2025-05-12 12:30:00', 'Pass Forest', 'Nest found'),
(5, 9, '2025-05-16 14:55:00', 'Southeast Forest', 'Young ones spotted')



-------
-------
-------
-------
-------


INSERT INTO species (common_name, scientific_name, discovery_date, conservation_status) VALUES
('Shadow Leopard',      'Panthera umbra',         '2001-04-12', 'Endangered'),
('Crimson Macaw',       'Ara rubra',              '1999-06-05', 'Vulnerable'),
('Golden Cobra',        'Naja aurum',             '2005-09-23', 'Critically Endangered'),
('Blue Horned Toad',    'Anaxyrus ceruleus',      '2010-02-14', 'Vulnerable'),
('Jungle Lynx',         'Lynx silvestris',        '1995-11-07', 'Near Threatened'),
('Dusky Falcon',        'Falco obscurus',         '2003-07-18', 'Endangered'),
('Spotted Pangolin',    'Manis maculata',         '1998-03-29', 'Endangered'),
('Snow Ridge Wolf',     'Canis montis',           '2008-12-10', 'Critically Endangered'), -- ❌ not sighted
('Coral Python',        'Python corallus',        '2012-08-21', 'Vulnerable'),             -- ❌ not sighted
('Marsh Deer',          'Blastocerus dichotomus', '2006-01-15', 'Vulnerable');             -- ❌ not sighted



INSERT INTO sightings (ranger_id, species_id, sighting_time, location, notes) VALUES
(1, 1, '2024-04-10', 'Zone A', 'Seen near riverbank'),
(2, 2, '2024-04-11', 'Zone B', 'Loud calls heard'),
(3, 3, '2024-04-12', 'Zone C', 'Active at dusk'),
(4, 4, '2024-04-13', 'Zone A', 'Near breeding pond'),
(1, 5, '2024-04-14', 'Zone B', 'Tracked for 2 km'),
(2, 6, '2024-04-15', 'Zone C', 'Soaring above cliffs'),
(3, 7, '2024-04-16', 'Zone A', 'Foraging on forest floor');




--- Problem 01
INSERT INTO rangers(name, region) VALUES ('Derek Fox', 'Coastal Plains')


--- Problem 02
SELECT count(DISTINCT species_id) as uniqe_species FROM sightings


--- Problem 03
SELECT * FROM sightings
WHERE location ILIKE '%Pass%'


--- Problem 04
SELECT name, count(DISTINCT sightings.sighting_id) as total_sightings FROM sightings
JOIN rangers ON sightings.ranger_id = rangers.ranger_id
GROUP BY name



-- --- Problem 05 
SELECT common_name FROM species
FULL JOIN sightings ON species.species_id = sightings.species_id
WHERE sighting_id IS NULL
GROUP BY common_name



--- Problem 06
SELECT common_name, sighting_time, name FROM sightings
JOIN rangers ON rangers.ranger_id = sightings.ranger_id
JOIN species ON species.species_id = sightings.species_id
ORDER BY sighting_time ASC LIMIT 2



--- Problem 07 
UPDATE species 
SET conservation_status = 'Historic'
WHERE 1800 > extract(YEAR FROM discovery_date)




--- Problem 08
SELECT sighting_id,
CASE 
    WHEN TO_CHAR(sighting_time, 'HH24:MI') BETWEEN '00:00' AND '11:59' THEN  'Morning'
    WHEN TO_CHAR(sighting_time, 'HH24:MI') BETWEEN '12:00' AND '16:59' THEN  'Afternoon'
    WHEN TO_CHAR(sighting_time, 'HH24:MI') BETWEEN '17:00' AND '23:59' THEN  'Evening'

    ELSE  'Time Not Matched'
END AS time_of_day
FROM sightings 



-- Problem 09️
DELETE FROM rangers
WHERE ranger_id NOT IN (SELECT ranger_id FROM sightings)
