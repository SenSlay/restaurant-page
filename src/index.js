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

        // Remove active class on all nav btns
        const navBtns = document.querySelectorAll(".nav-btn");
        navBtns.forEach(btn => {
            btn.classList.remove("active");
        });

        if (target.id === "home") {
            renderHome();
            const homeNavBtn = document.getElementById("home");
            homeNavBtn.classList.add("active");
        }

        if (target.id === "menu" || target.id === "menu-btn") {
            renderMenu();
            const menuNavBtn = document.getElementById("menu");
            menuNavBtn.classList.add("active");
        }

        if (target.id === "about") {
            renderAbout();
            const aboutNavBtn = document.getElementById("about");
            aboutNavBtn.classList.add("active");
        } 
    }
  });