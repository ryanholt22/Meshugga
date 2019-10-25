var Art = require("../../controller/art.js");

$(".carousel").carousel({
  interval: 2000
});

$("#search-artist-button").on("submit", function(e) {
  e.preventDefault();
  var search = $("#artist-input")
    .val()
    .trim();
  Art.handler(search);
});
