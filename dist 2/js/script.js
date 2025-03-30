const humburger = document.querySelector('.humburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

humburger.addEventListener('click',()=>{
    menu.classList.add("active");
});

closeElem.addEventListener('click',()=>{
    menu.classList.remove("active");
});

$(document).ready(function(){
    $(window).scroll(function() {
    if  (window.screen.width > 1439) {
        if ($(this).scrollTop() > window.screen.height - 400){
            $('#sidepanel_light').fadeOut();
            $('.sidepanel_dark').fadeIn();
        } else{
            $('#sidepanel_light').fadeIn();
            $('.sidepanel_dark').fadeOut();
        }
    } else{
        $('#sidepanel_light').fadeOut();
        $('.sidepanel_dark').fadeOut();
    }

    });
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});




