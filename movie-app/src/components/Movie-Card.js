import React from 'react'


function MovieCard ({ result }) {



    return (
        <div>
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    )
}
export default MovieCard;


