import React from "react";

function Search (props) {
    return (
        <section className="searchBox-wrap">
            <input type="text"
                   className="searchBox"
                   placeholder="Type in a movie"
                   onChange={props.handleInput}
                   onKeyPress={props.search}
            />
        </section>
    )
}


export default Search