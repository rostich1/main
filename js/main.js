
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



//CALENDAR


function createCalendar(id, year, month) {
    const elem = document.getElementById(id);
    const mon = month - 1;
    const d = new Date(year, mon);
    let table = "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";



    for (let i = 0; i < getDay(d); i++) {
        table += "<td></td>";
    }
    while (d.getMonth() == mon) {
        table += "<td>" + d.getDate() + "</td>";
        if (getDay(d) % 7 == 6) {
            table += "</tr><tr>";
        }
        d.setDate(d.getDate() + 1)

    }
    if (getDay(d)!=0){
        for(let i = getDay(d);i < 7 ; i++){
            table +='<td></td>';
        }
    }
    table +='</tr></table>';
    elem.innerHTML = table;
}


function getDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return (day - 1);

}
let date = new Date();
createCalendar('calendar',date.getFullYear(), date.getMonth()+1);

























































//бегающяя строка
// function animateMarquee(el, duration) {
//     const innerEl = el.querySelector('.marquee__injusp');
//     const innerWidth = innerEl.offsetWidth;
//     const cloneEl = innerEl.cloneNode(true);
//     el.appendChild(cloneEl);

//     let start = performance.now();
//     let progress;
//     let translateX;

//     requestAnimationFrame(function step(now) {
//       progress = (now - start) / duration;

//       if (progress > 1) {
//           progress %= 1;
//         start = now;
//       }

//       translateX = innerWidth * progress;

//       innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
//       cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
//       requestAnimationFrame(step);
//     });
//   }

//   const marquee1 = document.querySelector('#marquee1');
//   const marquee2 = document.querySelector('#marquee2');

//   animateMarquee(marquee1, 10000);
//   animateMarquee(marquee2, 15000);
