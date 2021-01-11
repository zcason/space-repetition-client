import React, { Component } from 'react';
import './ResultCard.css';

class ResultCard extends Component {

    handleClick = event => {
        event.preventDefault();
        this.props.SetState();
    }

    render() {
        const { currentWord, totalScore, guess, answer, isCorrect } = this.props.result;

        return (
            <div className="result-card">
                <span className="DisplayScore">
                    <p className="total-score">Your total score is: {totalScore}</p>
                </span>
                {!isCorrect && <h2 className="incorrect-guess">Good try, but not quite right :(</h2>}
                {isCorrect && <h2 className="correct-guess">You were correct! :D</h2>}
                <span className="DisplayFeedback">
                    <p className="feedback">The correct translation for <span className="highlight">{currentWord}</span> was <span className="highlight">{answer}</span> and you chose <span className="highlight">{guess}</span>!</p>
                </span>
                <button onClick={this.handleClick}>Try another word!</button>
            </ div>
        );
    }
}

export default ResultCard;