create schema Url;

create table url.full(
  id serial primary key,
  title text not null,
  title_short text,
  date timestamp default now()  
);