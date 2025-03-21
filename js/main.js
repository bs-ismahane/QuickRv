'use strict';
// preload
const preloader =document.querySelector("[data-preload]");
window.addEventListener("load",function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})
const navBtn = document.querySelector(".nav-btn");
const navBar = document.querySelector(".navbar");

navBtn.addEventListener("click", function () {
    if (navBtn.classList.contains("active")) {
        navBtn.classList.remove("active");
        navBar.classList.remove("active"); // Fix: Remove "active" from navBar when closing
        navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`; 
    } else {
        navBtn.classList.add("active");
        navBar.classList.add("active");
        navBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
});
// hero
const hero = document.querySelector(".hero");
const bg = ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg'];
const btn_prev = document.querySelector(".prev");
const btn_next = document.querySelector(".next");
let index = 0;

// Function to update the background smoothly
function updateBackground() {
        hero.style.backgroundImage = `url('${bg[index]}')`; // Change image
}

// Auto-scroll every 5 seconds
function autoScroll() {
    index = (index + 1) % bg.length;
    updateBackground();
}

window.addEventListener("load", function () {
    updateBackground();
    setInterval(autoScroll, 5000);
});

// Previous button click
btn_prev.addEventListener("click", function () {
    index = (index - 1 + bg.length) % bg.length;
    updateBackground();
});

// Next button click
btn_next.addEventListener("click", function () {
    index = (index + 1) % bg.length;
    updateBackground();
});
