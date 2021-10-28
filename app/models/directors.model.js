module.exports = (sequelize, Sequelize) => {
    const Directors = sequelize.define("directors", {
      name: {
        type: Sequelize.STRING,
    },
    oscar: {
        type: Sequelize.INTEGER,
    
    },
    producer: {
        type: Sequelize.BOOLEAN,
        
      },

      
    }, {
      timestamps: false
  });
  
    return Directors;
  };
  