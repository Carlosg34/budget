insert into users (username, password, email, role) values ('test', 'test', 'test@test.com', 'admin');

insert into accounts (user_id, name, parent_id)
values
  (1, 'root', null),
    (1, 'accounts', 1),
      (1, 'chequeings', 2),
      (1, 'savings', 2),
      (1, 'mutual funds', 2),
    (1, 'expenses', 1),
      (1, 'entertainment', 6),
        (1, 'coffee', 7),
        (1, 'restaurants', 7);

insert into transactions (user_id, description, amount, out_account_id, out_date, in_account_id, in_date)
values
  (1, 'tim hortons', 245, 3, '01/01/2016', 8, '01/01/2016'),
  (1, 'bridgehead', 823, 3, '01/15/2016', 8, '01/01/2016'),
  (1, 'shawarma palace', 1832, 2, '01/01/2016', 9, '01/01/2016'),
  (1, 'tim hortons', 523, 2, '01/01/2016', 8, '01/01/2016'),
  (1, 'purple garden', 3886, 3, '01/01/2016', 9, '01/01/2016');
