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
	if (mq.matches) {
		menuItems.classList.remove("mobile-menu");
		menuItemLinks.forEach(e => e.classList.add("light-colour"));
		hamburger.classList.add("hidden");
		close.classList.add("hidden");
	} else {
		menuItems.classList.add("mobile-menu");
		menuItemLinks.forEach(e => e.classList.remove("light-colour"));
		hamburger.classList.remove("hidden");
	}
}


widthChange(mq);

mq.addEventListener("change", widthChange);

/* Sticky navigation */
const about = document.querySelector("#about");
console.log(about);

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 1.0,
};

function handleIntersect(entry) {
	console.log(entry);
}

const observer = new IntersectionObserver(handleIntersect, options);

observer.observe(about);

/* GALLERY */
const focusImageContainer = document.querySelector(".focus-image-background");
const focusImage = focusImageContainer.querySelector("img");
const body = document.querySelector("body");


const galleryImages = document.querySelectorAll(".gallery-image img");
galleryImages.forEach(e => {
	e.addEventListener("click", event => {
		const altTag = event.target.alt;
		const imageSource = event.target.src;
		focusImage.src = imageSource;
		focusImage.alt = altTag;
		focusImageContainer.classList.remove("hidden");
		body.scroll = "no";
		body.style.overflow = "hidden";
	});
});

focusImageContainer.addEventListener("click", () => {
	focusImageContainer.classList.add("hidden");
	body.scroll = "yes";
	body.style.overflow = "visible";
});
