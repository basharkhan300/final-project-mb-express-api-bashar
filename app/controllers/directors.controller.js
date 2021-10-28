const db = require("../models");
const Director = db.directors;
const Movie = db.movies;




// Retrieve all Directors from the database.

exports.findAllDirectors = (req, res) => {
  Director.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};


// Retrieve all Movies from the database.

exports.findAllMovies = (req, res) => {
  Movie.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};



// Retrieve all directors along with all movies


exports.findAllDirectorAndMovie = (req, res) => {
  Director.findAll({
    include: [Movie],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};




// Create Directors

exports.createDirector = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Director
  const director = {
    name: req.body.name,
    oscar: req.body.oscar,
    producer: req.body.producer,
  };

  // Save Movie in the database
  Director.create(director)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Create movies


exports.createMovie = (req, res) => {
  // Validate request
  if (!req.body.Title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const movie = {
    Title: req.body.Title,
    Desc: req.body.Desc,
    Production: req.body.Production,
    Genre: req.body.Genre,
    Ratings: req.body.Ratings,
    director_id: req.params.id,
  };

  // Save Movie in the database
  Movie.create(movie)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};



// Retrieve single director from database with id

exports.findOneDirector = (req, res) => {
  const id = req.params.id;

  Director.findByPk(id)
    .then((data) => {
      if (data) res.send(data);
      else {
        res.status(404).send({
          message: `Cannot find Director with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Director with Id=${id}.`,
      });
    });
};




// Retrieve single Movie from database with id

exports.findOneMovie = (req, res) => {
  const id = req.params.id;

  Movie.findByPk(id)
    .then((data) => {
      if (data) res.send(data);
      else {
        res.status(404).send({
          message: `Cannot find Movie with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Movie with Id=${id}.`,
      });
    });
};


// Update  Director in database for given id

exports.updateDirector = (req, res) => {
  const id = req.params.id;

  Director.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      if (data == 1)
        res.send({
          message: `Updated successfully`,
        });
      else
        res.send({
          message: `Cannot update Director with id=${id}.`,
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating director with id=${id}`,
      });
    });
};





// Update  Movie in database for given id

exports.updateMovie = (req, res) => {
  const id = req.params.id;

  Movie.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      if (data == 1)
        res.send({
          message: `Updated successfully`,
        });
      else
        res.send({
          message: `Cannot update Movie with id=${id}.`,
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Movie with id=${id}`,
      });
    });
};


// Delete a director with given id

exports.deleteDirector = (req, res) => {
  const id = req.params.id;

  Director.destroy({
    where: { id: id },
  }).then((data) => {
    if (data == 1)
      res.send({
        message: `Director deleted successfully`,
      });
    else
      res
        .send({
          message: `Cannot delete Director with Id= ${id}. Director not found`,
        })
      })

        .catch((err) => {
          res.status(500).send({
            message: `Could not delete director with id= ${id}`,
          });
        });
};


// Delete a Movie with given id

exports.deleteMovie = (req, res) => {
  const id = req.params.id;

  Movie.destroy({
    where: { id: id },
  }).then((data) => {
    if (data == 1)
      res.send({
        message: `Movie deleted successfully`,
      });
    else
      res
        .send({
          message: `Cannot delete Movie with Id= ${id}. Movie not found`,
        })
      })

        .catch((err) => {
          res.status(500).send({
            message: `Could not delete Movie with id= ${id}`,
          });
        });
};












// Retrieve single director from database with id

// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Director.findByPk(id)
//     .then((data) => {
//       if (data) res.send(data);
//       else {
//         res.status(404).send({
//           message: `Cannot find Movie with id=${id}.`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: `Error retrieving Movie with Id=${id}.`,
//       });
//     });
// };

// // Update  table in database for given id

// exports.update = (req, res) => {
//   const id = req.params.id;

//   Director.update(req.body, {
//     where: { id: id },
//   })
//     .then((data) => {
//       if (data == 1)
//         res.send({
//           message: `Updated successfully`,
//         });
//       else
//         res.send({
//           message: `Cannot update Director with id=${id}.`,
//         });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: `Error updating director with id=${id}`,
//       });
//     });
// };

// // Delete a director with given id

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Director.destroy({
//     where: { id: id },
//   }).then((data) => {
//     if (data == 1)
//       res.send({
//         message: `Director deleted successfully`,
//       });
//     else
//       res
//         .send({
//           message: `Cannot delete Director with Id= ${id}. Director not found`,
//         })
//       })

//         .catch((err) => {
//           res.status(500).send({
//             message: `Could not delete director with id= ${id}`,
//           });
//         });
// };


// // Find by condition

// exports.findAllCondition = (req, res) => {

//   Director.findAll({
//     where: {Genre: 'Crime'}
//   })
//   .then((data) => {
//     res.send(data)
//   })
//   .catch((err) => {
//     res.status(500).send({
//       message: err.message || `Some error occured while retrieving movie`
//     })
//   })
  
// }
