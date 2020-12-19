const header = document.getElementById('header');
const parentHeader = document.getElementById('parentHeader');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {

    if (header.getBoundingClientRect().top <= 0) {
        parentHeader.className = 'parent-header bg-white'
    }
}


//плавный скролинг
const a = document.querySelector('a[href="#about"]');
a.addEventListener('click', scrollTransition)
function scrollTransition() {
    event.preventDefault();
    const blockId = this.getAttribute('href');
    const block = document.querySelector('' + blockId);
    block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'

    });
    block.classList.toggle('margin-top')
}





//иодальное окно с формой
const contact = document.getElementById('contact');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

contact.addEventListener('click', showModal);
close.addEventListener('click', closeModal);

function showModal() {
    modal.className = 'modal-visible';

}
function closeModal() {
    modal.className = 'modal-visible modal-invisible'
}










// slider

const slides = document.getElementById('slides');
const slide = slides.querySelectorAll('.slide');
const slideTime = 2000;
const slider_left = document.getElementById('slider_left');
const slider_right = document.getElementById('slider_right');
const toggle_radio = document.getElementById('toggle_radio');
const toggle_input = toggle_radio.querySelectorAll('input')
const slides_mine = document.getElementById('slides_mine')
const slide_mine = slides_mine.querySelectorAll('.slide_mine')

let currentSlide = 0;
let slideInterval;





function continueSlideInterval() {
    slideInterval = setInterval(nextSlide, slideTime);

}
function nextSlide() {
    slideReset();
    currentSlide = ++currentSlide % slide.length;
    slideSet();
}
function stopSlide() {
    clearInterval(slideInterval);
}
function slideReset() {
    slide[currentSlide].className = 'slide';

    slide_mine[currentSlide].className = 'slide_mine';
}
function slideSet() {
    slide[currentSlide].className = 'slide showing';
    toggle_input[currentSlide].checked = true
    slide_mine[currentSlide].className = 'slide_mine showing_mine';
}
function showPreviousSlide() {
    stopSlide();
    slideReset();
    currentSlide = (currentSlide == 0) ? slide.length - 1 : currentSlide - 1;
    slideSet();

}
function showNextSlide() {
    stopSlide();
    nextSlide();

}


function toggleSlide(e) {
    stopSlide()
    slideReset()
    currentSlide = e.target.value;
    slideSet();

}
function toggleMineSlide(e) {
    if (e.target.tagName == 'IMG') {
        stopSlide();
        slideReset();
        currentSlide = e.target.id;
        slideSet();

    }
}


continueSlideInterval();
slides.onmouseover = stopSlide;
slides.onmouseout = continueSlideInterval;
slider_left.addEventListener('click', showPreviousSlide);
slider_right.addEventListener('click', showNextSlide);
toggle_radio.addEventListener('input', toggleSlide);
slides_mine.addEventListener('click', toggleMineSlide);




//меню бургер!



const menu_burger = document.getElementById('menu_burger');
const menu = document.getElementById('menu');

menu_burger.addEventListener('click', showHideMenu);

function showHideMenu() {
    menu.classList.toggle('d-none');

}





//анимация появления блока
const parent = document.querySelectorAll('.parent-div')
const elem = document.querySelectorAll('.parent-div > .parent-div__elem')

window.addEventListener('scroll', showBlock);

function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible && bottomVisible
}

function showBlock() {
    for (let i = 0; i < parent.length; i++) {
        if (isVisible(parent[i])) {
            elem[i].className = 'parent-div__elem';
        }
    }
}

































































