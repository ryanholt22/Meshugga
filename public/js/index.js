$(function() {
  // $(".carousel").carousel({
  //     interval: 2000
  // });
  console.log("index.js is working and linked.");
  $("#art-sub").on("click", e => {
    e.preventDefault();
    let artist = $("#artist-find")
      .val()
      .trim();
    console.log(artist);
    $.post(
      "/api/gallery",
      $("#artist-find")
        .val()
        .trim(),
      data => {
        var artArr = data;
        console.log(artArr);
      }
    );
  });
});
