const API_KEY = "8fa8fe67b5f6b84aedfe04b2350639db";
const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		const titleElem = document.querySelector("#title");
		titleElem.innerHTML = data.original_title;
		const posterElem = document.querySelector("#poster");
		posterElem.src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
		const descripcionElem = document.querySelector("#descripcion");
		descripcionElem.innerHTML = data.overview;
	});
