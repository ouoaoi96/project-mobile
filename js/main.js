//index페이지에서 사용되는 js
//스플래시 스크린 처리코드
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');

  // 방문 기록('splashVisited')이 없는 '첫 방문자'일 때만 실행합니다.
  if (splash && !sessionStorage.getItem('splashVisited')) {
    
    // 1. 숨겨져 있던 스플래시 스크린을 화면에 표시합니다.
    splash.classList.add('active');

    // 2. 1초(1000ms) 후에 페이드 아웃 애니메이션을 실행합니다.
    setTimeout(() => {
      splash.classList.add('fade-out');
      // 3. 다음 방문 시에는 뜨지 않도록 세션에 기록을 저장합니다.
      sessionStorage.setItem('splashVisited', 'true');
    }, 1000);
  }
  // 이미 방문한 사용자는 아무런 클래스도 추가되지 않으므로 
  // CSS의 기본값인 display: none 상태가 유지되어 깜빡이지 않습니다.
});

//비주얼 스와이퍼
var swiper1 = new Swiper('.swiper1', {
    loop: true,  //무한 반복
    autoplay: {  //자동
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {  //페이지네이션(점)
        el: '.visual .swiper-pagination',
        clickable: true
    }
});

//제품 스와이퍼
var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 'auto',  //단수 (카드 너비대로, 다음 카드가 살짝 보이게)
    spaceBetween: 12,  //단사이 여백
    pagination: {  //현재/총개수 (1 / 3)
        el: '.swiper2 .swiper-pagination',
        type: 'fraction'
    },
    scrollbar: {  //진행 막대
        el: '.swiper2 .swiper-scrollbar'
    }
});
AOS.init({
            easing: 'ease-in-out-sine'
        });




