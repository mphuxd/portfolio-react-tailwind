import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Slideshow(props) {
  useEffect(() => {
    class Slideshow {
      constructor() {
        this.window = window;
        this.heroImage = document.querySelector(".cs-hero-image");
        this.images = Array.from(document.querySelectorAll(".cs-figure"));
        this.slides = Array.from(document.querySelectorAll(".slideshow-slide-container"));
        this.slideContainer = document.querySelector(".slideshow-slides");
        this.slideshow = document.querySelector(".slideshow");
        this.closeButton = document.querySelector(".slideshow-close-btn");
        this.prevButton = document.querySelector(".pagination-prev-btn");
        this.nextButton = document.querySelector(".pagination-next-btn");
        this.pageNumber = document.querySelector(".pagination-page-count");
        this.init();
        this.events();
      }

      addHero() {
        let slideFigure = document.createElement("div");
        slideFigure.classList.add("slideshow-slide-container");
        console.log(this);

        // let imageSrc = this.heroImage.attributes.src.value;
        // let imageAlt = this.heroImage.attributes.alt.value;
        let imageSrc = this.heroImage.children[0].children[1].currentSrc.value;
        let imageAlt = this.heroImage.children[0].children[1].alt.value;
        let slideCaption = document.getElementById("cs-hero-caption").innerText;

        slideFigure.innerHTML = `<figure class="slideshow-figure"><img class="slideshow-image" src=${imageSrc} alt=${imageAlt}></figure><p class="slideshow-caption">${slideCaption}</p>`;
        this.slideContainer.appendChild(slideFigure);
      } //different html structure requires hero to populate separately

      populateSlides() {
        this.images.forEach((image) => {
          console.log(image);
          let slideFigure = document.createElement("div");
          slideFigure.classList.add("slideshow-slide-container");

          let imageSrc = image.children[0].children[1].src;
          console.log(imageSrc);
          let imageAlt = image.children[0].children[1].alt;
          let slideCaption = image.innerText;

          slideFigure.innerHTML = `<figure class="slideshow-figure"><img class="slideshow-image" src=${imageSrc} alt=${imageAlt}></figure><p class="slideshow-caption">${slideCaption}</p>`;
          this.slideContainer.appendChild(slideFigure);
        });
      } //populate images
      //doesnt work because next/image uses a loader to generate the URI

      setMaxHeight() {
        this.slides.forEach((slide) => {
          let screenHeight = window.innerHeight;
          let image = slide.firstElementChild.firstElementChild;
          let closeHeight = 72;
          let topPaddingHeight = 72;
          let captionHeight = 200;
          let pageNumberHeight = 24;
          let newMaxHeight =
            screenHeight - (closeHeight + pageNumberHeight + captionHeight + topPaddingHeight);
          image.style.maxHeight = newMaxHeight + "px";
        });
      } //setMaxHeight

      setIndex() {
        this.slides = Array.from(document.querySelectorAll(".slideshow-slide-container"));
        this.images.unshift(this.heroImage);
      } //matches slides & images indexes

      updatePaginationCount(currentPage) {
        let totalSlides = this.slides.length;
        this.pageNumber.innerText = `${currentPage + 1}/${totalSlides}`;
      } //updates count

      init() {
        this.addHero();
        this.populateSlides();
        this.setIndex();
        this.setMaxHeight();
      } //init

      open(that) {
        let activeSlideIndex = this.images.indexOf(that);
        this.slides[activeSlideIndex].classList.add("slideshow-slide-active");
        this.updatePaginationCount(activeSlideIndex);
        this.slideshow.classList.remove("hidden");
      } //opens clicked image in slideshow

      isOpen() {
        return !this.slideshow.classList.contains("hidden");
      } //checks if slideshow is open

      close() {
        this.slideshow.classList.add("hidden");
        let activeSlide = document.querySelector(".slideshow-slide-active");
        activeSlide.classList.remove("slideshow-slide-active");
      } //closes slideshow

      prevSlide() {
        let activeSlide = document.querySelector(".slideshow-slide-active");
        let activeSlideIndex = this.slides.indexOf(activeSlide);
        let prevSlideIndex = 0;
        if (activeSlideIndex === 0) {
          prevSlideIndex = this.slides.length - 1;
        } else {
          prevSlideIndex = activeSlideIndex - 1;
        }
        activeSlide.classList.remove("slideshow-slide-active");
        activeSlide.classList.add("slideshow-slide-out");
        this.updatePaginationCount(prevSlideIndex);

        this.slides[prevSlideIndex].classList.add("slideshow-slide-active");
        window.setTimeout(function () {
          activeSlide.classList.remove("slideshow-slide-out");
        }, 200);
      } //prev

      nextSlide() {
        let activeSlide = document.querySelector(".slideshow-slide-active");
        let activeSlideIndex = this.slides.indexOf(activeSlide);
        let nextSlideIndex = 0;
        if (activeSlideIndex === this.slides.length - 1) {
          nextSlideIndex = 0;
        } else {
          nextSlideIndex = activeSlideIndex + 1;
        }
        activeSlide.classList.remove("slideshow-slide-active");
        activeSlide.classList.add("slideshow-slide-out");
        this.updatePaginationCount(nextSlideIndex);

        this.slides[nextSlideIndex].classList.add("slideshow-slide-active");
        window.setTimeout(function () {
          activeSlide.classList.remove("slideshow-slide-out");
        }, 200);
      } //next

      events() {
        this.images.forEach((images) =>
          images.addEventListener("click", () => {
            this.open(images);
          })
        );
        this.closeButton.addEventListener("click", () => this.close());
        this.nextButton.addEventListener("click", () => this.nextSlide());
        this.prevButton.addEventListener("click", () => this.prevSlide());
        this.window.addEventListener("resize", () => this.setMaxHeight());
        this.window.addEventListener("keydown", (e) => {
          if (this.isOpen() && e.key === "ArrowRight") {
            this.nextSlide();
          }
          if (this.isOpen() && e.key === "ArrowLeft") {
            this.prevSlide();
          }
          if (this.isOpen() && e.key === "Escape") {
            this.close();
          }
        });
      }
    }

    if (document.querySelector(".slideshow")) {
      var slideShow = new Slideshow();
    }
  });

  return (
    <section className='slideshow hidden'>
      <div className='slideshow-inner'>
        <div className='slideshow-slides'></div>
        <div className='slideshow-pagination'>
          <div className='pagination-prev'>
            <button className='pagination-prev-btn'>PREV</button>
          </div>
          <div className='pagination-page'>
            <p className='pagination-page-count'>1/1</p>
          </div>

          <div className='pagination-next'>
            <button className='pagination-next-btn'>NEXT</button>
          </div>
        </div>
        <div className='slideshow-close'>
          <div className='slideshow-close-inner'>
            <button className='slideshow-close-btn'>CLOSE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

Slideshow.propTypes = {};

export default Slideshow;
