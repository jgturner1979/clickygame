import React from "react";
import Message from "../Message";

const Instructions = props => (
    <div className="container" id="instructions">
        <h3>{props.message}</h3>
        <Message score={props.score} topScore={props.topScore}/>
    </div>
);

export default Instructions;