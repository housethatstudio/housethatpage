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

<script>
const menuBtn=document.getElementById("htMenuBtn");
const mobileNav=document.getElementById("htMobileNav");

menuBtn.addEventListener("click",()=>{

    mobileNav.classList.toggle("active");

});

window.addEventListener("scroll",()=>{

    document.querySelector(".ht-navbar").classList.toggle("scrolled",window.scrollY>40);

});
</script>
