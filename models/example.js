//code by Kelly - inserted by chris
module.exports = function(sequelize, DataTypes) {
  var Submission = sequelize.define("Submission", {
    artpiece_link: DataTypes.STRING
    //updatedAt: DataTypes.DATE,
    //createdAt: DataTypes.DATE,
  });
  return Submission;
};
