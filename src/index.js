import "./styles.css";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const menuBtn = document.querySelector("#menu-btn");

homeBtn.addEventListener("click", (e) => {
	contentDiv.replaceChildren();
	let welcomeH1 = document.createElement("h1");
	let sloganH2 = document.createElement("h2");
	let infoPara = document.createElement("p");

	welcomeH1.textContent = "Welcome Yunus's Restaurant";
	sloganH2.textContent = "High quality, healthy and the cheapest food here.";
	infoPara.textContent = " Our address: ... ";

	contentDiv.appendChild(welcomeH1);
	contentDiv.appendChild(sloganH2);
	contentDiv.appendChild(infoPara);
});

aboutBtn.addEventListener("click", (e) => {
	contentDiv.replaceChildren();
	let headerH1 = document.createElement("h1");
	let storyPara = document.createElement("p");

	headerH1.textContent = "Our story";
	storyPara.textContent = "Our restaurant began as a small family dream in 2018. We wanted to bring people together with fresh ingredients, homemade recipes, and a warm atmosphere. Today, we continue to serve every guest with the same passion and care that inspired us on our first day.";

	contentDiv.appendChild(headerH1);
	contentDiv.appendChild(storyPara);
});

menuBtn.addEventListener("click", (e) => {
	contentDiv.replaceChildren();
	let headerH1 = document.createElement("h1");
	headerH1.textContent = "Menu";

	// Starters
	let startersDiv = document.createElement("div");
	let startersUl = document.createElement("ul");

	startersDiv.appendChild(createHeader("Starters"));
	startersDiv.appendChild(startersUl);
	startersUl.appendChild(createListElement("Tomato Soup - $5"));
	startersUl.appendChild(createListElement("Garden Salad - $6"));

	// Main courses
	let mainCoursesDiv = document.createElement("div");
	let mainCoursesUl = document.createElement("ul");

	mainCoursesDiv.appendChild(createHeader("Main Courses"));
	mainCoursesDiv.appendChild(mainCoursesUl);
	mainCoursesUl.appendChild(createListElement("Grilled Chicken - $14"));
	mainCoursesUl.appendChild(createListElement("Beef Burger - $13"));
	mainCoursesUl.appendChild(createListElement("Margherita Pizza - $12"));

	// Append every course
	contentDiv.appendChild(headerH1);
	contentDiv.appendChild(startersDiv);
	contentDiv.appendChild(mainCoursesDiv);
})

homeBtn.click();

// functions
function createHeader(text) {
	let h2 = document.createElement("h2");
	h2.textContent = text;
	return h2;
}

function createListElement(text) {
	let li = document.createElement("li");
	li.textContent = text;
	return li;
}