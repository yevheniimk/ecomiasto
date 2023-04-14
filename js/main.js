
// Menu mobile

const menuBtn = document.querySelector(".menu__burger");
const nav = document.querySelector(".nav_mobile");
const body = document.querySelector("body");

menuBtn.addEventListener('click', openMenu);


document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight; //Если нужен отступ сверху
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset - 80;
        
        if (body.classList.contains("fixed")) {
            closeMenu (); 
            setTimeout (function () {
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 500);
        } else {
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

function openMenu () {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('fixed');
}

function closeMenu () {
    nav.classList.remove('active');
    menuBtn.classList.remove('active');
    body.classList.remove('fixed');
}

function scrollToTop () {
    if (body.classList.contains("fixed")) {
        closeMenu (); 
        setTimeout (function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 500);
    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

// Fixed header


const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    let scrollDistans = window.scrollY;
    if(document.querySelector('.intro') !== null) {
        const intro = document.querySelector('.intro');
        const introHeight = intro.offsetHeight;
        if (scrollDistans >= introHeight) {
            header.classList.add('header-fixed');
            intro.style.marginTop = `${headerHeight}px`;
        } else {
            header.classList.remove('header-fixed');
            intro.style.marginTop = null;
        }
    } else {
        const section = document.querySelector('.first-section')
        if (scrollDistans >= 500) {
            header.classList.add('header-fixed');
            section.style.marginTop = `${headerHeight}px`;
        } else {
            header.classList.remove('header-fixed');
            section.style.marginTop = null;
        }
    }

})

// Sevices tabs
const pageWidth = document.documentElement.scrollWidth;


const tabs = document.querySelector(".services__tabs-wrap");
const content = document.getElementById ("tabs__content");
const tabsElements = Array.from(document.querySelectorAll(".tabs__btn"));
const services = document.querySelector(".services__all");
const servicesCurrent = document.querySelector(".services__current");
const btnNext = document.querySelector('.btn-next-serv');
const btnPrev = document.querySelector('.btn-prev-serv');


if (pageWidth >= 1110) {
    const changeClass = el => {
        services.innerHTML = `0${tabsElements.length}`;  
        for (let i = 0; i < tabs.children.length; i++) {
            tabs.children[i].classList.remove('active');
        }
        el.classList.add('active');
    };
    
    for(let index = 0; index < tabsElements.length; index++) {
        tabsElements[index].addEventListener('mouseover', (e) => {
            let currTab = e.target.dataset.btn;
            changeClass(e.target);
            for (let i = 0; i < content.children.length; i++) {
                content.children[i].classList.remove('active');
                if (content.children[i].dataset.content == currTab) {
                    content.children[i].classList.add('active');
                    servicesCurrent.innerHTML = `0${+[i + 1]}`;
                }
            };
        });
    }
} else {
    services.innerHTML = `0${tabsElements.length}`;
    let i = 0;
    let y = 0;
    btnNext.addEventListener('click', () => {
    
       i++;
       y++;
       if (i >= tabsElements.length && y >= content.children.length) {
        tabsElements[i-1].classList.remove("active");
        content.children[i-1].classList.remove('active');
        servicesCurrent.innerHTML = `0${content.children[0].dataset.content}`;
        i=0;
        y=0;
        tabsElements[i].classList.add("active");
        content.children[i].classList.add('active');
       } else {
        tabsElements[i].classList.add("active");
        content.children[i].classList.add('active');
        servicesCurrent.innerHTML = `0${content.children[i].dataset.content}`;
        content.children[i-1].classList.remove('active');
        tabsElements[i-1].classList.remove("active");

       }
    });
    btnPrev.addEventListener('click', () => {

        tabsElements[i].classList.remove("active");
        content.children[i].classList.remove('active');
        i = i - 1;
        if(i < 0){
            i = tabsElements.length - 1;
            y = content.children.length - 1;
        }
        tabsElements[i].classList.add("active");
        content.children[i].classList.add('active');
        servicesCurrent.innerHTML = `0${+[i] + 1}`;
    })
}

// Tech tab

const tabsTech = document.querySelector(".technology__tabs-wrap");
const contentTech = document.getElementById ("tabs__content_tech");
const tabsElementsTech = Array.from(document.querySelectorAll(".tabs__btn_tech"));
const technology = document.querySelector(".technology__all");
const techCurrent = document.querySelector(".technology__current");
const btnNextTech = document.querySelector('.btn-next-tech');
const btnPrevTech = document.querySelector('.btn-prev-tech');


if (pageWidth >= 1110) {
    const changeClass = el => {
        technology.innerHTML = `0${tabsElementsTech.length}`; 
        for (let i = 0; i < tabsTech.children.length; i++) {
            tabsTech.children[i].classList.remove('active');
        }
        el.classList.add('active');
    };
    
    for(let index = 0; index < tabsElementsTech.length; index++) {
        tabsElementsTech[index].addEventListener('mouseover', (e) => {
            let currTab = e.target.dataset.btn;
            changeClass(e.target);
            for (let i = 0; i < contentTech.children.length; i++) {
                contentTech.children[i].classList.remove('active');
                if (contentTech.children[i].dataset.content == currTab) {
                    contentTech.children[i].classList.add('active');
                    techCurrent.innerHTML = `0${+[i] + 1}`;
                }
            };
        });
    }
} else {
    technology.innerHTML = `0${tabsElementsTech.length}`;
    let i = 0;
    let y = 0;
    btnNextTech.addEventListener('click', () => {
    
       i++;
       y++;
       if (i >= tabsElementsTech.length && y >= contentTech.children.length) {
        techCurrent.innerHTML = `0${contentTech.children[0].dataset.content}`;
        tabsElementsTech[i-1].classList.remove("active");
        contentTech.children[i-1].classList.remove('active');
        i=0;
        y=0;
        tabsElementsTech[i].classList.add("active");
        contentTech.children[i].classList.add('active');
       } else {
        tabsElementsTech[i].classList.add("active");
        contentTech.children[i].classList.add('active');
        contentTech.children[i-1].classList.remove('active');
        tabsElementsTech[i-1].classList.remove("active");
        techCurrent.innerHTML = `0${contentTech.children[i].dataset.content}`;

       }
    });
    btnPrevTech.addEventListener('click', () => {

        tabsElementsTech[i].classList.remove("active");
        contentTech.children[i].classList.remove('active');
        i = i - 1;
        if(i < 0){
            i = tabsElementsTech.length - 1;
            y = contentTech.children.length - 1;
        }
        tabsElementsTech[i].classList.add("active");
        contentTech.children[i].classList.add('active');
        techCurrent.innerHTML = `0${+[i] + 1}`;
    })
}

// Slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    freemode: true,
    slidesPerView: 1.1,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        }
    },
    breakpoints: {
        280: {
            slidesPerView: 1.05,
        }
    }
});


const swiperTwo = new Swiper ('.swiper-two', {
    direction: 'vertical',
    loop: true,
    autoplay: true,
    delay: 3000,
    speed: 500,
    allowTouchMove: false,
    slidesPerView: 1,
});


// Scroll 
if (pageWidth >= 991) {
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            const topOffset = document.querySelector('.header').offsetHeight;
            // const topOffset = 0; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset + 30;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// Map 
function initMap() {
    let coordinates = {lat: 50.67236, lng: 17.98532};
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 19,
        center: coordinates,
    });
    const image = '../img/pin-icon.svg';
    const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image,
    });
}
window.initMap = initMap;







