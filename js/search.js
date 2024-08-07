document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search-input").value;

  if (query.trim() !== "") {
    const searchURL = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    window.location.href = searchURL; // 구글 검색 페이지로 리디렉션
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
