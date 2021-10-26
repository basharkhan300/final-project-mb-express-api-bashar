const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.URL, {
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// To test the connection
sequelize.authenticate()
.then(() => console.log(`Database connected..`))
.catch((err) => console.log(`Error: ${err}`))

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require("./movies.model")(sequelize, Sequelize);

module.exports = db;