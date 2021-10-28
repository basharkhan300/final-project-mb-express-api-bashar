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

db.directors = require("./directors.model")(sequelize, Sequelize);
db.movies = require("./movies.model")(sequelize, Sequelize);

db.directors.hasMany(db.movies, {  foreignKey: "director_id",});
db.movies.belongsTo(db.directors, {
  foreignKey: "director_id",
  // as: "director",
});

module.exports = db;