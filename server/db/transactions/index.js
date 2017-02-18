const loadSqlFile = require('../loadSqlFile')

const find = loadSqlFile(__dirname, './find.sql')
// const create = loadSqlFile(__dirname, './create.sql')
// const edit = loadSqlFile(__dirname, './edit.sql')
// const remove = loadSqlFile(__dirname, './remove.sql')


module.exports = (rep, pgp) => {
  return {
    find: (username, fromDate, toDate) =>
      rep.any(find, {userId: userId, fromDate: fromDate, toDate: toDate})
  }
}
