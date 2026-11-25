//sub4_2 채용절차

//채용 절차 카드 스와이퍼
var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 'auto',  //카드 너비대로, 다음 카드가 살짝 보이게
    spaceBetween: 10,  //카드 사이 여백
    pagination: {  //페이지네이션(점)
        el: '.swiper1 .swiper-pagination',
        clickable: true
    }
});

AOS.init({
    easing: 'ease-in-out-sine'
});
