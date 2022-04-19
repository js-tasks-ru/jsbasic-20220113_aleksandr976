function initCarousel() {

  let currentSlideNumber = 0;
  let slidesAmount = 4;
  let elem = document.querySelector('[data-carousel-holder]'); // контейнер для всех img

  let carouselInnerElem = elem.querySelector('.carousel__inner');
  let carouselArrowRight = elem.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = elem.querySelector('.carousel__arrow_left');

  update(); // вызов функции (обновить) до её определения

  // реализуем событие клика и вешаем его на родителе

  elem.onclick = ({target}) => {
    if (target.closest('.carousel__arrow_right')) {
      next();
    }

    if (target.closest('.carousel__arrow_left')) {
      prev();
    }
  };

  // реализуем функцию прокрутки вперед-назад

  function next() {
    currentSlideNumber++;
    update();
  }

  function prev() {
    currentSlideNumber--;
    update();
  }

  function update() {
    let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
    carouselInnerElem.style.transform = `translateX(${offset}px)`;

    if (currentSlideNumber == slidesAmount - 1) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }

    if (currentSlideNumber == 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
  }
}
