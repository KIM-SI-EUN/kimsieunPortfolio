$(function(){
$("#btn>li").click(function(){

	var i= $(this).index();
	$("#imgG").animate({marginLeft:-100 * i + "%"});
	$("#btn>li").removeClass();
	$(this).addClass("on");
	

});

var swiper = new Swiper ('#img', {
         autoplay: {
              delay: 2000,
              },
         
       
    });




});