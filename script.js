const API_LINK = "https://api.themoviedb.org/3/movie/550?api_key=6e7b2cbc9fa2d51988471aaf765f0237&page=1"
const imgPath = ""
const searchAPI = "https://api.themoviedb.org/3/movie/550?api_key=6e7b2cbc9fa2d51988471aaf765f0237&query="

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovies(url) {
    fetch(url).then[res => res.json()]
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div = document.createElement("div");
            });
    })
}