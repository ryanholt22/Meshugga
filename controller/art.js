const axios = require("axios");
const search = "van gogh";
// Calling images and art information from The Met

function Art(search) {
  let query =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=" +
    search;
  axios.get(query).then(function(response) {
    // console.log(response.data.objectIDs);
    let artArr = response.data.objectIDs;
    artQuery(artArr);
  });
}

function artQuery(artArr) {
  let imgArr = [];
  let callCount = 0;
  imgArr.forEach(function() {
    let imgQuery =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      artArr;
    axios.get(imgQuery).then(function(res) {
      imgArr.push(res.data.primaryImage);
      callCount++;
      if (callCount === artArr.length) {
        console.log(imgArr);
      }
    });
  });
}

module.exports = Art(search);
