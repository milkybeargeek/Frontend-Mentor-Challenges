const ratingPage = document.getElementById("rating-page");
const ratings = document.getElementById("ratings");
const submitButton = document.getElementById("submit-btn");
const thanksPage = document.getElementById("thanks-page");
const selectedRatingSpan = document.getElementById("selectedRating");
const ratingButtons = ratings.getElementsByClassName("ratingNum");

thanksPage.style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  for (const button of ratingButtons) {
    button.addEventListener("click", function () {
      for (const btn of ratingButtons) {
        btn.classList.remove("selected");
      }
      this.classList.add("selected");
    });
  }

  submitButton.addEventListener("click", function () {
    const selectedRating = ratings.querySelector(".selected");

    if (selectedRating) {
      selectedRatingSpan.textContent = selectedRating.textContent;
      ratingPage.style.display = "none";
      thanksPage.style.display = "flex";
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
