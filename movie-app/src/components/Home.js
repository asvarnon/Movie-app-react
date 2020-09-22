import React, {useState} from "react";
import {Link} from "react-router-dom";
import MovieList from "./Movie-List";
import axios from 'axios';
import Search from "./Search";


function Home () {
    const [state, setState] = useState({
        userInput: "",
        results: [],
        selected: {}
        //sets initial state
    })
    const OMDbURL =`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDbkey}`

    const search = (event) => {
        if (event.key === "Enter"){
            //from here, using Axios (dev dependency) request. the "&s=" is how the api searches.
            axios(OMDbURL + "&s=" + state.userInput).then((data) => {
                console.log(data);
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
            </main>
        </div>
    )
}
export default Home;

