module.exports = app => {
    const movies = require("../controllers/movies.controller");
  
    var router = require("express").Router();
  
    // Create a new movie
  router.post("/", movies.create);

    // Retrieve all movies
    router.get("/", movies.findAll);

    
        // Retrieve all crime genre
        router.get("/condition", movies.findAllCondition)

    // Retrieve a single Movie with id
    router.get('/:id', movies.findOne);

    
    // Update a movie with Id
    router.put("/:id", movies.update)

    // Delete a movie with id
    router.delete("/:id", movies.delete);

    
  
  
    app.use('/api/movies', router);
  };