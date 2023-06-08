window.addEventListener('load', function () {
    new Glider(document.querySelector('.caruserl_lista'), {
        slidesToShow: 6,
        slidesToScroll: 2,
        draggable: true,
        
        arrows: {
            prev: '.carusser_anterior',
            next: '.carusser_siguiente'
        }
    })
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }
    ]
})
window.addEventListener('load', function () {
    new Glider(document.querySelector('.caruserl_list'), {
        slidesToShow: 6,
        slidesToScroll: 2,
        draggable: true,
        
        arrows: {
            prev: '.carusser_anterio',
            next: '.carusser_siguient'
        }
    })
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }
    ]
})