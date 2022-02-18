// бургер меню
const bugrer = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

bugrer.addEventListener('click', () => {
  navigation.classList.add('navigation_active');
});

navigationClose.addEventListener('click', () => {
  navigation.classList.remove('navigation_active');
});

// фоновая музыка
try {

  const muteCheckbox = document.querySelector('.mute__checkbox');
  const audio = new Audio('./audio/waterTower.mp3');

  const checkMute = () => {
    if (muteCheckbox.checked) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  if (mute) {
    setTimeout(checkMute(), 1000);
  }

  muteCheckbox.addEventListener('change', checkMute);

} catch { console.log('фонофой музыки нет') }

// слайдер фото видео
try {

  const sliderThumbs = new Swiper('.slider-thumbs', {

    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 4,

  });

  sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex);
  });

  const sliderMain = new Swiper('.slider-main', {

    loop: true,
    spaceBetween: 10,
    loopedSlides: 4,

  });

  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;

  const videos = document.querySelectorAll('video');

  sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i++) {
      videos[i].pause();
    }
  })

  const pagination = document.querySelector('.pagination');
  const paginationArrow = document.querySelector('.pagination__arrow');

  paginationArrow.addEventListener('click', () => {
    pagination.classList.toggle('pagination_active');
  })

} catch { console.log('на этой странице нет слайдера') }
