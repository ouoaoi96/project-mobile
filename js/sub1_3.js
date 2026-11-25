//sub1_3 오시는 길

//본사 서울사무소 챕
$('#content .place').hide();
$('#content .place:eq(0)').show();

$('.place_tab li a').click(function(e){
    e.preventDefault();

    var ind = $(this).index('.place_tab li a');  // 0 1 

    $('#content .place').hide();
    $('#content .place:eq('+ ind +')').show();
        //숨어 있던 지도 다시 그리기
    if (ind == 0) {
        map1.relayout();
        map1.setCenter(pos1);
    } else {
        map2.relayout();
        map2.setCenter(pos2);
    }

    $('.place_tab li a').removeClass('active');
    $(this).addClass('active');
});

AOS.init({
    easing: 'ease-in-out-sine'
});
