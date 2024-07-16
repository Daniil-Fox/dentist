const dropdownItems = document.querySelectorAll(".nav__item--drop");

dropdownItems.forEach((item) => {
  const body = item.querySelector(".dropdown");

  if (window.matchMedia("(min-width: 769px)").matches) {
    body.style.left = item.offsetLeft + "px";
    item.addEventListener("mouseenter", (e) => {
      body.style.maxHeight = body.scrollHeight + "px";
    });
    item.addEventListener("mouseleave", (e) => {
      body.style.maxHeight = null;
    });
  } else {
    item.addEventListener("click", (e) => {
      let isActive = body.classList.toggle("active");
      body.style.maxHeight = isActive ? body.scrollHeight + "px" : null;
    });
  }
});
