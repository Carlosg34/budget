const loadSqlFile = require('../loadSqlFile')

const findByUsername = loadSqlFile(__dirname, './findByUsername.sql')
const findByUsernameOrEmail = loadSqlFile(__dirname, './findByUsernameOrEmail.sql')
const create = loadSqlFile(__dirname, './create.sql')
// const edit = loadSqlFile(__dirname, './editUser.sql')
const remove = loadSqlFile(__dirname, './remove.sql')


module.exports = (rep, pgp) => {
  return {

    findAll: () => rep.query('select * from users'),

    findByUsername: (username) =>
      rep.one(findByUsername, {username: username}),

    findByUsernameOrEmail: (username, email) =>
      rep.any(findByUsernameOrEmail, {username: username, email: email}),

    create: (params) => rep.one(create, params),

    edit: (params) => rep.one(edit, params),

    remove: (id) => rep.result(remove, {id: id})
  }
}
