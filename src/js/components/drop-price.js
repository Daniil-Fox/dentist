const items = document.querySelectorAll(".prices__item");

items.forEach((item) => {
  const btn = item.querySelector(".prices-item__left");
  const btnAll = item.querySelector(".prices-item__btn--one");

  const content = item.querySelectorAll(".prices-item__body");
  btn?.addEventListener("click", (e) => {
    item.classList.toggle("active");
  });
  content.forEach((c) => {
    const contentItems = c.querySelectorAll(".prices-pic");
    const hideItems = [...contentItems].slice(3);
    const btnAllItems = c.querySelector(".prices-item__btn--extra");
    hideItems.forEach((el) => el.classList.add("hide"));

    btnAll?.addEventListener("click", (e) => {
      item.classList.add("active");
      hideItems.forEach((it) => it.classList.toggle("visible"));
    });

    btnAllItems?.addEventListener("click", (e) => {
      item.classList.add("active");
      hideItems.forEach((it) => it.classList.toggle("visible"));
    });
  });
});
