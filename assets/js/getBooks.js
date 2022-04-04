window.addEventListener("load", (e) => {
  const popularBooks = [
    {
      title: "Dune",
      author: "Frank Herbert",
      description:
        "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for.",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458._SX200_.jpg",
    },
    {
      title: "The seven husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498169036l/32620332._SX200_.jpg",
    },
    {
      title: "Harry Potter",
      author: "J. K. Rowling",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SX200_.jpg",
    },
    {
      title: "The Love Hypothesis",
      author: "Ali Hazelwood",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449._SX200_.jpg",
    },

    {
      title: "Crime and Punishment",
      author: "Fydor Dostoyevsky",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1382846449l/7144._SX200_.jpg",
    },
  ];
  const recomendedBooks = [
    {
      title: "Why we sleep",
      author: "Mathew Walker",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556604137l/34466963._SX200_.jpg",
    },
    {
      title: "Homeland elegies a novel",
      author: "Ayad Akhtar",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584627596l/50358133._SX200_.jpg",
    },
    {
      title: "Death in mud lick",
      author: "Eric Eyre",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575277746l/49049906._SX200_.jpg",
    },
    {
      title: "Gleannes",
      author: "Garth Greenwell",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563756741l/45892271._SX200_.jpg",
    },

    {
      title: "The Power of Adrienne Rich",
      author: "Hilary Holladay",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586828699l/52006669._SX200_.jpg",
    },
  ];
  const popularBooksSlider = document.querySelector(".popular_books");
  const recomendedBooksSlider = document.querySelector(".recommended_books");
  popularBooks.map((book) => createBook(book, popularBooksSlider));
  recomendedBooks.map((link) => createBook(link, recomendedBooksSlider));
});

function createBook(book, parentElement) {
  parentElement.appendChild(
    $(
      "div",
      {
        className: "book",
        style: { flex: "0 0 20%", "max-width": "20%" },
        onclick: () => {
          saveBook(book);
        },
      },
      $("img", {
        src: book.src,
        style: { padding: "0 5px" },
      })
    )
  );
}
function saveBook(book) {
  localStorage.setItem("currentBook", JSON.stringify(book));
  window.location.replace("book.html");
}
