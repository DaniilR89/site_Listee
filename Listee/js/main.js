const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    slidesPerGroup: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints:{
        1100:{
            spaceBetween: 20,
            slidesPerView: 3,
        },

        800:{
            spaceBetween: 20,
            slidesPerView: 2,
        },

        0:{
            spaceBetween: 0,
            slidesPerView: 1,
        },
    },
  
});


const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    })
});

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});