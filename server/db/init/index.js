const loadSqlFile = require('../loadSqlFile')

var initSql = loadSqlFile(__dirname, './init.sql')

module.exports = (rep, pgp) => {
  return () => rep.none(initSql)
}
