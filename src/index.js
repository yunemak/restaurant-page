import "./styles.css";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const menuBtn = document.querySelector("#menu-btn");

homeBtn.addEventListener("click", (e) => {
	let welcomeH1 = document.createElement("h1");
	let sloganH2 = document.createElement("h2");
	let infoPara = document.createElement("p");

	welcomeH1.textContent = "Welcome Yunus's Restaurant";
	sloganH2.textContent = "High quality, healthy and the cheapest food here.";
	infoPara.textContent = " Our address: ... ";

	contentDiv.appendChild(welcomeH1);
	contentDiv.appendChild(sloganH2);
	contentDiv.appendChild(infoPara);
})

homeBtn.click();