
var slideIndex = 0;
// showSlides();
// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides1");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
//   }  
function reset () {
   $("#toggleCSS").attr("href", "alertify.default.css");
   
   alertify.set({
      labels : {
         ok     : "OK",
         cancel : "Cancel"
      },
      delay : 5000,
      buttonReverse : false,
      buttonFocus   : "ok"
   });
}
  $("#confirm").on( 'click', function () {   
     reset();
   alertify.confirm("This is a confirm dialog", function (e) {
      if (e) {
         alertify.success("You've clicked OK");
      } else {
         alertify.error("You've clicked Cancel");
      }
   });
   
   return false;
});