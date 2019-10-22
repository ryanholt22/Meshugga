var axios = require("axios");
var search = "Van Gogh";
// Calling images and art information from The Met

function Art(search) {
  var query =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=" +
    search;
  axios.get(query).then(function(response) {
    var artArr = response.data.objectIDs;
    var imgArr = [];
    var callCount = 0;
    for (var i = 0; i < artArr.length; i++) {
      var imgQuery =
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        artArr[i];
      axios.get(imgQuery).then(function(res) {
        imgArr.push(res.data.primaryImage);
        callCount++;
        if (callCount === artArr.length) {
          console.log(imgArr);
        }
      });
    }
  });
}

module.exports = Art(search);

