var axios = require("axios");
var search = "Van Gogh";
// Calling images and art information from The Met
function Art(search) {
  var query =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" +
    search;
  axios.get(query).then(function(response) {
    response = response.data;
    query =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      response.objectIDs[0];
    axios.get(query).then(function(response) {
      console.log(response);
    });
  });
}

module.exports = Art(search);
