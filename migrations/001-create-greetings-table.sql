-- create the table DDL (database definition language) 
create table if not EXISTS greetings(
id integer PRIMARY KEY AUTOINCREMENT,
language text,
greeting text
);