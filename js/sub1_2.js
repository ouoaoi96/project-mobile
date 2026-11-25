//sub1_2 국순당 역사

//기간 탭 (현재~2015 / 2014~2000 / 1999~1970)
$('#content .period').hide();
$('#content .period:eq(0)').show();

$('.period_tab li a').click(function(e){
    e.preventDefault();

    var ind = $(this).index('.period_tab li a');  // 0 1 2

    $('#content .period').hide();
    $('#content .period:eq('+ ind +')').show();

    $('.period_tab li a').removeClass('active');
    $(this).addClass('active');
});

AOS.init({
    easing: 'ease-in-out-sine'
});
