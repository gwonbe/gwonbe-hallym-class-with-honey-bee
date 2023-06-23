// 좌우 사이드 하이퍼링크 관련 스크립트 (jquery 활용)

$(window).ready(function(){
    $(window).resize(function(){
        if(window.innerWidth < 1100){
            $('.side').css('display', 'none');
        }else{
            $('.side').css('display', 'block');
        }
    })
});

$(document).ready(function(){
    $('.side').css({
        display : 'block',
        position : 'fixed',
        width: '100px',
        height: '250px',
        padding : '10px',
        borderRadius : '20px',
        textAlign : 'center',
    });
    $('#side1').css({
        top : '250px',
        left : '0px',
        backgroundColor : '#00C73C'
    });
    $('#side2').css({
        top : '250px',
        right : '0px',
        backgroundColor : '#74BF1E'
    });
    $('.sideA').css({
        textDecoration : 'none',
        fontSize : '18px',
        fontFamily: 'GoryeongStrawberry'
    });
    $('.side_a_div_text').css({
        height : '100px',
        padding : '30px 15px',
        color : 'white'
    });
    $('.side_a_div_img').css({
        height : '80px',
        padding : '0px 15px'
    });
    $('.side_logo_img').css({
        width : '100%'
    });
});
