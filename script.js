var swiper = new Swiper( ".mySwiper-1",{
    slidesPerView:1, 
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickeable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
    
});

var swiper = new Swiper( ".mySwiper-2", {
    slidesPerView:3, 
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    brekpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
    }
});

let tabInouts = document.querySelectorAll(".tabinput");

tabInouts.forEach(function(input) {
  
    unput.addEventListener('change', function() {
        let id = imput.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id)
        thisSwiper.swiper.update();
    })
});