import React, { Component } from 'react';
import { Input, Label } from '../Form/Form'
import Button from '../Button/Button'

class GuessCard extends Component {
    // state = {}
    render() {
        const { nextWord } = this.props;
        console.log(nextWord)

        return (
            <div>
                <h2> Translate the word: {nextWord}</h2>
                <form className="guess-form">
                    <Label htmlFor='learn-guess-input'>
                        What's the translation for this word?
                    </Label>
                    <Input
                        id='learn-guess-input'
                        name='guess-input'
                        required
                    />
                    <Button className="guess-button" type='submit'>
                        Submit your answer
                    </Button>
                </form>
            </ div>
        );
    }
}

export default GuessCard;