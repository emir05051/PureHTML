window.addEventListener("load", () => {
  document.getElementById("search").value = localStorage.getItem("search");
  let form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = document.getElementById("search").value;
    localStorage.setItem("search", value);
    window.location.href = "search.html";
  });
});
