// document load
$(document).ready(function(){
    setWinSizes();
});

/*  Set Window Height and Width - Start */
function setWinSizes() {
    var headHeight = $('.header-top').innerHeight();
    var footHeight = $('footer.footer').innerHeight();
    var windowHeight = $(window).innerHeight();
    $('.main-container').css({"padding-top": headHeight, "min-height":windowHeight-footHeight});
}