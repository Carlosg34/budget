const loadSqlFile = require('../loadSqlFile')

var seed = loadSqlFile(__dirname, './seed.sql')

module.exports = (rep, pgp) => {
  return () => rep.none(seed)
}
