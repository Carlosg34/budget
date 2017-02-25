update transactions set
  date = coalesce(${date}, date),
  description = coalesce(${description}, description),
  in_account_id = coalesce(${inAccountId}, in_account_id),
  out_account_id = coalesce(${outAccountId}, out_account_id),
  amount = coalesce(${amount}, amount)
where id = ${id}
returning id;
