var swiper = new Swiper(".reviews-slider", {

    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: -150,
    navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
    },
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1120: {
            slidesPerView: 1.5,
        }
    }
});