module.exports = app => {
    const directors = require("../controllers/directors.controller");
  
    var router = require("express").Router();
  
      // Retrieve all directors
    router.get("/getDirectors", directors.findAllDirectors);
    
      // Retrieve all Movies
    router.get("/getMovies",directors.findAllMovies)
    
      // Retrieve all directors alng with movies
    router.get("/getDirectorAndMovie",directors.findAllDirectorAndMovie)
    
    // Create a new director
    router.post("/createDirector",directors.createDirector)
    
    // Create a new movie
    router.post("/createMovie/:id",directors.createMovie)
    
    // Retrieve a director with Id
    router.get('/getOneDirector/:id', directors.findOneDirector);
    
    // Retrieve a movie with Id
    router.get('/getOneMovie/:id', directors.findOneMovie);
    
    
    // Update a director with Id
    router.put("/updateDirector/:id", directors.updateDirector)
    
    // Update a Movie with Id
    router.put("/updateMovie/:id", directors.updateMovie)
    
    
    // Delete a director with id
    router.delete("/deleteDirector/:id", directors.deleteDirector);
    
    
    // Delete a movie with id
    router.delete("/deleteMovie/:id", directors.deleteMovie);
    
    
    // router.post("/", directors.create);
    
    //       // Retrieve all crime genre
    //       router.get("/condition", directors.findAllCondition)
    
    //   // Retrieve a single Movie with id
    //   router.get('/:id', directors.findOne);

    
  //   // Update a movie with Id
  //   router.put("/:id", directors.update)

  //   // Delete a movie with id
  //   router.delete("/:id", directors.delete);

    

  
    app.use('/api', router);
  };