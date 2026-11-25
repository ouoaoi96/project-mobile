//sub4_3 FAQ

//질문 하나씩 열고 닫기
$('.acc .tit a').click(function (e) {
    e.preventDefault();
    var li = $(this).parents('li');  //누른 질문의 li

    if (li.hasClass('on')) {  //이미 열려 있으면
        li.find('.con').slideUp('fast');  //닫기
        li.removeClass('on');
        $(this).find('.icon').html('keyboard_arrow_down');
    } else {  //닫혀 있으면
        $('.acc .con').slideUp('fast');  //모두 닫고
        $('.acc>li').removeClass('on');
        $('.acc .icon').html('keyboard_arrow_down');

        li.find('.con').slideDown('slow');  //누른 것만 열기
        li.addClass('on');
        $(this).find('.icon').html('keyboard_arrow_up');
    }
});

//모두열기 / 모두닫기
$('.faq .all').click(function (e) {
    e.preventDefault();

    if ($(this).hasClass('on')) {  //모두 열려 있으면 → 모두 닫기
        $('.acc .con').slideUp('fast');
        $('.acc>li').removeClass('on');
        $('.acc .icon').html('keyboard_arrow_down');
        $(this).removeClass('on');
        $(this).html('모두열기');
    } else {  //모두 열기
        $('.acc .con').slideDown('slow');
        $('.acc>li').addClass('on');
        $('.acc .icon').html('keyboard_arrow_up');
        $(this).addClass('on');
        $(this).html('모두닫기');
    }
});

AOS.init({
    easing: 'ease-in-out-sine'
});

//문의하기 메일 보내기 (PC contact.js와 같음)
(function() {
    emailjs.init({
      publicKey: "CZpYvRfponAdlLO_W",
    });
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_rky5dan', 'template_zxqy4kt', this)
        .then(() => {
            console.log('SUCCESS!');
            alert('메일 전송에 성공하였습니다.');
        }, (error) => {
            console.log('FAILED...', error);
            alert('메일 전송에 실패하였습니다.');
        });
});
