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

const showDialog = () => {
  document.getElementById("dialog").classList.add("show")
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = "-${scrollY}";
};
const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('dialog').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});




