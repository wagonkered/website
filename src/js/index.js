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

function closeMenu() {
	menuItems.classList.remove("mobile-menu-open");
	close.classList.add("hidden");
	hamburger.classList.remove("hidden");
}
close.addEventListener("click", closeMenu);
menuItemLinks.forEach(m => m.addEventListener("click", closeMenu));

function widthChange(mq) {
	if (mq.matches) {
		menuItems.classList.remove("mobile-menu");
		menuItemLinks.forEach(e => e.classList.add("light-colour"));
		hamburger.classList.add("hidden");
		close.classList.add("hidden");
		menuItemLinks.forEach(m => m.removeEventListener("click", closeMenu));
	} else {
		menuItems.classList.add("mobile-menu");
		menuItemLinks.forEach(e => e.classList.remove("light-colour"));
		hamburger.classList.remove("hidden");
		menuItemLinks.forEach(m => m.addEventListener("click", closeMenu));
	}
}

widthChange(mq);
mq.addEventListener("change", widthChange);

/* Sticky navigation */
const heroImage = document.querySelector(".hero-image");

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0,
};

const header = document.querySelector("header");
function handleIntersect(entries) {
	const entry = entries[0];
	if(!entry.isIntersecting)
		header.classList.add("fixed");
	else
		header.classList.remove("fixed");
}

const observer = new IntersectionObserver(handleIntersect, options);

observer.observe(heroImage);

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
		focusImageContainer.classList.remove("fade-out");
		body.scroll = "no";
		body.classList.add("lock");
	});
});

focusImageContainer.addEventListener("click", () => {
	focusImageContainer.classList.add("fade-out");
	body.scroll = "yes";
	body.classList.remove("lock");
});
