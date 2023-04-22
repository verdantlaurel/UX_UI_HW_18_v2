

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




// anchor link offset

// function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY -120);
  }
}

// captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // click events are captured before hashchanges
  // timeout causes offsetAnchor to be called after the page jump
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);