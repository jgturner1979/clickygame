import React, {Component} from "react";
import Container from "../Container";
import Instructions from "../Instructions";
import Tile from "../Tile";
import Header from "../Header";
import Footer from "../Footer";
import data from "../../data";

class Game extends Component {

    state = {
        data,
        score: 0,
        topScore: 0,
        message: "Click as many images without repeating."
    };

    // function gets called when the page loads
    componentDidMount() {
        // reorders the dataarray on state changes
        this.setState({
            data: this.shuffleDeck(this.state.data)
        });
        console.log(data);
    }

    // shuffle the imported data array in random order
    shuffleDeck = data => {
        let newData = data.sort(function (a, b) {
            return 0.5 - Math.random()
        });
        return newData;
    };

    // resets all the clicked properties to false
    resetDeck = data => {
        const resetData = data.map(item => ({
            ...item,
            clicked: false
        }));
        // console.log(data); console.log(resetData);
        return this.shuffleDeck(resetData);
    };

    // checks to see if score is higher than the topscore then updates the state
    // with the update array
    correctGuess = newData => {
        let newScore = this.state.score;
        newScore++;
        let newTopScore = Math.max(newScore, this.state.topScore);

        this.setState({
            data: this.shuffleDeck(newData),
            score: newScore,
            topScore: newTopScore
        })
    }

    // restarts the game with fresh data
    wrongGuess = newData => {
        this.setState({
            data: this.resetDeck(newData),
            score: 0
        })
    }

    // when a card is clicked, check if it has been clicked before, then update that
    // cards clicked property
    gameCardClick = id => {
        let guessedCorrectly = false;
        // newData will be the data array with updated clicked properties
        const newData = this.state.data.map(item => {
                if (item.id === id) {
                    if (!item.clicked) {
                        item.clicked = true;
                        guessedCorrectly = true;
                    }
                }
                return item;
            });
        // if guessedCorrectly = true, run the correctGuess function, else run the
        // wrongGuess function
        guessedCorrectly ? this.correctGuess(newData) : this.wrongGuess(newData);
    };

    render() {
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore}/>
                <Instructions message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
                <Container>
                    {this.state.data.map(item => (
                        
                                <Tile
                                    id={item.id}
                                    image={item.image}
                                    clicked={item.clicked}
                                    handleClick={this.gameCardClick}
                                />
                    
                        ))}
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Game;