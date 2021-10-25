module.exports = {
    URL: 'postgres://ztabresg:Eo44wYEojdesSWBaUBb6pf94Wefe5tUs@fanny.db.elephantsql.com/ztabresg',
    HOST: "localhost",
    dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}