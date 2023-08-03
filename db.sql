-- create the table DDL (database definition language) 
create table greetings(
id integer PRIMARY KEY AUTOINCREMENT,
language text,
greeting text
);

-- DML (database manipulation language)

select * from greetings;
select count(*) from greetings;

insert into greetings (language, greeting) values('Zulu', 'Sawubona');
insert into greetings (language, greeting) values('SeSetho', 'Dumelang');
insert into greetings (language, greeting) values('TshiVenda', 'Nda');

delete from greetings where id > 1