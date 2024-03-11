//----------------------------------------------------------------BURGER----------------------------------------------------------------/
var open_burger = document.getElementById("open_burger");
var main = document.querySelector("#main");
var footer = document.querySelector("#footer");
var header = document.querySelector("#header");
var burger_anim = document.getElementById("burger_anim");
var burger_close = document.getElementById("close_burger");
var opacity_50 = document.getElementById("opacity-50");

open_burger.addEventListener("click", function () {
  burger_anim.classList.toggle("hidden");
  burger_anim.classList.toggle("block");
  opacity_50.classList.toggle("h-0");
  opacity_50.classList.toggle("h-screen");
  main.classList.toggle("absolute");
  main.classList.toggle("block");
  main.classList.toggle("right-3/4");
  header.classList.toggle("sticky");
  header.classList.toggle("right-3/4");
  footer.classList.toggle("static");
  footer.classList.toggle("right-3/4");
  console.log(header.className);
});

burger_close.addEventListener("click", function () {
  burger_anim.classList.toggle("hidden");
  burger_anim.classList.toggle("block");
  opacity_50.classList.toggle("h-0");
  opacity_50.classList.toggle("h-screen");
  main.classList.toggle("absolute");
  main.classList.toggle("block");
  main.classList.toggle("right-3/4");
  header.classList.toggle("sticky");
  header.classList.toggle("absolute");
  header.classList.toggle("right-3/4");
  footer.classList.toggle("static");
  footer.classList.toggle("right-3/4");
});



//----------------------------------------------------------------SMOOTH SCROLL----------------------------------------------------------------//
const scrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


//----------------------------------------------------------------ANIMATION----------------------------------------------------------------///
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});







window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.remove('bg-black');
    header.classList.add('bg-bg');
  } else {
    header.classList.remove('bg-bg');
    header.classList.add('bg-black');
  }
});