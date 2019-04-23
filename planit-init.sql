---
--- Drop tables if they already exist so we can update data
---
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;

---
--- Create tables to store all our data
---
CREATE TABLE users (
	user_id integer PRIMARY KEY,
	email varchar(40) NOT NULL,
	password varchar(40) NOT NULL,
	first_name varchar(20),
	last_name varchar(20),
	events integer[]
);

CREATE TABLE events (
	event_id integer PRIMARY KEY,
	due_date date NOT NULL,
	creator_id integer NOT NULL,
	title varchar(40) NOT NULL,
	reminder date,
	description varchar(140)
);

---
--- Populate our tables with dummy data
---
INSERT INTO events VALUES(1, to_date('01012020', 'MMDDYYYY'), 1, 'Math', to_date('12312019', 'MMDDYYYY'), 'a+b=c');
INSERT INTO events VALUES(2, to_date('01052020', 'MMDDYYYY'), 1, 'History', to_date('12312019', 'MMDDYYYY'), 'old dead white people');
INSERT INTO events VALUES(3, to_date('01082020', 'MMDDYYYY'), 1, 'Algorithms :(', to_date('12312019', 'MMDDYYYY'), 'voluntarily kill yourself slowly and painfully');
INSERT INTO events VALUES(4, to_date('01122020', 'MMDDYYYY'), 1, 'Science', to_date('12312019', 'MMDDYYYY'), 'study the moon');
INSERT INTO events VALUES(5, to_date('01162020', 'MMDDYYYY'), 1, 'Creative Writing', to_date('12312019', 'MMDDYYYY'), 'write a poem');

INSERT INTO users VALUES(1, 'sage@test.test', 'secret', 'Sage', 'Garrett', '{1,3,5}');
INSERT INTO users VALUES(2, 'sara@test.test', 'secret', 'Sarah', 'Schwallier', '{2,3,5}');
INSERT INTO users VALUES(3, 'ryan@test.test', 'secret', 'Ryan', 'Than', '{1,4,5}');
INSERT INTO users VALUES(4, 'josh@test.test', 'secret', 'Josh', 'Paup', '{1,2,5}');
INSERT INTO users VALUES(5, 'alan@test.test', 'secret', 'Alan', 'Paradise', '{1,2,3,4,5}');