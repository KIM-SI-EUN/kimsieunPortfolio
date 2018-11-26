$(function(){
	var ht = $(window).height();
	$(window).on("resize", function(){
		var ht = $(window).height();
		$("section").height(ht)

	});
	$("section").on("mousemove", function(){
		var x = event.pageX;
		var y = event.pageY;
		$(".img1").css({top:270-x/60, right:600-y/40});
		$(".img2").css({top:623+x/20, right:460+y/10});
		$(".img3").css({top:700-x/20, left:956-y/10});
		$(".img4").css({top:190+x/20, left:926+y/10});
		$(".img5").css({top:544+x/20, left:488+y/10});
		$(".img6").css({top:212+x/20, left:530+y/10});
		
		

});
	});