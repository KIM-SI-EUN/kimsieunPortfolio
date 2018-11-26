$(function(){

	$(window).scroll(function(){//브라우저에서 스크롤 했을 때
		//.scrollTop() 브라우저에서 스크롤한 만큼의 거리
		var winTop = $(window).scrollTop();
		console.log(winTop);
		//var zone = $("p").offset().top - $(window).height() - 200;
		var zone = $(window).height() / 2;

		if(zone < winTop){
			$(".banner").animate({ right:0 }, 250);
		} else {
			//큐에 남았는 효과를 지우고 현재 진행만 실행
			$(".banner").stop(true).animate({ right:-100 }, 250);
		}
	});
	$(".banner").click(function(){
		
	});


	$(window).mousewheel(function(e, delta){
		if(delta>0) {
			$('html, body').stop().animate({scrollTop : "-="+ 940}, 1000);
		} else if (delta<0) {
			$('html, body').stop().animate({scrollTop : "+="+ 940}, 1000);
		}
	});
		 

		$('.img2').fadeIn(700);

	$("#btn div").on("click",function(){
		var ht=$(window).height();//브라우저의 높이값 저장
		var idx=$(this).index();//각각의 메뉴의 인덱스 번호를 변수에 저장
		var articleT = ht*idx;//현재 박스의 스크롤 위치값
		$("html, body").stop().animate({"scrollTop":articleT},1000);

	});
	$(window).on("scroll",function(){
	var ht = $(window).height();
	var scroll=$(window).scrollTop();

	for(var i=0; i<4; i++){//0~3까지 1씩 증가
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$("#btn div").removeClass();
				$("#btn div").eq(i).addClass('on');
			}
	
		}
	});



});