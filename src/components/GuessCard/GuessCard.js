import React, { Component } from 'react'
import { Input, Label } from '../Form/Form'
import Button from '../Button/Button'
import './GuessCard.css'
import SpaceRepApiService from '../../services/space-rep-api-service'

class GuessCard extends Component {

    handleSubmit = event => {
        event.preventDefault();
        const { learn_guess_input } = event.target;
        const guess = learn_guess_input.value;
        SpaceRepApiService.postGuess({ guess })
            .then(response => {
                this.props.SetState(response, guess)
            })
        learn_guess_input.value = "";
    }


    render() {
        const { apiResponse } = this.props;

        return (
            <div className="guess-card">
                <h2>Translate the word:</h2>
                <span>{apiResponse.nextWord}</span>
                <form
                    className="guess-form"
                    onSubmit={this.handleSubmit}
                >
                    <Label htmlFor='learn_guess_input'>
                        What's the translation for this word?
                    </Label>
                    <Input
                        id='learn_guess_input'
                        name='guess-input'
                        required
                    />
                    <Button className="guess-button" type='submit'>
                        Submit your answer
                    </Button>
                </form>
                <p className="total-score">Your total score is: {apiResponse.totalScore}</p>
                <div className="word-stats">
                    <p className="correct">You have answered this word correctly {apiResponse.wordCorrectCount} times.</p>
                    <p className="incorrect">You have answered this word incorrectly {apiResponse.wordIncorrectCount} times.</p>
                </div>
            </ div>
        );
    }
}

export default GuessCard;