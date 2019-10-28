$(function() {
  // $(".carousel").carousel({
  //     interval: 2000
  // });
  console.log("index.js is working and linked.");
  $("#art-sub").on("click", e => {
    e.preventDefault();
    let artist = {
      artName: $("#artist-find")
        .val()
        .trim()
    };
    console.log(artist);
    $.post("/api/gallery", artist, data => {
      $("#imgReturn").empty();
      var artArr = data;
      console.log(artArr);
      for (var i = 0; i < artArr.length; i++) {
        $("#imgReturn").append("<li><img src='" + artArr[i].img + "'></li>");
      }
    });
  });
});

var randomSlide = Math.floor(
  Math.random() * $("#carouselExampleSlidesOnly .carousel-inner li").size()
);

jQuery(document).ready(function($) {
  $("#carouselExampleSlidesOnly").carousel(randomSlide);
  $("#carouselExampleSlidesOnly").carousel("next");
});
