$(document).ready(function() {
  $("#navbar").load("/header/header.html");
});

$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      var textScroll = -scroll/5;
      var showText = scroll/170;
      var promOp = scroll
      
      $('.text').css({'transform' : 'translate3d(0,'+ textScroll +'px,0)', 'opacity' : showText});
  });
});

$(document).ready(function(){
  $('.swiper').slick();
});