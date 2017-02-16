update users set
  email=coalesce(${email}, email),
  password=coalesce(${password}, password)
where id=${id}
returning id;
