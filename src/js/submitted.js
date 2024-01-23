import "../css/fonts.css";
import "../css/theme.css";
import "../css/submitted.css";

const submittedTag = document.querySelector(".notification");

if(true) {
    submittedTag.innerHTML = "Submitted successfully";
} else {
    submittedTag.innerHTML = "Oops, something went wrong";
}