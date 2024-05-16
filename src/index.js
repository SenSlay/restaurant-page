import "./style.css";
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js"

const contentDiv = document.getElementById("content");

// Initial page render
contentDiv.innerHTML = "";
contentDiv.className = "";
renderHome();

// Tab-switching
document.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("page-btn")) {
        contentDiv.innerHTML = "";
        contentDiv.className = "";

        if (target.id === "home") renderHome();
        if (target.id === "menu" || target.id === "menu-btn") renderMenu();
        if (target.id === "about") renderAbout();
    }
  });