$("#img1").click(function () {
  $(".m2").hide();
  $(".m3").hide();
  $(".m4").hide();
  $(".m5").hide();
  $(".m6").hide();
  $(".m7").hide();
  $(".m8").hide();
  $(".m9").hide();
  $(".m10").hide();
  $(".m1").show();
});

$("#img2").click(function () {
  $(".m1").hide();
  $(".m3").hide();
  $(".m4").hide();
  $(".m5").hide();
  $(".m6").hide();
  $(".m7").hide();
  $(".m8").hide();
  $(".m9").hide();
  $(".m10").hide();
  $(".m2").show();
});

$("#img3").click(function () {
  $(".m1").hide();
  $(".m2").hide();
  $(".m4").hide();
  $(".m5").hide();
  $(".m6").hide();
  $(".m7").hide();
  $(".m8").hide();
  $(".m9").hide();
  $(".m10").hide();
  $(".m3").show();
});

$("#img4").click(function () {
  $(".m2").hide();
  $(".m3").hide();
  $(".m1").hide();
  $(".m5").hide();
  $(".m6").hide();
  $(".m7").hide();
  $(".m8").hide();
  $(".m9").hide();
  $(".m10").hide();
  $(".m4").show();
});

$("#img5").click(function () {
  $(".m2").hide();
  $(".m3").hide();
  $(".m4").hide();
  $(".m1").hide();
  $(".m6").hide();
  $(".m7").hide();
  $(".m8").hide();
  $(".m9").hide();
  $(".m10").hide();
  $(".m5").show();
});

$("#img6").click(function () {
  $(".m2").hide();
  $(".m3").hide();
  $(".m4").hide();
  $(".m5").hide();
  $(".m1").hide();
  $(".m7").hide();
  $(".m8").hide();
  $(".m9").hide();
  $(".m10").hide();
  $(".m6").show();
});

$("#img7").click(function () {
  $(".m2").hide();
  $(".m3").hide();
  $(".m4").hide();
  $(".m5").hide();
  $(".m6").hide();
  $(".m1").hide();
  $(".m8").hide();
  $(".m9").hide();
  $(".m10").hide();
  $(".m7").show();
});

$("#img8").click(function () {
  $(".m2").hide();
  $(".m3").hide();
  $(".m4").hide();
  $(".m5").hide();
  $(".m6").hide();
  $(".m7").hide();
  $(".m1").hide();
  $(".m9").hide();
  $(".m10").hide();
  $(".m8").show();
});

$("#img9").click(function () {
  $(".m2").hide();
  $(".m3").hide();
  $(".m4").hide();
  $(".m5").hide();
  $(".m6").hide();
  $(".m7").hide();
  $(".m8").hide();
  $(".m1").hide();
  $(".m10").hide();
  $(".m9").show();
});

$("#img10").click(function () {
  $(".m2").hide();
  $(".m3").hide();
  $(".m4").hide();
  $(".m5").hide();
  $(".m6").hide();
  $(".m7").hide();
  $(".m8").hide();
  $(".m9").hide();
  $(".m1").hide();
  $(".m10").show();
});

$("#all").click(function () {
  $("#all").css("background", "black");
  $("#all").css("color", "white");
  $("#featured").css("background", "white");
  $("#featured").css("color", "black");
  $("#latest").css("background", "white");
  $("#latest").css("color", "black");

  $(".All_frame").attr("src", "D:/ALTEK/apollo/Home/youtube_anchors.html");
});

$("#featured").click(function () {
  $("#all").css("background", "white");
  $("#all").css("color", "black");
  $("#featured").css("background", "black");
  $("#featured").css("color", "white");
  $("#latest").css("background", "white");
  $("#latest").css("color", "black");

  $(".All_frame").attr(
    "src",
    "D:/ALTEK/apollo/Home/youtube_anchors_featured.html"
  );
});

$("#latest").click(function () {
  $("#all").css("background", "white");
  $("#all").css("color", "black");
  $("#featured").css("background", "white");
  $("#featured").css("color", "black");
  $("#latest").css("background", "black");
  $("#latest").css("color", "white");

  $(".All_frame").attr("src", "D:/ALTEK/apollo/Home/youtube_anchors.html");
});

$("#search_arrow").click(function () {
  $(".search_lists").css("display", "flex");
});

$("#search_arrow").click(function () {
  $(".search_lists").css("display", "hide");
});
