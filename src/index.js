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
	let startersH2 = document.createElement("h2");
	let startersUl = document.createElement("ul");
	let tomatoSoup = document.createElement("li");
	let gardenSalad = document.createElement("li");

	startersH2.textContent = "Starters";
	tomatoSoup.textContent = "Tomato Soup - $5";
	gardenSalad.textContent = "Garden Salad - $6";

	startersDiv.appendChild(startersH2);
	startersDiv.appendChild(startersUl);
	startersUl.appendChild(tomatoSoup);
	startersUl.appendChild(gardenSalad);

	// Main courses
	let mainCoursesDiv = document.createElement("div");
	let mainCoursesH2 = document.createElement("h2");
	let mainCoursesUl = document.createElement("ul");
	let grilledChicken = document.createElement("li");
	let beefBurger = document.createElement("li");
	let margheritaPizza = document.createElement("li");

	mainCoursesH2.textContent = "Main Courses";
	grilledChicken.textContent = "Grilled Chicken - $14";
	beefBurger.textContent = "Beef Burger - $13";
	margheritaPizza.textContent = "Margherita Pizza - $12";

	mainCoursesDiv.appendChild(mainCoursesH2);
	mainCoursesDiv.appendChild(mainCoursesUl);
	mainCoursesUl.appendChild(grilledChicken);
	mainCoursesUl.appendChild(beefBurger);
	mainCoursesUl.appendChild(margheritaPizza);

	// Append every course
	contentDiv.appendChild(headerH1);
	contentDiv.appendChild(startersDiv);
	contentDiv.appendChild(mainCoursesDiv);
})

homeBtn.click();