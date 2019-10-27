const axios = require("axios");

// Calling images and art information from The Met
var Art = function(search) {
  let query =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=" +
    search;
  axios.get(query).then(function(response) {
    // console.log(response.data.objectIDs);
    let artArr = response.data.objectIDs;
    let imgArr = [];
    let callCount = 0;
    //console.log(artArr);
    artArr.forEach(function(item, index) {
      //console.log(index + " " + item);
      let imgQuery =
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        item;
      //console.log(imgQuery);
      axios.get(imgQuery).then(function(response) {
        imgArr.push(response.data.primaryImage);
        callCount++;
        if (callCount === artArr.length) {
          console.log(imgArr);
        }
      });
    });
  });
};

// tester
Art("jmw turner");

module.exports = Art;
