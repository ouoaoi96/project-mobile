//패밀리 사이트 (푸터를 불러온 뒤 실행)

   	
	// $('.select .arrow').click(function(){
	// 	$('.select .aList').fadeIn('slow');			  
	// });

	// $('.select .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });
  
	$('.select .arrow').toggle(function(){ //홀수번째 클릭시
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){ //짝수번째 클릭시
        $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

	//tab키 처리
	  $('.select .arrow').on('focus', function () {  //arrow <a>태그가 포커스를 받으면
              $('.select .aList').fadeIn('slow');	//리스트를 열어라
       });
       $('.select .aList li:last a').on('blur', function () {   //가장 마지막에 있는 리스트 메뉴<a>가 포커스를 
              $('.select .aList').fadeOut('fast');  //메뉴를 닫아라
			  $('.select .arrow span').html('<i class="fa-solid fa-chevron-down"></i>');
       });


//Top버튼 클릭 시 상단으로 부드럽게 이동

$('.top_move').click(function (e) {
  e.preventDefault();
  //상단으로 스르륵 이동합니다.
  $("html,body").stop().animate({ "scrollTop": 0 }, 1000); //스크롤을 부드럽게 목표지점까지 이동시키는 코드
});
