window.addEventListener("load", (e) => {
  const main = document.querySelector(".main");
  const bookData = JSON.parse(getBookFromLocalStorage("currentBook"));
  document.title = bookData.title;

  generateBookPage(main, bookData);
});

function getBookFromLocalStorage() {
  return localStorage.getItem("currentBook");
}

function generateBookPage(parentElement, bookData) {
  let time = randomCount();

  parentElement.append(
    $(
      "div",
      { className: "book_wrap flex center" },
      $(
        "div",
        { className: "book" },
        $(
          "div",
          { className: "book_details" },
          $(
            "div",
            { className: "book_main flex column" },
            $(
              "div",
              { className: "flex row adaptive_container" },
              $(
                "div",
                { className: "book_main_left" },
                $("h1", { innerText: bookData.title }),
                $("p", { className: "author", innerText: bookData.author }),
                $("p", {
                  innerText: `The average reader, reading at a speed of 300 WPM, would take ${getHours(
                    randomCount()
                  )} to read ${bookData.title} by ${bookData.author}.`,
                }),
                $("p", {
                  innerText:
                    "We assumed a speed of 300 WPM for this calculation. Complete a reading speed test below to calculate using your own reading speed",
                }),
                $(
                  "div",
                  { className: "buttons flex column" },
                  $("button", {
                    innerText: "Check it out on Amazon",
                    className: "button amazon",
                    onclick: () => {
                      window.location.href =
                        "https://www.amazon.com/s?k=" +
                        bookData.title.split(/[ -:]/gm).join("+").toLowerCase();
                    },
                  }),
                  $("button", {
                    innerText: "Listen to the audiobook on Audible",
                    className: "button audible",

                    onclick: () => {
                      window.location.href =
                        "https://www.audible.de/search?keywords=" +
                        bookData.title.split(/[ -:]/gm).join("+").toLowerCase();
                    },
                  }),
                  $(
                    "div",
                    {
                      className: "flex row between book_buttons",
                    },
                    $("button", {
                      innerText: "Test speed",
                      className: "button testspeed",
                    }),
                    $("button", {
                      innerText: "Add to shelf",
                      className: "button shelf",
                    })
                  )
                )
              ),
              $(
                "div",
                { className: "book_main_right" },
                $("img", {
                  src:
                    bookData.src !== undefined
                      ? bookData.src
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Antique_book_page_turning.jpg/1200px-Antique_book_page_turning.jpg",
                })
              )
            ),
            $(
              "div",
              { className: "flex row around adaptive_container_words" },
              $(
                "div",
                { className: "word_count flex column" },
                $("h1", { innerText: "Word Count" }),
                $("p", {
                  innerText: "estimated",
                  style: { color: "#6c757d" },
                }),
                $("p", { innerText: time })
              ),
              $(
                "div",
                { className: "pages_count flex column" },
                $("h1", { innerText: "Number of pages" }),
                $("p", { innerText: Math.round(time / 298) })
              ),
              $(
                "div",
                { className: "audiobook flex column" },
                $("h1", { innerText: "Audiobook Duration" }),
                $("p", { innerText: getHours(time) })
              )
            ),
            $(
              "div",
              { className: "description" },
              $("h1", { innerText: "Description" }),
              $("p", {
                innerText:
                  bookData.description !== undefined &&
                  bookData.description !== ""
                    ? bookData.description
                    : "The description is currently not available",
              })
            )
          )
        )
      )
    )
  );
}
function randomCount() {
  return Math.round(Math.random() * 1000000);
}
function getHours(number) {
  return `${Math.floor(number / 9500)} hours and ${number % 60} minutes`;
}
