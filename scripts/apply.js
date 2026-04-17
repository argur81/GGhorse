$(document).ready(function () {
    //Index slide
    $('.idx .slideArea').flexslider({
        animation: "",
        directionNav: false,
        pausePlay: true,
        controlsContainer: $(".controls"),
        customDirectionNav: $(".slideNavi a")
    });
    //Index Popup
    $('.idx .popupBtn').click(function () {
        $('.popupArea').show();
        $('.idx .quickMenu .popupOn').show();
        $('.idx .quickMenu .popupOff').css('opacity','0.2');
        return false;
    });
    $('.idx .quickMenu .popupCloseBtn,.idx .quickMenu .stopWatchBtn').click(function () {
        $('.popupArea').hide();
        $('.idx .quickMenu .popupOn').hide();
        $('.idx .quickMenu .popupOff').css('opacity', '1');
        return false;
    });

    //FAQ 
    $('.faq dt').click(function () {
        var nextdd = $(this).next('dd');
        if (nextdd.hasClass('on') == true) {
            nextdd.removeClass('on');
            nextdd.stop().slideUp();
            $(this).removeClass('on');
        } else {
            $('.faq dt').removeClass('on');
            $('.faq dd').removeClass('on');
            $('.faq dd').stop().slideUp();
            nextdd.addClass('on');
            nextdd.stop().slideDown();
            $(this).addClass('on');
        }
    });
    //팝업 공통
    $('.popupData .popupClose').click(function () {
        $(this).parents('.popupArea').hide();
        $('.join .searchSchool .searchArea input').val('');
        return false;
    });
    //학교선택 팝업
    $('.join .selectSchool').click(function () {
        $('.join .popupArea').show()
    });
    //비밀번호 재설정 인증번호 선택
    $('.crtNumSend').click(function () {
        $('.crtNumInput').addClass('on');
        return false;
    });
    //학부모인증 팝업
    $('.parntalAut .popupBtn').click(function () {
        $('.popupData').hide();
        $('.popupArea').show();
        $($(this).attr('href')).show();
        return false;
    });
    //승마장정보 팝업
    $('.detailBtn').click(function () {
        $('.popupArea').show();
        $('.popupData').show();
        $('.ridingGround .slideArea').flexslider({
            animation: "",
            slideshow: false,
            controlNav: false
        });
        return false;
    });
    $('.ridingGround .closeBtn').click(function () {
        $(this).parents('.popupData').hide();
        $(this).parents('.popupArea').hide();
    });

    //Mobile Index All menu
    $('header .allMenuBtn').click(function () {
        $('header .moAllMenu').animate({ 'left': '0' },0);
        $('header .moAllMenu .blackBg').fadeIn(100);
        $('header .moAllMenu .menuCnt').animate({ 'left': '0' },500);
        return false;
    });
    $('header .moAllMenu .menuCnt .menuCloseBtn').click(function () {
        $('header .moAllMenu').animate({ 'left': '-100%' },500);
        $('header .moAllMenu .blackBg').fadeOut(50);
        $('header .moAllMenu .menuCnt').animate({ 'left': '-100%' }, 300);
        return false;
    });
});