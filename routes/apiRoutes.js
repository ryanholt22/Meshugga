var db = require("../models");
var axios = require("axios");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/gallery", function(req, res) {
    var search = req.body.artName;
    console.log(req.body.artName);
    let query =
      "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&artistOrCulture=true&q=" +
      search;
    axios.get(query).then(function(response) {
      // console.log(response.data.objectIDs);
      let artArr = response.data.objectIDs;
      artArr = artArr.splice(0, 50);
      let imgArr = [];
      let callCount = 0;
      console.log(artArr);
      artArr.forEach(function(item, index) {
        console.log(index + " " + item);
        let imgQuery =
          "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
          item;
        console.log(imgQuery);
        axios.get(imgQuery).then(function(response) {
          imgArr.push({ img: response.data.primaryImageSmall, imgId: item });
          callCount++;
          if (callCount === artArr.length) {
            imgArr.sort(function(a, b) {
              return a.imgId - b.imgId;
            });
            console.log(imgArr);
            res.send(imgArr);
          }
        });
      });
    });
  });
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
