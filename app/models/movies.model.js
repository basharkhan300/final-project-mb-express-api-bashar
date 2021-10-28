module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define("movies", {
      Title: {
        type: Sequelize.STRING,
    },
    Desc: {
        type: Sequelize.STRING,
    
    },
    Production: {
        type: Sequelize.STRING,
        
      },

      Genre: {
        type: Sequelize.STRING,
        
      },

      Ratings: {
        type: Sequelize.FLOAT,
        
      },
      director_id:{
          type:Sequelize.INTEGER,
      }

      
    }, {
      timestamps: false
  });
  
    return Movies;
  };
  