

$(document).ready(function() {
    $(".hello-image").hover(
      function() {
        $(this).attr("src", "./images/button headshot image.png");
      },
      function() {
        $(this).attr("src", "./images/button hello black.png");
      }
    );
  });


$(document).ready(function() {
    $(".resume-image").hover(
      function() {
        $(this).attr("src", "./images/button resume icon.png");
      },
      function() {
        $(this).attr("src", "./images/button resume blue.png");
      }
    );
  });

  
$(document).ready(function() {
    $(".email-image").hover(
      function() {
        $(this).attr("src", "./images/button email icon.png");
      },
      function() {
        $(this).attr("src", "./images/button email black.png");
      }
    );
  });

  
$(document).ready(function() {
    $(".linkedin-image").hover(
      function() {
        $(this).attr("src", "./images/button linkedin icon.png");
      },
      function() {
        $(this).attr("src", "./images/button linkedin blue.png");
      }
    );
  });

  
$(document).ready(function() {
    $(".phone-image").hover(
      function() {
        $(this).attr("src", "./images/button phone icon.png");
      },
      function() {
        $(this).attr("src", "./images/button phone sienna.png");
      }
    );
  });



// Slideshow
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}