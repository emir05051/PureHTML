window.addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelector(".hamburger_menu");
  let svg = menu.children[0];
  let listMenu = document.querySelector(".ul_hidden");

  menu.addEventListener("click", () => {
    toggleMenu(svg, listMenu);
  });
});

function toggleMenu(svg, listMenu) {
  if (svg.src.match("close.svg")) {
    svg.src = "../assets/images/hamburger.svg";
    listMenu.style.display = "none";
  } else {
    svg.src = "../assets/images/close.svg";
    listMenu.style.display = "block";
  }
}
