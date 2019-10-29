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
        $("#imgReturn").append(
          "<div class='grid-item'><img src='" + artArr[i].img + "'></div>"
        );
      }
    });
  });
});
