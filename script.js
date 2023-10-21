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
    
})