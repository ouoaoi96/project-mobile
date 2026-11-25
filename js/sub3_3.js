//sub3_3 제품 검색

$.ajax({
    url: './product.json',
    dataType: 'json',
    success: function (data) {
        var useData = data.product;  //전체 상품 배열

        function dataPrint(arr) {  //목록 출력
            var txt = '<ul>';
            for (var i in arr) {
                txt += '<li>';
                txt += '<img src="' + arr[i].Image + '" alt="' + arr[i].Name + '">';
                txt += '<span class="spec">' + arr[i].Spec + '</span>';
                txt += '<strong>' + arr[i].Name + '</strong>';
                txt += '<p>' + arr[i].Descript + '</p>';
                txt += '<a href="#" class="pop_open"><span>MORE</span></a>';
                txt += '</li>';
            }
            txt += '</ul>';

            $('.product_list').html(txt);
            $('.count').html('총 <span>' + arr.length + '</span>개');
        }

        dataPrint(useData);  //처음엔 전체 목록

        var newArray = [];      //검색·분류된 목록
        var search_on = false;  //검색·분류 했으면 true

        //검색 버튼
        $('#btn').click(function () {
            newArray = useData.filter(function (element) {
                return element.Name.includes($('#title').val());
            });
            dataPrint(newArray);
            search_on = true;
            $('.cate button').removeClass('on');
            $('.cate .all').addClass('on');
        });

        //분류 버튼
        $('.cate button').click(function () {
            $('.cate button').removeClass('on');
            $(this).addClass('on');
            var btn = $(this);
            if (btn.hasClass('all')) {
                dataPrint(useData);
                search_on = false;
            } else {
                newArray = useData.filter(function (element) {
                    return btn.hasClass(element.Cate);
                });
                dataPrint(newArray);
                search_on = true;
            }
        });

        //팝업 내용 바꾸기
        function popchange(obj) {
            var pop_txt = '';
            pop_txt += '<img src="' + obj.Image + '" alt="' + obj.Name + '">';
            pop_txt += '<p class="name">' + obj.Name + '</p>';
            pop_txt += '<span>' + obj.Spec + '</span>';
            pop_txt += '<p class="txt">' + obj.Descript + '</p>';
            $('.modal_box .pop_con').html(pop_txt);
        }

        //팝업 열기
        $(document).on('click', '.pop_open', function (e) {
            e.preventDefault();
            $('.modal_box').fadeIn('slow');
            var ind = $(this).parent('li').index();
            if (search_on == false) {
                popchange(useData[ind]);
            } else {
                popchange(newArray[ind]);
            }
        });

        //팝업 닫기
        $('.close_pop, .modal_box').click(function (e) {
            e.preventDefault();
            $('.modal_box').fadeOut('fast');
        });
    }
});

AOS.init({
    easing: 'ease-in-out-sine'
});
