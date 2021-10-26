const db = require("../models");
const Movie = db.movies;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Movie
  const movie = {
    title: req.body.title,
    description: req.body.description,
    production: req.body.production,
    Director: req.body.Director,
    Genre: req.body.Genre,
    Ratings: req.body.Ratings,
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

// Retrieve all Movies from the database.

exports.findAll = (req, res) => {
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


// Retrieve single movie from database with id

exports.findOne = (req, res) => {
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

// Update column of the table in database for given id

exports.update = (req,res) => {
  const id = req.params.id;

  Movie.update(req.body, {
    where: { id: id },
  }).then((data) => {
    if(data == 1)
    res.send({
      message: `Updated successfully`
    });
    else 
    res.send({
      message: `Cannot update Movie with id=${id}.`
    });
  })
  .catch(err => {
    res.status(500).send({
      message: `Error updating movie with id=${id}`
    })
  })
};
