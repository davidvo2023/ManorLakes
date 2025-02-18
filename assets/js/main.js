$(document).ready(function() {
    $('.slider_1').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider_2').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        rtl: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.denis-posts__slider').slick({
         infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                customPaging: function(slider, i) {
                    return '<button class="custom-dot"></button>';
                },
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1.1
                        }
                    }
                ]
            });
            $('.custom-prev').click(function() {
                $('.denis-posts__slider').slick('slickPrev');
            });
            $('.custom-next').click(function() {
                $('.denis-posts__slider').slick('slickNext');
            });
    
});