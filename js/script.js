$(document).ready(function(){
    $('.slider').slick({
        // Стрелки: true/ false
        arrows: true,
        // Количество слайдов, отображаемое за раз (количество пролистываний не меняется)
        slidesToShow: 3,
        // Количество пролистываний за одно нажатие
        slidesToScroll: 1,
        // Автоматическое проигрывание
        autoplay: true,
        // Скорость автоматического проигрывания
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        // Сколько нужно протянуть для перелистывания слайдера (1/ в частях от слайда) 5 - по умолчанию
        touchTrashold: 10,
        // Задержка перед переключением
        waitForAnimate: false,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });
});