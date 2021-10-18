$(document).ready(function(){
    
    $('.fa-arrow-circle-up').click(function(){
        $('body, html').animate({
            scrollTop:'0px'
        },300);
    });

    $(window).scroll(function(){

        var arrow = document.getElementById('arrow-down');

        arrow.style.visibility = 'visible'
        
        if( $(this).scrollTop() > 0){
            $('.fa-arrow-circle-up').slideDown(300);
        }else{
            $('.fa-arrow-circle-up').slideUp(300);
        }
    });
});