module.exports = app => {
    const movies = require("../controllers/movies.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
  router.post("/", movies.create);

    // Retrieve all Tutorials
    router.get("/", movies.findAll);
    
  
  
    app.use('/api/movies', router);
  };