//sub3_2 법고창신

//다섯 가지 술 펼치기
$('.acc .tit a').click(function (e) {
    e.preventDefault();
    var li = $(this).parents('li');  //누른 술의 li

    if (li.hasClass('on')) {  //이미 열려 있으면
        li.find('.con').slideUp('fast');  //닫기
        li.removeClass('on');
        $(this).find('.icon').html('add');
    } else {  //닫혀 있으면
        $('.acc .con').slideUp('fast');  //모두 닫고
        $('.acc>li').removeClass('on');
        $('.acc .icon').html('add');

        li.find('.con').slideDown('slow');  //누른 것만 열기
        li.addClass('on');
        $(this).find('.icon').html('remove');
    }
});

AOS.init({
    easing: 'ease-in-out-sine'
});
