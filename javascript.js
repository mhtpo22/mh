$(document).ready(function () {
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})


$.ajax({
  url: "https://docs.google.com/forms/d/e/1FAIpQLSdsgmjHLG6M75OFwc2mMFnAruTbOKIV9C1jfjuuT9UR6EXu3g/formResponse",
  data: {"entry.2116052852": name},
  type: "POST",
  dataType: "xml",
  statusCode: {
    0: function() {
      //Success message
    },
    200: function() {
      //Success Message
    }
  }
})
