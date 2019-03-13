const Pool = require('pg').Pool

const pool = new Pool({
    user: 'gabrielk',
    host: 'localhost',
    database: 'test',
    password: 'root',
    port: 5432,
})

module.exports = {

    insert: (user, callback) => {

        var query = 'INSERT INTO users (nome, email) VALUES ($1, $2)';
        var value = [user.name, user.email];
        pool.query(query, value, (err, res) => {
            if(err) throw err;
            callback(null, res.rows);
        })
    },

    findAll: (callback) => {

        var query = 'SELECT * FROM users';
        pool.query(query, (err, res) => {
            if(err) throw err;
            callback(res.rows);
        })
    }
}
