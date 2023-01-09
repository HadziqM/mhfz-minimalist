drop table if exists discord;
drop table if exists discord_register;

create table discord(
	id serial,
	char_id int not null,
	discord_id varchar(255) not null,
	is_male boolean default True,
	bounty int,
  boostcd bigint NOT NULL default 0,
  newbie boolean NOT NULL default true,
	primary key(id)
);

create table discord_register(
	id serial,
	discord_id varchar(32) unique,
    user_id int,
    created_at timestamp without time zone default now(),
	primary key(id)
);

ALTER TABLE distribution ADD COLUMN IF NOT EXISTS bot boolean NOT NULL DEFAULT false; 

