window.addEventListener("load", () => {
  let search = getId("search");
  let form = getId("form");
  let value;

  if (search) {
    search.value = localStorage.getItem("search");
  }

  if (!form) {
    form = getId("form_small");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (search) {
      value = search.value;
    } else {
      value = getId("input").value;
    }
    localStorage.setItem("search", value);
    window.location.href = "search.html";
  });
});

function getId(id) {
  return document.getElementById(id);
}
