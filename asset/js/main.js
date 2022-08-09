$(function(){
    // 헤더 메뉴
    // 처음에  ul 위에 sub메뉴를 안주고 했는데 그러면 poa값이 ul로들어가서 마우스 내렸을떄 바로 사라져서 부모객체로 sub-menu 씌우고 거기다 poa값 주고함
    $('.left-gnb .teams').hover(function(){
        $(".header").addClass('pc-active')
        $('.sub-menu').show();
    },function(){
        $('.sub-menu').hide();
        $(".header").removeClass('pc-active');
    });



    // 반응형 헤더 메뉴
    $('.btn-menu').click(function(e){
        e.preventDefault();
        $('.header').addClass('active');
        $('body').addClass('hidden');
    });
    $('.btn-close').click(function(e){
        e.preventDefault();
        $('.header').removeClass('active');
        $('body').removeClass('hidden');
    });

    //반응형 헤더메뉴 메뉴 슬라이드
    $('.header .subteams').click(function(){
        $('.subteams').toggleClass('show');
        $('.header .navsub-list').stop().slideToggle();
    });








    //메인화면 상단 광고 배너
    $('.banner-wrap .btn-close').click(function(){
        $('.banner-wrap').hide();
    });

    //메인화면 비디오 슬라이드
    var swiper = new Swiper(".visual", {
        loop: true,
        touchRatio: 0,//드래그 금지
        autoplay : {
            delay : 5000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
    });



    //반응형 검색창 부분
    $('.btn-Msearch').click(function(e){
        e.preventDefault();
        $('.msearch-box').addClass('active');
        $('body').addClass('hidden');
    })

     //반응형 검색창 슬라이드
    $('.filter-item > a').click(function(e){
        e.preventDefault();
        $(this).parent(".filter-item").toggleClass('active');
    });

    $('.first .filter-sub-item > a').click(function(e){
        e.preventDefault();
        $(this).siblings('.item-list').toggleClass('active');
    });

    $('.msearch-box .btn-close').click(function(e){
        e.preventDefault();
        $('.msearch-box').removeClass('active');
        $('body').removeClass('hidden');
    });








    //people 슬라이드
    var swiper = new Swiper(".people", {
        // slidesPerView: 1.1,
        // spaceBetween: 30,

        navigation: {
            prevEl: ".btn-prev",
            nextEl: ".btn-next",
        },

        breakpoints: {
            320:{
                slidesPerView: 1,
                spaceBetween: 44,
            },
            767:{
                slidesPerView: 1,
                spaceBetween: 44,
            },
        },
    });




    // Benefits 슬라이드

    var swiper = new Swiper(".benefits", {

        navigation: {
            prevEl: ".btn-prev",
            nextEl: ".btn-next",
        },

        breakpoints: {
            320:{
                slidesPerView: 1,
                spaceBetween: 44,
            },
            767:{
                slidesPerView: 1,
                spaceBetween: 44,
            },
            1023:{
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });









//footer 관련사이트 버튼
    $('.btn-site').click(function(){
        $('.footer').toggleClass('active');
    });




    $(window).resize(function(){
        const w = $(window).width();
        if(w > 1229) {
            $('.header').removeClass('active');
            $('body').removeClass('hidden');
        }
        // if(w > 1023 && $('.mo-gnb').hasClass('active')){
        //     $('.mo-gnb').removeClass('active');
        //     $('header .tab-wrap button').removeClass('btn-close');
        // }
        //xxxxxxxx
    });

    $(window).trigger('resize');

});



