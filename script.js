const API_LINK = "https://api.themoviedb.org/3/movie/550?api_key=6e7b2cbc9fa2d51988471aaf765f0237&page=1"
const imgPath = ""
const searchAPI = "https://api.themoviedb.org/3/movie/550?api_key=6e7b2cbc9fa2d51988471aaf765f0237&query="

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(API_LINK)
function returnMovies(url) {
    fetch(url).then[res => res.json()]
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement("div");
                const div_row = document.createElement("div");
                const div_column = document.createElement("div");
                const image = document.createElement("img");
                const title = document.createElement("h3");
                const center = document.createElement("center");

                title.innerHTML = $(element.title);
                image.src = imgPath + element.poster_path; //returns link as posterpath

                center.appendChild(image);  //add an element under another element
                div_row.appendChild(div_column);
                div_column.appendChild(div_card);
                div_card.appendChild(center);
                div_card.appendChild(title);

                main.appendChild(div_row);

            });
    })
}

form.addEventListener("submit"), (e) => {
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(searchAPI + searchItem);
        search.value = "";  //clear input value
    }
}