select * from users
where lower(username) = lower(${username});
