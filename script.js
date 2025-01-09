// const Splide = require('@splidejs/splide')
// import Splide from '@splidejs/splide/css';

// const { Pagination } = require("swiper/modules");

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuBody = document.getElementById('menuBody');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', () => {
        menuBody.classList.toggle('active');
        menuToggle.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        menuBody.classList.remove('active');
        menuToggle.classList.remove('open'); 
        overlay.classList.remove('active');
    });

    window.addEventListener ('resize', () => {
        if (window.innerWidth > 767.98) {
            menuBody.classList.remove('active');
            menuToggle.classList.remove('open');
            overlay.classList.remove('active');
            menuBody.classList.add("no-transition");
        } else {
            menuBody.classList.remove("no-transition");
        }
    })

    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener ('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if ((scrollTop > lastScrollTop) && (scrollTop > header.offsetHeight)) {
            header.classList.add('hidden');
        } else if (scrollTop < lastScrollTop) {
            header.classList.remove('hidden');
        } 
        
        lastScrollTop = scrollTop;
    });  
});

// document.addEventListener('DOMContentLoaded', () => {
// const swiper = new Swiper('.reviews__slider', {
//     slidesPerView: 1, 
//     spaceBetween: 20,
//     navigation: {
//         nextEl: '.reviews__arrow-right',
//         prevEl: '.reviews__arrow-left',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     loop: true,
// });
// });

const view = document.querySelector('.insights__more');
const textMore = document.querySelectorAll('.item-info__text-par');
const arrowMore = document.querySelector('.more__image');
const moreTitle = document.querySelector('.more__title');
console.log(moreTitle);
console.log(arrowMore);
console.log(view);
console.log(textMore);

view.addEventListener('click', function() {
    textMore.forEach(text => {
        text.classList.toggle('view-more');
    });
    
    const isExpanded = moreTitle.textContent === 'View More';//isExpanded = true або isExpanded = false
    moreTitle.textContent = isExpanded ? 'View Less' : 'View More';

    if (this.textContent.trim() === 'View Less') {
        arrowMore.classList.add('less');
    } else {
        arrowMore.classList.remove('less');
    }
});

const cards = document.querySelectorAll('.item-info__tags');
console.log(cards);

function toggleText (tag) {
    if (tag.textContent === '...') {
        tag.textContent = tag.dataset.originalText;
    } else {
        tag.textContent = '...';
    }
}

function handleScreenChahge (event) {
    cards.forEach((card) => {
        const tags = card.querySelectorAll('.item-info__tag');
        if (tags.length == 0) return;
        const lastTag = tags[tags.length - 1];
        
        if (!lastTag.dataset.originalText) {
            lastTag.dataset.originalText = lastTag.textContent;
        }

        if (event.matches) {
            lastTag.textContent = '...';
            lastTag.style.cursor = 'pointer';
            lastTag.addEventListener('click', () => toggleText(lastTag));
        } else {
            lastTag.textContent = lastTag.dataset.originalText;
            lastTag.style.cursor = 'default';
            lastTag.replaceWith(lastTag.cloneNode(true));
        }
    });
}

//створили(ініціалізували) медіазапит
const mediaQuery = window.matchMedia('(max-width: 415px)');

//перевірка на медізапит при завантиженні сторінки -> виклик функції handleScreenChahge()
handleScreenChahge(mediaQuery);

//перевірка на медізапит при зміні розміру вікна
mediaQuery.addEventListener('change', handleScreenChahge);


const splide = new Splide( '.splide', {
    perPage: 1,
    pagination: false,

}).mount();

const paginationContainer = document.querySelector('.splide-pagination');

if (paginationContainer) {
  const slideCount = splide.length;

  for (let i = 0; i < slideCount; i++) {
    const button = document.createElement('button');
    button.classList.add('splide-pagination__button');
    button.setAttribute('data-slide', i);

    button.addEventListener('click', () => {
      splide.go(i);
    });

    paginationContainer.appendChild(button);
  }

  splide.on('move', (index) => {
    const buttons = document.querySelectorAll('.splide-pagination__button');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('is-active', i === index); 
    });
  });

  paginationContainer.querySelector('.splide-pagination__button').classList.add('is-active');
}