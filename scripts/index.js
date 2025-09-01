//News slider section

const swiperNews = new Swiper(".news__swiper", {
  loop: true,
  loopedSlides: 3,
  pagination: {
    el: ".news__pagination",
    clickable: true,
    type: "bullets",
  },
  autoplay: {
    delay: 5000,
  },
});

//Collection slider section

const swiperCollection = new Swiper(".collection__swiper", {
  slidesPerView: "auto",
  freeMode: true,
  loop: false,
  spaceBetween: 24,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//FAQ acordion section

document.querySelector(".faq__questions").addEventListener("click", (e) => {
  const question = e.target.closest(".faq__question");
  if (!question) return;

  const icon = question.querySelector(".faq__question-icon");
  const openQuestion = document.querySelector(".faq__question-icon.open");

  if (icon) {
    if (icon !== openQuestion) {
      icon.classList.toggle("open");
      openQuestion.classList.toggle("open");
    } else {
      icon.classList.toggle("open");
    }
  }
});

//Product section

const productImages = [];
for (let i = 1; i <= 15; i++) {
  productImages.push(`./images/image${i}.jpg`);
}

const productGallery = document.querySelector(".product__galelly-items");
productGallery.addEventListener("click", (e) => {
  const product = e.target.closest(".product__gallery-item");
  if (!product) return;

  if (!product.classList.contains("active")) {
    const mainImage = document.querySelector(".product__gallery-main_img");
    const src = product.getAttribute("src");
    mainImage.setAttribute("src", src);
    productGallery
      .querySelector(".product__gallery-item.active")
      .classList.remove("active");
    product.classList.add("active");
  }
});

const groups = document.querySelector(".product__options-items");
groups.addEventListener("click", (e) => {
  const groupImage = e.target.closest(".product__options-item");
  if (!groupImage) return;

  if (!groupImage.classList.contains("active")) {
    const productElements = document.querySelectorAll(".product__gallery-item");
    const groupNumber = parseInt(groupImage.dataset.setItem);

    productElements.forEach((item, index) => {
      const i = groupNumber * 5 + index;
      if (productImages[i]) {
        item.setAttribute("src", productImages[i]);
      }
    });

    productGallery
      .querySelector(".product__gallery-item.active")
      .classList.remove("active");
    productElements[0].classList.add("active");

    const mainImage = document.querySelector(".product__gallery-main_img");
    mainImage.setAttribute("src", productImages[groupNumber * 5]);

    groups
      .querySelector(".product__options-item.active")
      .classList.remove("active");
    groupImage.classList.add("active");
  }
});

const sizesElement = document.querySelector(".product__options-sizes");
sizesElement.addEventListener("click", (e) => {
  const sizeElement = e.target.closest(".product__options-size");
  if (!sizeElement) {
    return;
  }
  console.log(sizeElement);

  if (!sizeElement.classList.contains("active")) {
    const activeSizeElement = sizesElement.querySelector(
      ".product__options-size.active"
    );
    activeSizeElement.classList.remove("active");
    sizeElement.classList.add("active");

    activeSizeElement.setAttribute("aria-pressed", false);
    sizeElement.setAttribute("aria-pressed", true);
  }
});

const gallerySwiper = new Swiper(".product__gallery-swiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  breakpoints: {
    1172: {
      direction: "vertical",
      spaceBetween: 24,
    },
    656: {
      direction: "horizontal",
      spaceBetween: 24,
    },
    0: {
      direction: "horizontal",
      spaceBetween: 16,
    },
  },
});

/* Help Section */

const form = document.querySelector(".help__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you!");
  form.reset();
});

/* Footer */

const sections = document.querySelectorAll(".footer__section");

if (window.innerWidth < 768) {
  sections.forEach((section, index) => {
    if (index === 0) {
      section.setAttribute("open", "");
    } else {
      section.removeAttribute("open");
      section.querySelector(".footer-icon").classList.add("close");
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    sections.forEach((section, index) => {
      if (index === 0) {
        section.setAttribute("open", "");
      } else {
        section.removeAttribute("open");
        section.querySelector(".footer-icon").classList.add("close");
      }
    });
  } else {
    sections.forEach((section) => {
      section.setAttribute("open", "open");
      section.querySelector(".footer-icon").classList.remove("close");
    });
  }
});

const footerConainer = document.querySelector(".footer__container");
footerConainer.addEventListener("click", (e) => {
  const summary = e.target.closest(".footer__title");
  if (!summary) return;
  summary.querySelector(".footer-icon").classList.toggle("close");
});

/* Modal Window */

let modal = document.querySelector(".modal");
let body = document.querySelector("body");

setTimeout(() => {
  modal.style.display = "flex";
  body.style.overflow = "hidden";
}, 1000);

let close = document.querySelector(".modal__close");
close.addEventListener("click", function () {
  modal.style.display = "none";
  body.style.overflow = "visible";
});

document.querySelector(".overlay").addEventListener("click", function () {
  modal.style.display = "none";
  body.style.overflow = "visible";
});

const modalForm = document.querySelector(".modal__form");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you!");
  modalForm.reset();
  modal.style.display = "none";
  body.style.overflow = "visible";
});

/* Burger Menu */

document
  .querySelector(".header__burger-menu")
  .addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("open");
    document.querySelector(".header__menu").classList.toggle("open");
  });
