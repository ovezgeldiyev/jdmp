// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
var menu2 = document.getElementById("menu2");
let header = document.getElementById("header");

if (menu) {
  const menuCloseBtn = menu.querySelector(".nav__inner-close");
  menuBtn.onclick = function () {
    menu.classList.add("active");
    body.classList.add("active");
  };
  if (menuCloseBtn) {
    menuCloseBtn.onclick = function () {
      menu.classList.remove("active");
      body.classList.remove("active");
    };
  }

  window.onclick = function (event) {
    if (event.target == menu) {
      menu.classList.remove("active");
      body.classList.remove("active");
    }
  };
}
if (menu2) {
  menuBtn.onclick = function () {
    menu2.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("active");
    header.classList.toggle("active");
  };
  window.onclick = function (event) {
    if (event.target == menu2) {
      menu2.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("active");
      header.classList.remove("active");
    }
  };
}

// menu end
// scroll start
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
let priceFoot = document.getElementById("priceFoot");
function priceScroll() {
  const amountSec = document.querySelector(".amount");
  if (
    window.scrollY >= 40 &&
    window.scrollY + window.innerHeight <= amountSec.offsetTop
  ) {
    priceFoot.classList.add("active");
  } else {
    priceFoot.classList.remove("active");
  }
}
window.onscroll = function () {
  scrollFunc();
  if (priceFoot) {
    priceScroll();
  }
};
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// sliders
$(function () {
  $(".info__inner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
  });
});
$(function () {
  $(".intro__inner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
// showMore start
const showMoreBtns = document.querySelectorAll(".showMoreBtn");
showMoreBtns.forEach((showMoreBtn) => {
  showMoreBtn.onclick = () => {
    const parentElement = showMoreBtn.parentNode;
    const showMore = parentElement.parentElement.querySelector(".showMore");
    showMore.classList.toggle("active");
    showMoreBtn.classList.toggle("active");
  };
});
// showMore end

const amountBtn = document.querySelector(".amountBtn");
const amount = document.querySelector("#amount ");
if (amount) {
  // range picker
  var slider = document.getElementById("range-slider__range");
  var output = document.getElementById("range-slider__value");

  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;

    var value = ((this.value - this.min) / (this.max - this.min)) * 100;

    this.style.background =
      "linear-gradient(to right, #04BB62 0%, #04BB62 " +
      value +
      "%, #d7dcdf " +
      value +
      "%, #d7dcdf 100%)";
  };
  // range picker end
  if (amountBtn) {
    amountBtn.onclick = () => {
      amount.scrollIntoView();
    };
  }
}

const inputWrapper = document.getElementById("inputWrapper");
if (inputWrapper) {
  const inputs = inputWrapper.querySelectorAll(".input");

  inputs.forEach((item) => {
    const inputItem = item.querySelector("input");
    const label = item.querySelector("label");
    if (inputItem.value.length != 0) {
      label.classList.add("top");
    } else {
      label.classList.remove("top");
    }
    inputItem.onchange = () => {
      if (inputItem.value.length != 0) {
        label.classList.add("top");
      } else {
        label.classList.remove("top");
      }
    };
  });
}
