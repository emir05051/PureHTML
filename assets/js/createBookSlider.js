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
      description:
        "The Seven Husbands of Evelyn Hugo is a historical fiction novel by American author Taylor Jenkins Reid and published by Atria Books in 2017. The novel tells the story of the fictional Old Hollywood star Evelyn Hugo, who at age 79 gives a final interview to an unknown journalist, Monique Grant.",
    },
    {
      title: "Harry Potter",
      author: "J. K. Rowling",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SX200_.jpg",
      description:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people). ",
    },
    {
      title: "The Love Hypothesis",
      author: "Ali Hazelwood",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449._SX200_.jpg",
      description:
        "As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees",
    },

    {
      title: "Crime and Punishment",
      author: "Fydor Dostoyevsky",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1382846449l/7144._SX200_.jpg",
      description:
        "Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866.[1] It was later published in a single volume. It is the second of Dostoevsky's full-length novels following his return from ten years of exile in Siberia. Crime and Punishment is considered the first great novel of his mature period of writing.[2] The novel is often cited as one of the supreme achievements in world literature",
    },
  ];
  const recomendedBooks = [
    {
      title: "Why we sleep",
      author: "Mathew Walker",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556604137l/34466963._SX200_.jpg",
      description: "",
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
