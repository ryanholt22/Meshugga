var db = require("../models");

module.exports = {
  postExampleApi: async function(req, res) {
    const dbExample = await db.Submission.create(req.body);
    res.json(dbExample);
  },

  api: function(app) {
    // Get all examples
    app.get("/api/examples", function(req, res) {
      db.Submission.findAll({}).then(function(dbExamples) {
        console.log("String here", dbExamples);
        res.render("index", dbExamples);
        // res.json(dbExamples);
      });
    });

    // Create a new example
    app.post("/api/examples", this.postExampleApi);

    // Delete an example by id
    app.delete("/api/examples/:id", function(req, res) {
      db.Submission.destroy({ where: { id: req.params.id } }).then(function(
        dbExample
      ) {
        res.json(dbExample);
      });
    });
  }
};
