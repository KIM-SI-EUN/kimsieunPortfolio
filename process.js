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
	});