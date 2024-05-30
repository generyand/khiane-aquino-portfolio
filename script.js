const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileNav = document.querySelector(".mobile-nav-wrapper");
const mobileMenuBtns = document.querySelectorAll(".mobile-menu-btns li a");
const main = document.querySelector("main");
const body = document.body;
console.log(mobileMenuBtns);

const getScrollbarWidth = () => {
  // Create a div with a large height and scroll
  const scrollDiv = document.createElement("div");
  scrollDiv.style.cssText =
    "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
  document.body.appendChild(scrollDiv);

  // Measure the scrollbar width
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // Remove the div
  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
};

openMenuBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
  body.classList.add("scroll-disabled");
  body.style.paddingRight = `${getScrollbarWidth()}px`;
});

closeMenuBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  body.classList.remove("scroll-disabled");
  body.style.paddingRight = "0";
});

mobileMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    body.classList.remove("scroll-disabled");
    body.style.paddingRight = "0";
  });
});
