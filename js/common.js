//모든 페이지 공통 js




//샌드위치메뉴 열고 닫기 처리코드

var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)

$(".menu_ham").click(function (e) { //메뉴버튼 클릭시
  e.preventDefault();

  var documentHeight = $(document).height(); //전체 페이지의 높이
  $("#gnb").css('height', documentHeight); //네비의 높이를 전체 전체 페이지의 높이로...

  if (op == false) {  //메뉴가 닫혀있는 상태에서 클릭했냐??
    $('#headerArea .modal').show();
    $("#gnb").animate({ right: 0, opacity: 1 }, 'fast');  //네비가 우측에서 날아온다
    $('#headerArea').addClass('mn_open');
    op = true; //상태->열림
  } else {  //메뉴가 열려있는 상태에서 클릭했냐??
    $('#headerArea .modal').hide();
    $("#gnb").animate({ right: '-100%', opacity: 0 }, 'fast');
    $('#headerArea').removeClass('mn_open');
    op = false;
  }

});


//2depth 메뉴 교대로 열기 처리 
var onoff = [false, false, false, false]; //가정법 false(서브닫힘) , true(열림)
var arrcount = onoff.length;  // 배열의 개수 6

//console.log(arrcount);

$('#gnb .depth1 h3 a').click(function (e) {  //1depth메뉴를 클릭하면
  e.preventDefault();

  var ind = $(this).parents('.depth1').index();  // 0~5
  //var ind=$(this).index('#gnb .depth1 h3 a');

  //console.log(ind);

  if (onoff[ind] == false) {  //각각의 1depth메뉴의 서브가 닫혀있냐??
    //$('#gnb .depth1 ul').hide();
    $(this).parents('.depth1').find('ul').slideDown('slow'); //자신의 서브를 열어라
    $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //자신을 제외한 모든 서브를 닫아라
    for (var i = 0; i < arrcount; i++) onoff[i] = false; //모든 배열값을 false
    onoff[ind] = true;  //자신의 대한 배열만 true로 변경

    $('.depth1 .icon').html('<span class="material-symbols-outlined">keyboard_arrow_down</span>');   //모든 메뉴가 닫혀있다 (+)
    $(this).find('.icon').html('<span class="material-symbols-outlined">keyboard_arrow_up</span>');   //자신만 메뉴가 열려있다 (-)
    $('.depth1 h3 a').removeClass('on');
    $(this).addClass('on');

  } else { //각각의 1depth메뉴의 서브가 열려있냐??
    $(this).parents('.depth1').find('ul').slideUp('fast'); //지 서브를 닫아라~~
    onoff[ind] = false;  // true->false 
    $(this).removeClass('on');

    $(this).find('.icon').html('<span class="material-symbols-outlined">keyboard_arrow_down</span>');      // 모든 메뉴가 닫혀있다 
  }
});


//헤더영역 배경색상 스크롤 처리 + top메뉴 나타나기

var vh = $('.visual').height();  //비주얼의 높이
var hh = $('#headerArea').height();  //헤더의 높이

$(window).on('scroll', function () {//스크롤의 거리가 발생하면
  var scroll = $(window).scrollTop();  //스크롤의 거리

  if (scroll > vh - hh) { //스크롤이 비주얼 보다 아래로 내려올 때
    $('#headerArea').css('background', 'rgba(0,0,0,.8)').css('box-shadow', 'none');
    $('#footerArea .top_move').fadeIn('fast');
  } else {
    $('#headerArea').css('background', 'linear-gradient(180deg, rgba(34,27,24,.94) 0%, rgba(34,27,24,.78) 40%, rgba(34,27,24,.42) 74%, rgba(34,27,24,.06) 100%)').css('box-shadow', 'none');
    $('#footerArea .top_move').fadeOut('fast');
  }
});
