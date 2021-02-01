let movieList = [];
const MinRanking = 1;
const MaxRanking = 5;

let myUl;

document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
    document.getElementById("movieLi").disabled = true;
    myUl = document.createElement('ul');

})

let Movie = function (title, ranking) {
    this.title = title;
    this.ranking = ranking;
    this.validateFields = function () { 
        // 1. return false if title is empty
        if(title.trim().length ===0)
            return false;
        // 2. return false if ranking is empty or out of range from 1 to 5
        else if(ranking.trim().length === 0|| isNaN(parseInt(ranking)))
            return false;
        else if(parseInt(ranking) < MinRanking ||  parseInt(ranking) > MaxRanking)
            return false;
        else 
            return true;}
    this.toString = function() { return title + " " + ranking}
};  // end object constructor



function addMovieClicked() {
    myUl.innerHTML = "";

    let title = document.getElementById("title").value;
    let ranking = document.getElementById("ranking").value;

    let movie = new Movie(title, ranking);

    if (movie.validateFields()) {    
        movieList.push(movie);  
        
        // clearing out the previous message
        document.getElementById("moviecount").innerHTML = "";
        // display the count of movies added so far
        document.getElementById("moviecount").innerHTML = "number of movies: " + movieList.length + "<br>";

        // clear previous user input
        document.getElementById("title").value = "";
        document.getElementById("ranking").value = "";
    } else {
        alert("The data is not correct. No movie data is saved. please fill in all fields correctly");
    }
}

function showMoviesClicked() {
    // clear previous message
    myUl.innerHTML = "";

    // sort movies by ranking
    movieList.sort(compareRanking);

    // add each Movie to li
    document.getElementById('movieLi').appendChild(myUl);
    for (let i = 0; i < movieList.length; i++) {
        let myLi = document.createElement('li');
        myUl.appendChild(myLi);
        myLi.innerHTML = movieList[i].toString();
	};

    document.getElementById("movieLi").disabled = false;

}


function compareRanking(a, b) {
    return b.ranking - a.ranking;
}

