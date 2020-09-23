import React from "react";
import MovieCard from "./Movie-Card";


function MovieList ({ results }) {

    //TODO: figure out what is going on with map function on line 11, breaking when typing search into searchbar

        //use () instead of {} so JSX can return HTML syntax
    return (
        <section className="results">
            {results.map(result => (
                <MovieCard result={result} />
            ))}
        </section>
    )
}
export default MovieList;
