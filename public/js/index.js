var Art = require("../../controller/art.js");

$(".carousel").carousel({
  interval: 2000
});

$("#artSubmit").on("click", function(e) {
  e.preventDefault();
  var search = $("#artGalleryQuery")
    .val()
    .trim();
});
