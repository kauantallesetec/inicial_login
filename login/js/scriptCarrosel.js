var swiper = new Swiper(".slide-content",{
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade:'true',
    gragCursor:'true',
    loopFillGroupWithBlank: true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
        dynamicBullets : true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

const nextBtn = document.querySelector(".swiper-button-next");
console.log("AAAAAA");
console.log(nextBtn);
setInterval(()=> nextBtn.click(), 3000);