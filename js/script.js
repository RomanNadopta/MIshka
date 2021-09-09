function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});

let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

//Change hover-catalog basket
let productOrder = document.querySelector(".product-order");
let hare = document.getElementById("hare");
let hareButton = document.getElementById("catalog-hare__button");
let basketUnderwear = document.getElementById("basket-underwear");
let basketUnderwearButton = document.getElementById("basket-underwear__button");
let basketToys = document.getElementById("basket-toys");
let basketToysButton = document.getElementById("basket-toys__button");

function hoverOnHare() {
  hare.style.opacity = "0.6";
}
function hoverOnBasketUnderwear() {
  basketUnderwear.style.opacity = "0.6";
}
function hoverOnBasketToys() {
  basketToys.style.opacity = "0.6";
}

function hoverOffHare() {
  hare.style.opacity = "1";
}
function hoverOffBasketUnderwear() {
  basketUnderwear.style.opacity = "1";
}

function hoverOffBasketToys() {
  basketToys.style.opacity = "1";
}

if (
  hareButton !== null ||
  basketUnderwearButton !== null ||
  basketToysButton !== null
) {
  hareButton.addEventListener("mousemove", hoverOnHare);
  hareButton.addEventListener("mouseout", hoverOffHare);
  basketUnderwearButton.addEventListener("mousemove", hoverOnBasketUnderwear);
  basketUnderwearButton.addEventListener("mouseout", hoverOffBasketUnderwear);
  basketToysButton.addEventListener("mousemove", hoverOnBasketToys);
  basketToysButton.addEventListener("mouseout", hoverOffBasketToys);
}

//------------------------------------------

// Modal - overlay;

let modalOverlay = document.querySelector(".modal-overlay");
let activeButtonOrder = document.getElementById("active-button__order");
window.addEventListener("click", function (e) {
  if (
    e.target == productOrder ||
    e.target == activeButtonOrder ||
    e.target == hareButton ||
    e.target == basketUnderwearButton ||
    e.target == basketToysButton
  ) {
    modalOverlay.classList.add("modal-overlay--opened");
    modalOverlay.classList.remove("modal-overlay--closed");
    document.body.style.overflow = "hidden";
    if (modalOverlay.classList.contains("modal-overlay--opened")) {
      window.addEventListener("click", function (e) {
        if (e.target == modalOverlay) {
          document.body.style.overflow = "visible";
          modalOverlay.classList.remove("modal-overlay--opened");
          modalOverlay.classList.add("modal-overlay--closed");
        }
      });
    }
  }
});

//--------------------------------------------------

// Reviews-Slider
if (document.querySelector(".reviews-slider")) {
  let reviewsSlider = new Swiper(".reviews-slider", {
    direction: "horizontal",
    loop: false,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
    autoHeight: true,
    spaceBetween: 180,
    slidesPerView: 1,
  });
  reviewsSlider.init();
}

// map

if (document.querySelector(".map")) {
  var imageMap = document.querySelector(".map__image-wrapper");

  function initMap() {
    var uluru = { lat: 49.8072, lng: 23.97999 };
    var map = new google.maps.Map(document.getElementById("google-map"), {
      zoom: 17,
      center: uluru,
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      icon: {
        url: "./img/icon-map-pin.svg",
        scaledSize: new google.maps.Size(67, 100),
      },
    });
  }

  function hideImageMap() {
    imageMap.classList.add("visually-hidden");
  }

  window.onload = hideImageMap;
  window.addEventListener("load", initMap);
}

//----------------------------------------
