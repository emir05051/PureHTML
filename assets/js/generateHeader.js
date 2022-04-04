window.addEventListener("load", () => {
  const body = document.querySelector(".body");
  const mainBody = document.querySelector(".main");
  const header = $(
    "div",
    { className: "header-wrap" },
    $(
      "div",
      { className: "header flex row between" },
      $(
        "a",
        { className: "header_a", href: "main.html" },
        $("img", {
          src: "https://howlongtoread.com/img/hltr-logo.svg",
          alt: "book",
          className: "header_logo",
        }),
        $("span", { innerText: "How Long To Read" })
      ),
      $(
        "div",
        { className: "header_links flex row" },
        $(
          "div",
          { className: "header_search flex" },
          $(
            "form",
            { className: "header_search_form flex" },
            $("input", {
              className: "input",
              type: "text",
              placeholder: "Search book",
            }),
            $("button", { innerText: "Search" })
          )
        ),
        $(
          "ul",
          { className: "header_ul flex row" },
          $(
            "li",
            { className: "header_ul_item" },
            $("a", { href: "", innerText: "Need a Book?" })
          ),
          $(
            "li",
            { className: "header_ul_item" },
            $("a", { href: "about.html", innerText: "About" })
          ),
          $(
            "li",
            { className: "header_ul_item" },
            $("a", { href: "contact.html", innerText: "Contact" })
          ),
          $(
            "li",
            { className: "header_ul_item showable" },
            $("a", { href: "login.html", innerText: "Log in" })
          )
        )
      )
    )
  );
  body.insertBefore(header, mainBody);
});
