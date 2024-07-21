const accordionItems = document.querySelectorAll("[data-acc-container]");

accordionItems.forEach((item) => {
  const btn = item.querySelector("[data-acc-btn]");
  const content = item.querySelector("[data-acc-content]");
  if (item.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let isActive = item.classList.toggle("active");

    content.style.maxHeight = isActive ? content.scrollHeight + "px" : null;
  });
});
