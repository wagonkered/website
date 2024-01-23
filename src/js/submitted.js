import "../css/fonts.css";
import "../css/theme.css";
import "../css/submitted.css";

const title = document.querySelector(".title");
const submittedTag = document.querySelector(".notification");

const url = window.location.search;
console.log(url);
const searchParam = new URLSearchParams(url);
const res = searchParam.get("res");
if(res === "success") {
	title.innerHTML = "Thank you";
    submittedTag.innerHTML = "Thank you so much for getting in touch, we are excited to receive your enquiry and read all about your forthcoming event! We will aim to respond to your enquiry within 24 hours, however during peak season this may take a little longer. If your enquiry is urgent, please call us on 07807 901471. Thank you for your patience 😊";
} else if (res === "fail") {
	title.innerHTML = "Sorry";
    submittedTag.innerHTML = "Sorry something went wrong. Please try the contact form again. If you continue to see this error message, please create a new issue through our <a class=\"animated-link\" href=\"https://github.com/wagonkered/website/issues\">GitHub issue tracker</a> and our web developer will look into the problem.";
}
