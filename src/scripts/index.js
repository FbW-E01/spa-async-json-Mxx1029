// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { recipesJSON } from "./data.js"

// \/ All of your javascript should go here \/

const recipes = JSON.parse(recipesJSON);

// separate cakes, biscuits and bread in their own arrays for the recipes object
const cakesArray = recipes.cakes;
const biscuitsArray = recipes.biscuits;
const breadArray = recipes.bread;

// query HTML parent element for the cake cards
const cakesSection = document.querySelector("#cakes");
// cakesSection.classList.add("card-group") // doesn't look great

// get cakes displayed alphabetically
cakesArray.sort((a, b) => {
    if (a.title > b.title) { return 1 }
    else { return -1 };
})

// loop through cakes and put them in cards on the page
cakesArray.forEach(cake => {

    const div = document.createElement("div");
    div.classList.add("card", "m-2");
    div.style.width = "14rem";
    cakesSection.appendChild(div);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = cake.image;
    img.style.height = "60%";
    img.style.objectFit = "cover";
    div.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    div.appendChild(cardBody);

    const title = document.createElement("h5");
    title.innerText = cake.title;
    title.classList.add("card-title");
    cardBody.appendChild(title);

    const author = document.createElement("p");
    author.innerText = cake.author;
    author.classList.add("card-text");
    cardBody.appendChild(author);

    const hr = document.createElement("hr");
    hr.classList.add("mb-2")
    cardBody.appendChild(hr);

    const ingredients = document.createElement("p");
    ingredients.innerText = "Ingredients: " + cake.ingredients.join(", ");
    ingredients.classList.add("card-text");
    cardBody.appendChild(ingredients);



});

// query HTML parent element for the biscuits cards
const biscuitsSection = document.querySelector("#biscuits");
// biscuitsSection.classList.add("card-group") // doesn't look great

// get biscuits displayed alphabetically
biscuitsArray.sort((a, b) => {
    if (a.title > b.title) { return 1 }
    else { return -1 };
})

// loop through biscuits and put them in cards on the page
biscuitsArray.forEach(biscuit => {

    const div = document.createElement("div");
    div.classList.add("card", "m-2");
    div.style.width = "14rem";
    biscuitsSection.appendChild(div);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = biscuit.image;
    img.style.height = "60%";
    img.style.objectFit = "cover";
    div.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    div.appendChild(cardBody);

    const title = document.createElement("h5");
    title.innerText = biscuit.title;
    title.classList.add("card-title");
    cardBody.appendChild(title);

    const author = document.createElement("p");
    author.innerText = biscuit.author;
    author.classList.add("card-text");
    cardBody.appendChild(author);

    const hr = document.createElement("hr");
    hr.classList.add("mb-2")
    cardBody.appendChild(hr);

    const ingredients = document.createElement("p");
    ingredients.innerText = "Ingredients: " + biscuit.ingredients.join(", ");
    ingredients.classList.add("card-text");
    cardBody.appendChild(ingredients);

});

// query HTML parent element for the bread cards
const breadSection = document.querySelector("#bread");
// breadSection.classList.add("card-group") // doesn't look great

// get biscuits displayed alphabetically
breadArray.sort((a, b) => {
    if (a.title > b.title) { return 1 }
    else { return -1 };
})

// loop through bread and put them in cards on the page
breadArray.forEach(bread => {

    const div = document.createElement("div");
    div.classList.add("card", "m-2");
    div.style.width = "14rem";
    breadSection.appendChild(div);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = bread.image;
    img.style.height = "60%";
    img.style.objectFit = "cover";
    div.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    div.appendChild(cardBody);

    const title = document.createElement("h5");
    title.innerText = bread.title;
    title.classList.add("card-title");
    cardBody.appendChild(title);

    const author = document.createElement("p");
    author.innerText = bread.author;
    author.classList.add("card-text");
    cardBody.appendChild(author);

    const hr = document.createElement("hr");
    hr.classList.add("mb-2")
    cardBody.appendChild(hr);

    const ingredients = document.createElement("p");
    ingredients.innerText = "Ingredients: " + bread.ingredients.join(", ");
    ingredients.classList.add("card-text");
    cardBody.appendChild(ingredients);

});

