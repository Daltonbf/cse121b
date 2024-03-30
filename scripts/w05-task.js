const templesElement = document.querySelector("#temples");
let templeList = [];
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};
const reset = () => {
    templesElement.innerHTML = "";
};
const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year < 1950;
            }));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
getTemples();
