const serachButton = document.querySelector(".search-button button");
serachButton.addEventListener("click", () => {
  window.location.href = "result.html";
});

const watchMoreButton = document.querySelector(".result-card-container button");
watchMoreButton.addEventListener("click", () => {
  window.location.href = "meals-details.html";
});
