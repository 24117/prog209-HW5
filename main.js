let movieList = [];

let myUl;

document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
    document.getElementById("movieLi").disabled = true;
    myUl = document.createElement('ul');

})


function addMovieClicked() {
    myUl.innerHTML = "";

    let title = document.getElementById("title").value;
    let rating = document.getElementById("rating").value;

    let movie = new Movie(title, rating);

    if (movie.validateFields()) {    
        movieList.push(movie);  
        
        // clearing out the previous message
        document.getElementById("moviecount").innerHTML = "";
        // display the count of movies added so far
        document.getElementById("moviecount").innerHTML = "number of movies: " + movieList.length + "<br>";

        // clear previous user input
        document.getElementById("title").value = "";
        document.getElementById("rating").value = "";
    } else {
        alert("The data is not correct. No movie data is saved. please fill in all fields correctly");
    }
}

function showMoviesClicked() {
    // clear previous message
    myUl.innerHTML = "";

    // sort movies by rating
    movieList.sort(compareRating);

    // add each Movie to li
    document.getElementById('movieLi').appendChild(myUl);
    for (let i = 0; i < movieList.length; i++) {
        let myLi = document.createElement('li');
        myUl.appendChild(myLi);
        myLi.innerHTML = movieList[i].toString();
	};

    document.getElementById("movieLi").disabled = false;

}


function compareRating(a, b) {
    return b.rating - a.rating;
}

