import React, {Component} from "react";

class Message extends Component {


    state = {
        message: ""
    }

    // function runs on every state change
    componentDidUpdate(prevProps) {


    //   will be passed into setState function
      let newState = {
        message: ""
      }

      // deconstruct score and topScore from the pervious state
      const {score, topScore} = prevProps

      // change message if user guess correclty or incorrectly
      if (score === 0 && topScore === 0) {
        newState.message = "";
      } else if (score !== 0 && topScore > 0) {
        newState.message = "correct";
      } else {
        newState.message = "incorrect";
      }

      // set the state with the new message if the score changes, 
      // or the message and state message are not equal
      if (score !== this.props.score || this.state.message !== newState.message) {
        this.setState(newState);
      }
  
    }

    // change the display message based on the message state
    renderMessage = () => {
        switch (this.state.message) {
        case "correct":
          return "You guessed correctly!";
        case "incorrect":
          return "You guessed incorrectly!";
        default:
          return "Click a character to begin!";
        }
    };

    render() {
        return(
          <h2 id={`${this.state.message}`}>
            {this.renderMessage()}
          </h2>  
        );
    }
}

export default Message;