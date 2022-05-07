const apikey = '70ebcf8e62322233269348a8507d1d21';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const API_URL = 'https://api.themoviedb.org/3/';

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
};
// list : https://api.themoviedb.org/3/movie/now_playing?api_key=70ebcf8e62322233269348a8507d1d21>&language=en-US&page=1



const nowPlaying = document.getElementById("now-playing");
fetch(' https://api.themoviedb.org/3/movie/now_playing?api_key=70ebcf8e62322233269348a8507d1d21&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {
            let movie = document.createElement("div");

            let backdrop = document.createElement("img")
            backdrop.setAttribute("src", IMAGE_BASE_URL + element.backdrop_path)

            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★ " + element.vote_average;
            movie.appendChild(backdrop)
            movie.appendChild(title)
            movie.appendChild(rate)
            nowPlaying.appendChild(movie)

        });
    })
    .catch(err => console.error(err));

const popular = document.getElementById("popular");
fetch(' https://api.themoviedb.org/3/movie/popular?api_key=70ebcf8e62322233269348a8507d1d21&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {
            let movie = document.createElement("div");

            let backdrop = document.createElement("img")
            backdrop.setAttribute("src", IMAGE_BASE_URL + element.backdrop_path)

            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★ " + element.vote_average;
            movie.appendChild(backdrop)
            movie.appendChild(title)
            movie.appendChild(rate)
            popular.appendChild(movie)

        });
    })
    .catch(err => console.error(err));


const topRated = document.getElementById("top-rated");
fetch(' https://api.themoviedb.org/3/movie/top_rated?api_key=70ebcf8e62322233269348a8507d1d21&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {
            let movie = document.createElement("div");

            let backdrop = document.createElement("img")
            backdrop.setAttribute("src", IMAGE_BASE_URL + element.backdrop_path)

            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★ " + element.vote_average;
            movie.appendChild(backdrop)
            movie.appendChild(title)
            movie.appendChild(rate)
            topRated.appendChild(movie)

        });
    })
    .catch(err => console.error(err));




const upcoming = document.getElementById("upcoming");
fetch(' https://api.themoviedb.org/3/movie/upcoming?api_key=70ebcf8e62322233269348a8507d1d21&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {
            let movie = document.createElement("div");

            let backdrop = document.createElement("img")
            backdrop.setAttribute("src", IMAGE_BASE_URL + element.backdrop_path)

            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★ " + element.vote_average;
            movie.appendChild(backdrop)
            movie.appendChild(title)
            movie.appendChild(rate)
            upcoming.appendChild(movie)

        });
    })
    .catch(err => console.error(err));