var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Submission.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        submissions: dbExamples
      });
    });
  });

  app.get("/gallery", function(req, res) {
    res.render("gallery");
  });

  // Load example page and pass in an example by id
  app.get("/artboard/:id", function(req, res) {
    db.Submission.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("artboard", {
        submissions: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
