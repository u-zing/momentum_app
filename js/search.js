document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search-input").value;

  if (query.trim() !== "") {
    const searchURL = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    window.open(searchURL, "_blank"); // 뉴탭에서 열리게
  }
});

document
  .getElementById("search-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search-button").click();
    }
  });
