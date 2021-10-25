module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define("movies", {
      title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    production: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
      }
    });
  
    return Movies;
  };
  