'use strict'

var repos = {
  init: require('./init'),
  seed: require('./seed'),
  users: require('./users'),
}

var options = {
  extend: obj => {
    for (var r in repos) {
      obj[r] = repos[r](obj, pgp)
    }
  },

  // disconnect: function(client, dc) {
  //   var cp = client.connectionParameters
  //   console.log("Disconnecting from database: ", cp.database)
  // },

  error: function (error, e) {
    console.log('error event:', error)
  }

}

// Database connection parameters:
var config = {
    host: 'localhost',
    port: 5432,
    database: 'budget',
    user: 'postgres'
}

// Load and initialize pg-promise:
var pgp = require('pg-promise')(options)

console.log('Connecting to database')
// Create the database instance:
var db = pgp(config)

pgp.pg.defaults.poolSize = 2

module.exports = db
