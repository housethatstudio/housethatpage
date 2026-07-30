const swiper = new Swiper(".testimonialSwiper", {

    loop: true,

    effect: "fade",

    autoplay: {

        delay: 5000,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

});

const navbar = document.querySelector(".ht-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
