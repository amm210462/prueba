var slide = $(".slide");
if (slide.length) {
var pagination = $("#pagination");
var next = $("#next");
pagination.text("1 / " + slide.length);
var counter = 0;
if (slide.length === 1) {
  next.addClass("disabled");
}
next.on("click", function() {
  $(slide[counter]).addClass("hidden-slide");
  counter++;
  $(slide[counter]).removeClass("hidden-slide");
  pagination.text(counter+1 + " / " + slide.length);
  if (counter === 1) {
    $("#prev").removeClass("disabled");
  }
  if (counter === slide.length-1) {
    $(this).addClass("disabled");
  }
});
$("#prev").on("click", function() {
  if (counter === slide.length-1) {
    next.removeClass("disabled")
  }
  $(slide[counter]).addClass("hidden-slide");
  counter--;
  $(slide[counter]).removeClass("hidden-slide");
  pagination.text(counter+1 + " / " + slide.length);
  if (counter === 0) {
    $(this).addClass("disabled")
  }
});
}