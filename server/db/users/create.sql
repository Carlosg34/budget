insert into users(username, password, email, role)
values(${username}, ${password}, ${email}, ${role})
returning id;
