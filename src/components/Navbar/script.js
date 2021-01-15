const toggleButton = document.getElementById("toggleButton")[0];
const navbarLinks = document.getElementById("navbarLinks")[0];

toggleButton.addEventListener("click", () => {
	// toggle active class on navbarLinks
	navbarLinks.classList.toggle("active");
});
