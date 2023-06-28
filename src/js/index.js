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
	rootMargin: "-1px",
	threshold: 0,
};

const header = document.querySelector("header");
function handleIntersect(entries) {
	const entry = entries[0];
	if (!entry.isIntersecting)
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

/* HIRING OPTION */

const enquireButtons = document.querySelectorAll(".enquire .call-to-action");

enquireButtons.forEach(e => {
	e.addEventListener("click", () => {
		document.getElementById("option").value = e.parentNode.parentNode.querySelector(".card-header").innerHTML;
	});
});


/* CONTACT */

function clearForm(hiringOption, name, email, message) {
	hiringOption.value = "None";
	name.value = "";
	email.value = "";
	message.value = "";
}

function feedbackToUser(result) {
	if (result === "success") {
		const successMessage = document.querySelector(".alert-success");
		successMessage.classList.remove("transparent");
	} else if (result === "fail") {
		const failMessage = document.querySelector(".alert-fail");
		failMessage.classList.remove("transparent");
	} else if (result === "no-captcha") {
		const failMessage = document.querySelector(".alert-warn");
		failMessage.classList.remove("transparent");
	}
	setTimeout(clearAlert, 5000);
}

function clearAlert() {
	const alerts = document.querySelectorAll(".alert");
	alerts.forEach(alert => {
		if (!alert.classList.contains("transparent")) {
			alert.classList.add("transparent");
		}
	});
}

/* eslint-disable */
function processForm(e) {
	/* eslint-enable */
	e.preventDefault();
	clearAlert();
	const URL = "https://api.wagonkered.co.uk/contact-us";

	/* eslint-disable */
	grecaptcha.ready(function() {
		grecaptcha.execute('6Ld4wNsmAAAAAPkXjpWmzUvP51CsoqE4_ZcAgKrY', { action: 'submit' }).then(function(token) {
			/* eslint-enable */
			// Add your logic to submit to your backend server here.
			const hiringOption = document.querySelector("input[id=\"option\"]");
			const name = document.querySelector("input[id=\"name\"]");
			const email = document.querySelector("input[id=\"email\"]");
			const message = document.querySelector("textarea[id=\"message\"]");
			const data = {
				hiringOption: hiringOption.value,
				name: name.value,
				email: email.value,
				message: message.value,
				/* eslint-disable */
				token: token
				/* eslint-enable */
			};

			const xhr = new XMLHttpRequest();
			xhr.open("POST", URL, true);
			xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

			// send the collected data as JSON
			xhr.send(JSON.stringify(data));

			xhr.onload = function() {
				if (xhr.status === 200) {
					feedbackToUser("success");
				} else {
					feedbackToUser("fail");
				}
			};

			xhr.onerror = function() {
				feedbackToUser("fail");
			};

			clearForm(hiringOption, name, email, message);
		});
	});


}
