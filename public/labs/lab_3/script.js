/* Put your javascript in here */

const imageArray = [];
for (let i = 0; i < document.querySelectorAll('.carousel div').length; i++) {
    imageArray.push(document.querySelectorAll('.carousel div')[i].dataset.background);
}

let currentImageIndex = -1;

function advanceCarouselItem() {
    currentImageIndex++;

    if (currentImageIndex >= imageArray.length) {
        currentImageIndex = 0;
    }

    document.querySelector('.image-container').style.cssText = 'background: url("' + imageArray[currentImageIndex] + '") no-repeat center center; background-size: cover;';

    const elems = document.getElementsByClassName('caption');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.cssText = 'opacity: 0;';
    }

    const currentCaption = document.querySelector('.caption-' + (currentImageIndex));
        currentCaption.style.cssText = 'opacity: 1;';
    }

    let intervalID = setInterval(advanceCarouselItem, 3000);