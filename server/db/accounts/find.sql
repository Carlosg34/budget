select accounts.* from accounts
where user_id = ${userId}
-- left join transactions
-- on (transactions.in_account_id = accounts.id or transactions.out_account_id = accounts.id)
