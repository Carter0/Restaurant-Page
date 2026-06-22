import { renderHome } from "./modules/homepage.js";
import { renderAbout } from "./modules/about.js";
import { renderMenu } from "./modules/menu.js";

renderHome();

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", (event) => {
    // Clear the old content of the page
    content.textContent = "";
    renderHome();
});

const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", (event) => {
    // Clear the old content of the page
    content.textContent = "";
    renderAbout();
});


const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", (event) => {
    // Clear the old content of the page
    content.textContent = "";
    renderMenu();
});