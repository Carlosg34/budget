const loadSqlFile = require('../loadSqlFile')

const find = loadSqlFile(__dirname, './find.sql')
// const create = loadSqlFile(__dirname, './create.sql')
const update = loadSqlFile(__dirname, './update.sql')
// const remove = loadSqlFile(__dirname, './remove.sql')


module.exports = (rep, pgp) => {
  return {
    find: (userId, fromDate, toDate) =>
      rep.any(find, {
        userId: userId,
        fromDate: fromDate,
        toDate: toDate
      }),

    update: (id, values) =>
      rep.any(update, {
        id: id,
        date: values.date,
        description: values.description,
        inAccountId: values.inAccountId,
        outAccountId: values.outAccountId,
        amount: values.amount,
      })
  }
}
