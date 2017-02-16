var QueryFile = require('pg-promise').QueryFile
var path = require('path')

function loadSqlFile(dir, file) {

    var fullPath = path.join(dir, file) // generating full path

    var options = {

        // minifying the SQL is always advised
        // see also option 'compress' in the API
        minify: true,

        // Showing how to use static pre-formatting parameters -
        // we have variable 'schema' in each SQL (as an example)
        params: {
            schema: 'public' // replace ${schema~} with "public"
        }
    }

    var qf = new QueryFile(fullPath, options)

    if (qf.error) {
        // Something is wrong with our query file :(
        // Testing all files through queries can be cumbersome,
        // so we also report it here, while loading the module:
        console.error(qf.error)
    }

    return qf

    // See QueryFile API:
    // http://vitaly-t.github.io/pg-promise/QueryFile.html
}

module.exports = loadSqlFile
