document.addEventListener('DOMContentLoaded', () => {
  // slick js
  $('.reviews__inner').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
    ]
  });

  // carousel block height
  if (window.matchMedia("(min-width: 551px)").matches) {
    let rev__block = document.querySelectorAll('.reviews__block');
    let rev__block_arr = [1, 2, 3];
    for (let i = 0; i < rev__block.length; i++) {
      rev__block_arr.push(rev__block[i].clientHeight);
    }
    setTimeout(() => {
      for (let i = 0; i < rev__block.length; i++) {
        rev__block[i].style.height = `${Math.max.apply(null, rev__block_arr) + 80}px`
      }
    }, 1000);
  }

  // cooldown
  setTimeout(() => {
    document.querySelector('.order__cooldown').classList.add('show');
  }, 1000)

  let minutes = document.querySelector('.order__cooldown > p > span:nth-child(2)');
  let second = document.querySelector('.order__cooldown > p > span:nth-child(3)');

  function clockTimeOut() {
    let minutesValue = 29;
    let secondValue = 59;

    let timer = setInterval(() => {
      minutes.innerHTML = minutesValue;
      second.innerHTML = secondValue--;

      if (secondValue === 0) {
        secondValue = 60;
        minutesValue--;
        if (minutesValue < 0) clearInterval(timer)
      }
    }, 1000)
  }
  clockTimeOut();

  // btn
  let call__btn = document.querySelectorAll('.call__btn');
  for (let i = 0; i < call__btn.length; i++) {
    call__btn[i].addEventListener('click', () => {
      document.querySelector('.order__form').scrollIntoView({ block: "center", behavior: "smooth" });
    });
  }

  let order__form_inp = document.querySelectorAll('.order__form_inp > input');
  for (let i = 0; i < order__form_inp.length; i++) {
    order__form_inp[i].addEventListener('focus', () => {
      order__form_inp[i].parentElement.firstChild.classList.add('show');
    });
    order__form_inp[i].addEventListener('blur', () => {
      order__form_inp[i].parentElement.firstChild.classList.remove('show');
    });
  }
});