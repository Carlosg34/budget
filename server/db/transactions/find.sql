select * from transactions
where user_id = ${userId}
and in_account_id = ${accountId}
or out_account_id = ${accountId};
-- and (in_date >= ${fromDate} or out_date >= ${fromDate})
-- and (in_date <= ${toDate} or out_date <= {$toDate});
