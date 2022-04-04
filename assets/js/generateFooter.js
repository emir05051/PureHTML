window.addEventListener("load", () => {
  const body = document.querySelector(".body");

  body.append(
    $(
      "div",
      { classList: "footer flex row between" },
      $(
        "p",
        { innerText: "Created by Emir. " },
        $("a", {
          style: {
            color: "white",
            "text-decoration": "underline",
          },
          href: "impressum.html",
          innerText: "Impressum",
        })
      ),
      $("p", { innerText: "© 2022 How Long to Read" })
    )
  );
});
