const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const btnBox = document.querySelector(".btn-box");
const cart = document.querySelector(".cart");
const icon = document.querySelector(".fa-solid-cart");
const box = document.querySelector(".fa-cube");

btn.addEventListener("click", function () {
  icon.classList.add("icon");
  box.classList.add("animate-box");
  text.style.opacity = "0";
  setTimeout(() => {
    icon.classList.replace("fa-cart-shopping", "fa-cart-plus");
    box.classList.remove("animate-box");
  }, 1000);
  setTimeout(() => {
    icon.classList.replace("fa-cart-plus", "fa-cart-shopping");
    text.style.opacity = "1";
    icon.classList.remove("icon");
  }, 1500);
});
