import React from "react";
import { Link } from "react-router-dom";

//Experiment component
class Clock extends React.Component {
    // base constructor (function logic?)
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

    }
    //Methods
    // DidMount and WillUnmount represent a "life cycle" of the display
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //adding another tick method to allow clock to increment every second.
    //this setState generates a new date after 1 second. setState calls the render() again to learn what
    //should be on the screen.
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;