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

const splide = new Splide ('.splide', {
    perPage: 1,
    gap: '30px',
    pagination: false,
});
splide.mount();

// Контейнер для пагінації
const paginationContainer = document.querySelector('.splide-pagination');

// Перевірка, чи контейнер існує
if (paginationContainer) {
  // Отримати кількість слайдів
  const slideCount = splide.length;

  // Створити кнопки для кожного слайду
  for (let i = 0; i < slideCount; i++) {
    const button = document.createElement('button');
    button.classList.add('splide-pagination__button');
    button.setAttribute('data-slide', i); // Зберегти індекс слайду

    // Додати обробник події
    button.addEventListener('click', () => {
      splide.go(i); // Перейти до відповідного слайду
    });

    paginationContainer.appendChild(button);
  }

  // Оновлювати активну кнопку під час зміни слайду
  splide.on('move', (index) => {
    const buttons = document.querySelectorAll('.splide-pagination__button');
    buttons.forEach((btn, i) => {
      btn.classList.remove('is-active', 'is-merging');

      if (i === index) {
        btn.classList.add('is-active');
      }

      // Додаємо клас для сусідніх кнопок
      if (i === index - 1 || i === index + 1) {
        btn.classList.add('is-merging');
      }
    });
  });

  // Позначити першу кнопку як активну на старті
  paginationContainer.querySelector('.splide-pagination__button').classList.add('is-active');
}