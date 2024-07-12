const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) {
  initRatings();
}
function initRatings() {
  let ratingActive;
  let ratingValue;

  ratings.forEach((r) => {
    initRate(r);
  });

  function initRate(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating__active");
    ratingValue = rating.querySelector(".rate__value");
    console.log(ratingValue);
  }

  function setRatingActiveWidth(index = ratingValue.textContent) {
    const ratingActiveWidth = index / 0.05;
    console.log(index);
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
}
