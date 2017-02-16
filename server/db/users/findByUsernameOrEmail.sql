select * from users
where lower(username) = lower(${username})
or lower(email) = lower(${email});
