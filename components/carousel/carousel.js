class Carousel {
    constructor(image) {
        this.image = image;
        this.imgLength = image.length;
        this.slide = 0;
        this.moving = true;
        // console.log(this.image)
        this.initCarousel();
    }
    setInitialClasses() {
        // Targets the previous, current, and next images

        this.image[this.imgLength - 1].classList.add('prev');
        this.image[0].classList.add("active");
        this.image[1].classList.add("next");

        // Set event listeners on the buttons

        let prev = document.querySelector('.carousel-button.prev')
        let next = document.querySelector('.carousel-button.next')
        // console.log(next)

        next.addEventListener('click', () => this.moveNext());
        prev.addEventListener('click', () => this.movePrev());

    }

    moveNext() {
        if (!this.moving) {
            if (this.slide === this.imgLength - 1) {
                this.slide = 0
            } else {
                this.slide++
            }

            this.moveCarousel(this.slide);
        }
    }

    movePrev() {
        if (!this.moving) {
            if (this.slide === 0) {
                this.slide = this.imgLength - 1
            } else {
                this.slide--
            }

            this.moveCarousel(this.slide);
        }
    }

    disableMove() {
        this.moving = true;
        setTimeout(() => {
            this.moving = false
        }, 500);
    }

    moveCarousel(slide) {
        if (!this.moving) {
            this.disableMove();
            
            if (this.imgLength > 3) {
                let newPrev = this.slide - 1;
                let newNext = this.slide + 1;
                let oldPrev = this.slide - 2;
                let oldNext = this.slide + 2;

                if (newPrev <= 0) {
                    oldPrev = this.imgLength - 1
                } else if (newNext >= this.imgLength - 1) {
                    oldNext = 0;
                }

                if (this.slide === 0) {
                    newPrev = this.imgLength - 1;
                    oldPrev = this.imgLength - 2;
                    oldNext = this.slide + 1;
                } else if (this.slide === this.imgLength - 1) {
                    newPrev = this.slide - 1
                    newNext = 0;
                    oldNext = 1;
                }

                this.image[oldPrev].className = 'carousel-photo';
                this.image[oldNext].className = 'carousel-photo';

                this.image[newPrev].className = 'carousel-photo' + ' prev'
                this.image[this.slide].className = 'carousel-photo' + ' active'
                this.image[newNext].className = 'carousel-photo' + ' next'

            }


        }
    }

    initCarousel() {
        this.setInitialClasses();
        this.moving = false;
    }
}

const images = document.querySelectorAll('.carousel-photo');

new Carousel(images);
