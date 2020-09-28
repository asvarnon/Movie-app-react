import React from "react";
import MovieCard from "./Movie-Card";


function MovieList ({ results }) {

        //use () instead of {} so JSX can return HTML syntax
    // console.log(results);
    return (
        <section className="results">
            {results.map(result => (
            <MovieCard result={result} />
            ))}
        </section>
    )
}
export default MovieList;
