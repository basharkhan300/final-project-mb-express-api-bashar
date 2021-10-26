module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define("movies", {
      title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    
    },
    production: {
        type: Sequelize.STRING,
        
      },

      Director: {
        type: Sequelize.STRING,
        
      },

      Genre: {
        type: Sequelize.STRING,
        
      },

      Ratings: {
        type: Sequelize.INTEGER,
        
      },

    }, {
      timestamps: false
  });
  
    return Movies;
  };
  