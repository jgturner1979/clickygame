import React from "react";

const Tile = props => (
        <img
            src={`${props.image}`}
            aria-label="click item"
            alt="Christmas Story Character"
            value={`${props.id}`}
            onClick={() => props.handleClick(props.id)}></img>
);

export default Tile;