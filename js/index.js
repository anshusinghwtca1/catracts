
// -----------------Navbar-------------------------------
const navbar_button = document.querySelector(".navbar-button");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
	nav_header.classList.toggle("active");
}

navbar_button.addEventListener("click", () => toggleNavbar());
// -----------------End Navbar-------------------------------

	var swiper = new Swiper(".slide-container", {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        centerSlide: "true",
        grabCursor: "true",
        fade: "true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
        	0:{
        		slidesPerView: 1,
        	},
        	520:{
        		slidesPerView: 2,
        	},
        	950:{
        		slidesPerView: 5,
        	},
        },
      });