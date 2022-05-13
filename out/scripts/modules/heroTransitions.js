class HeroTransitions {
    constructor() {
        this.window = window;
        this.heroTitle = document.querySelector(".hero-text-container");
        this.heroImage = document.querySelector(".hero-featured-image");
        this.heroText = document.querySelector(".hero-project-title");
        this.transIn = ["transform", "scale-105", "filter-brightness", "duration-200"];
        this.transOut = ["transform", "scale-100", "duration-100", "filter-none"];
        this.events();
    };

    imageTransIn() {
        this.heroImage.classList.add(...this.transIn);
        this.heroImage.classList.remove(...this.transOut);
    };

    imageTransOut() {
        this.heroImage.classList.remove(...this.transIn);
        this.heroImage.classList.add(...this.transOut);
    };

    textTransIn() {
        this.heroText.setAttribute("style", "filter:invert(100%);background-color:#FFF; text-decoration-line:underline; text-decoration-color:#0a3e41; text-decoration-thickness:2px;");
    };

    textTransOut() {
        this.heroText.setAttribute("style", "filter:invert(0%); text-decoration-line:none;");
    };

    swapImageIn() {
        window.setTimeout(() => {
            this.heroImage.src = "assets/images/testglitch.jpg";
        },1200);
        window.setTimeout(() => {
            this.heroImage.src = "assets/images/test.jpg";
        },1600);

        window.setTimeout(() => {
            this.heroImage.src = "assets/images/testglitch.jpg";
        },3200);
        window.setTimeout(() => {
            this.heroImage.src = "assets/images/test.jpg";
        },3350);
    };

    swapImageOut() {
        this.heroImage.src = "assets/images/test.jpg";
    };

    animateIn() {
        if(this.window.innerWidth > 767){
            this.textTransIn();
            this.imageTransIn();
        };
    };

    animateOut() {
        if(this.window.innerWidth > 767){
            this.textTransOut();
            this.imageTransOut();
        };
    };

    events() {
            this.window.addEventListener("load", this.swapImageIn.bind(this));
            this.heroTitle.addEventListener("mouseenter", this.animateIn.bind(this));
            this.heroTitle.addEventListener("mouseleave", this.animateOut.bind(this));

            this.heroImage.addEventListener("mouseenter", this.animateIn.bind(this));
            this.heroImage.addEventListener("mouseleave", this.animateOut.bind(this));
        
    };

};

export default HeroTransitions;