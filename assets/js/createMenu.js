window.addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelector(".hamburger_menu");
  let svg = menu.children[0];
  let listMenu = document.querySelector(".ul_hidden");

  menu.addEventListener("click", () => {
    menu.children[0].src = toggleSVG(svg);
    listMenu.style.display = toggleMenu(listMenu);
  });
});

function toggleMenu(element) {
  return element.style.display == "block" ? "none" : "block";
}
function toggleSVG(element) {
  if (
    element.src ===
    "file:///C:/Users/Emir/Desktop/Projects/sub_site/assets/images/close.svg"
  ) {
    return "../assets/images/hamburger.svg";
  } else return "../assets/images/close.svg";
}
