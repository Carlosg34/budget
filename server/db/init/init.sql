create table if not exists users (
    id serial primary key,
    username varchar(12) unique not null,
    password varchar(255) not null,
    email varchar(254) unique not null,
    role varchar(10) not null default 'user',
    created_at timestamp default NOW()
);

create table if not exists accounts (
  id serial primary key,
  user_id int not null references users(id),
  name text not null,
  parent_id int references accounts(id),
  seq int references accounts(id)
);

create table if not exists transactions (
  id serial primary key,
  user_id int not null references users(id),

  description varchar(255) not null,
  amount int not null,
  date date not null,

  out_account_id int not null references accounts(id),
  in_account_id int not null references accounts(id)
);
