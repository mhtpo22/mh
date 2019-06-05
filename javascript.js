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
    $(".navbar a, .sub a ,footer a[href='#myPage']").on('click', function (event) {
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


    var state = false;
    $(".btn").click(function(){
      $("#myModal2").toggleClass("open");
      if (state == false){
        $(window).on("touchmove.noScroll", function(e) {
          e.preventDefault();
        });
        state = true;
      } else {
        $(window).off(".noScroll");
        state = false;
      }
    });
// ああ

	
$('head').append(
    '<style type="text/css">#contents { display: none; } #fade, #loader { display: block; }</style>'
);
 
jQuery.event.add(window,"load",function() { // 全ての読み込み完了後に呼ばれる関数
    var pageH = $("#contents").height();
 
    $("#fade").css("height", pageH).delay(2000).fadeOut(800);
    $("#loader").delay(600).fadeOut(300);
    $("#contents").css("display", "block");
});

