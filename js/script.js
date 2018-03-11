$(document).on('ready', function() {
      $(".slider-top").slick({
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/prev.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/next.png'>",
        dots: false,
        infinite: true,
        speed: 250,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      $(".slider-partners").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      });

      $.fn.scrollToTop=function(){
    $(this).hide().removeAttr("href");
    if($(window).scrollTop()!="0"){
        $(this).fadeIn("slow")
  }
  var scrollDiv=$(this);
  $(window).scroll(function(){
    if($(window).scrollTop()=="0"){
    $(scrollDiv).fadeOut("slow")
    }else{
    $(scrollDiv).fadeIn("slow")
  }
  });
    $(this).click(function(){
      $("html, body").animate({scrollTop:0},"slow")
    })
  }
  $("#toTop").scrollToTop();	
    
});