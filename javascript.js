// 固定ヘッダーとbodyの開始位置関係
$(window).on('load resize', function(){
    var height = $('.navbar').height();
    $('body').css('padding-top',height); 
});

// ナビバーを閉じる：ナビバークリック時
$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});

// ナビバーを閉じる：ナビバー以外クリック時
$(document).on('click touchstart', function(event) {
    if (!$(event.target).closest('#top-head').length) {
        $(".navbar-collapse").collapse('hide');
    }
});

// 指定位置までスクロールする：ナビバークリック時
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
        }
    });
})

// Googleフォーム
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


var current_scrollY;

// OPEN MODAL
$( ".btn" ).on( "click", function(){
  current_scrollY = $( window ).scrollTop(); 
  $( "#show" ).css( {
    position: "fixed",
    width: "100%",
    top: -1 * current_scrollY
  } );

  $( "#myModal2" ).show();

} );

// CLOSE
$( "#myModal2" ).on( "click", function( e ){
  if ( e.target.tagName.toLowerCase() === 'section' ){
    $( "#show" ).attr( { style: "" } );
    $( "html, body" ).prop( { scrollTop: current_scrollY } );
    $( this ).hide();
  }
} );



