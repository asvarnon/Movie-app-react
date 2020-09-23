import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import MovieList from "./Movie-List";
import Search from "./Search";


function Home () {
    const [state, setState] = useState({
        userInput: "",
        results: [],
        selected: {}
        //sets initial state
    })
    const OMDbURL =`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDbkeyV2}`

    const search = (event) => {
        if (event.key === "Enter"){
            //from here, using Axios (dev dependency) request. the "&s=" is how the api searches.
            axios(OMDbURL + "&s=" + state.userInput).then(({data}) => {
                    //having data in {}  destructures the object to go one layer deeper, instead of {data.data}.search
                let results = data.search;
                setState(prevState => {
                    return {...prevState, results: results}
                })
            });
        }
    }

    const handleInput = (event) => {
        let userInput = event.target.value;
            //targets the input in the searchbar

        setState(prevState => {
            return {...prevState, userInput: userInput}
        })
            // the "..." allows for passing entire object as a prop
            // after, the state for that property changes

        //This log will show the live search function
        // console.log(state.userInput);
    }
    return (
        <div className="contentContainer">
            <h1>Movies</h1>
            <main>
                <Search handleInput={handleInput} search={search} />
                <MovieList results={state.results}/>
            </main>
        </div>
    )
}
export default Home;

