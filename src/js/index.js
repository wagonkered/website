import "../css/fonts.css";
import "../css/theme.css";

const mq = window.matchMedia("(min-width: 815px)");

const menuItems = document.querySelector(".menu-items");
const menuItemLinks = menuItems.querySelectorAll("a");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
	menuItems.classList.add("mobile-menu-open");
	close.classList.remove("hidden");
	hamburger.classList.add("hidden");
});

close.addEventListener("click", () => {
	menuItems.classList.remove("mobile-menu-open");
	close.classList.add("hidden");
	hamburger.classList.remove("hidden");
});

function widthChange(mq) {
	if(mq.matches) {
		menuItems.classList.remove("mobile-menu");
		menuItemLinks.forEach( e => e.classList.add("light-colour"));
		hamburger.classList.add("hidden");
		close.classList.add("hidden");
	} else {
		menuItems.classList.add("mobile-menu");
		menuItemLinks.forEach( e => e.classList.remove("light-colour"));
		hamburger.classList.remove("hidden");
	}
}


widthChange(mq);

mq.addEventListener("change", widthChange);

