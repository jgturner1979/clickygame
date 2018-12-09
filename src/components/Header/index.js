import React from "react";

const Header = props => (
    <div className="container">
        <div className="row" id="header">
            <div className="col-lg-6">
                    <img
                        src="assets/170808-news-a-christmas-story.png"
                        alt="A Christmas Story Clicky Game"
                        id="img-header">
                    </img>
            </div>
            <div className="col-lg-6">
                <ul>
                    <span>
                    <li id="score">Score: {props.score} </li>
                    <li id="score">Top Score: {props.topScore}</li>
                    </span>
                </ul>
            </div>
        </div>
    </div>
)

export default Header;