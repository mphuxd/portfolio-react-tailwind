const images = Array.from(document.querySelectorAll(".cs-figure"));
let slideshow = document.querySelector(".slideshow");
let slides = Array.from(document.querySelectorAll(".slideshow-slide-container"));
let closeButton = document.querySelector(".slideshow-close-btn");
let prevButton = document.querySelector(".pagination-prev-btn");
let nextButton = document.querySelector(".pagination-next-btn");

function updatePageCount (){

}

function setMaxHeight(){
    slides.forEach(slide => {
        let screenHeight = window.innerHeight;
        let image = slide.firstElementChild.firstElementChild;
        let closeHeight = 72;
        let topPaddingHeight = 72;
        let captionHeight = 200;
        let pageNumberHeight = 24;
        let newMaxHeight = screenHeight - (closeHeight + pageNumberHeight + captionHeight + topPaddingHeight);
        image.style.maxHeight = newMaxHeight+"px";
    })
}


function nextSlide() {
    let activeSlide = document.querySelector(".slideshow-slide-active");
    let activeSlideIndex = slides.indexOf(activeSlide);
    let nextSlideIndex = 0;
    if(activeSlideIndex === slides.length-1) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = activeSlideIndex + 1;
    };
    activeSlide.classList.remove("slideshow-slide-active");
    activeSlide.classList.add("slideshow-slide-out");
    slides[nextSlideIndex].classList.add("slideshow-slide-active");
    window.setTimeout(function(){
        activeSlide.classList.remove("slideshow-slide-out");
    },200);
    
}

function prevSlide() {
    let activeSlide = document.querySelector(".slideshow-slide-active");
    let activeSlideIndex = slides.indexOf(activeSlide);
    let prevSlideIndex = 0;
    if(activeSlideIndex === 0) {
        prevSlideIndex = slides.length - 1;
    } else {
        prevSlideIndex = activeSlideIndex - 1;
    };
    activeSlide.classList.remove("slideshow-slide-active");
    activeSlide.classList.toggle("slideshow-slide-out");
    slides[prevSlideIndex].classList.add("slideshow-slide-active");
    window.setTimeout(function(){
        activeSlide.classList.remove("slideshow-slide-out");
    },200);
   
}

function resetSlides() {
    let activeSlide = document.querySelector(".slideshow-slide-active");
    activeSlide.classList.remove("slideshow-slide-active");
}

images.forEach(image => image.addEventListener('click', function(e){
    let activeSlideIndex = images.indexOf(this);
    slides[activeSlideIndex].classList.add("slideshow-slide-active");
    slideshow.classList.remove("hidden");
    setMaxHeight();
}));

closeButton.addEventListener('click', function(e){
    slideshow.classList.add("hidden");
    resetSlides();
});

nextButton.addEventListener('click', nextSlide);

prevButton.addEventListener('click', prevSlide);

window.addEventListener('keydown', function(e){
    console.log(e.key);
    if(!slideshow.classList.contains("hidden") && e.key === "ArrowRight"){
        nextSlide();
    };

    if(!slideshow.classList.contains("hidden") && e.key === "ArrowLeft"){
        prevSlide();
    };

    if(!slideshow.classList.contains("hidden") && e.key === "Escape"){
        slideshow.classList.add("hidden");
        resetSlides();
    };
})

let heroTitle = document.querySelector(".hero-text-container");

heroTitle.addEventListener("mouseenter", function(event) {
    if(window.innerWidth > 767){
        let heroImage = document.getElementById("hero-image");
        let heroText = document.querySelector(".hero-project-title");
        const transIn = ["transform", "scale-105", "filter-brightness", "duration-200"];
        heroImage.classList.add(...transIn);
        heroText.setAttribute("style", "filter:invert(100%);background-color:#FFF; text-decoration-line:underline; text-decoration-color:#0a3e41; text-decoration-thickness:2px;");
    };
});

heroTitle.addEventListener("mouseleave", function(event) {
    if(window.innerWidth > 767){
        let heroImage = document.getElementById("hero-image");
        const transIn = ["transform", "scale-105", "filter-brightness", "duration-200"];
        heroImage.classList.remove(...transIn);
        const transOut = ["transform", "scale-100", "duration-100", "filter-none"];
        heroImage.classList.add(...transOut);
        let heroText = document.querySelector(".hero-project-title");
        heroText.setAttribute("style", "filter:invert(0%); text-decoration-line:none;");
    };

});