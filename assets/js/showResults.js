window.addEventListener("load", async () => {
  let search = localStorage.getItem("search");
  let parentElement = document.querySelector(".results");
  let data = await fetch("https://poetrydb.org/title/" + search)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  if (data.length > 0) {
    document.querySelector(".no_results").remove();
  }

  data.forEach((e) => createSearchBook(parentElement, e));
});

function createSearchBook(parentElement, book) {
  parentElement.append(
    $(
      "div",
      {
        innerText: book.title,
        className: "flex column",
        onclick: () => {
          saveBook(book);
        },
        style: { width: "30%", "align-items": "center", cursor: "pointer" },
      },
      $("img", {
        src: "https://www.postmen.com/blog/static/ef6d87ee75ac0d0d03f9178e2a8472b5/book-image.jpg",
        style: {
          width: "250px",
          height: "250px",
        },
      })
    )
  );
}

function saveBook(book) {
  let description = book.lines.reduce((acc, line) => {
    return acc + line;
  }, " ");
  book.description = description;
  localStorage.setItem("currentBook", JSON.stringify(book));
  window.location.replace("book.html");
}
