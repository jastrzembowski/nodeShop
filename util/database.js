// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '13434135'
// })

// module.exports = pool.promise();

const Sequelize = require('sequelize').Sequelize

const sequelize = new Sequelize("node-complete", "root", "13434135", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
