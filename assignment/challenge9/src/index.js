import "./styles.css";

const title = document.getElementById("title");

title.innerText = "Hello!";
title.style.fontFamily = "sans-serif";
title.style.color = "white";

const body = document.querySelector("body");

function handleWindowResize() {
  const width = window.innerWidth;
  const LG_SCREEN = "largeScreen";
  const MD_SCREEN = "mediumScreen";
  const SM_SCREEN = "smallScreen";

  if (width > 800) {
    body.classList.add(LG_SCREEN);
    body.classList.remove(MD_SCREEN);
  } else if (width <= 800 && width > 400) {
    body.classList.add(MD_SCREEN);
    body.classList.remove(LG_SCREEN);
    body.classList.remove(SM_SCREEN);
  } else if (width <= 400) {
    body.classList.add(SM_SCREEN);
    body.classList.remove(MD_SCREEN);
  }
}

window.addEventListener("resize", handleWindowResize);
