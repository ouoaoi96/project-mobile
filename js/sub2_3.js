//sub2_3 국순당술의 특징

//설갱미 / 생쌀발효법 탭
$('#content .tab_box').hide();
$('#content .tab_box:eq(0)').show();

$('.key_tab li a').click(function(e){
    e.preventDefault();

    var ind = $(this).index('.key_tab li a');  // 0 1

    $('#content .tab_box').hide();
    $('#content .tab_box:eq('+ ind +')').show();

    $('.key_tab li a').removeClass('active');
    $(this).addClass('active');
});

AOS.init({
    easing: 'ease-in-out-sine'
});
