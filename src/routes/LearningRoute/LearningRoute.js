import React, { Component } from 'react'
import GuessCard from '../../components/GuessCard/GuessCard'
import ResultCard from '../../components/ResultCard/ResultCard'
import SpaceRepApiService from '../../services/space-rep-api-service'
import './LearningRoute.css'

class LearningRoute extends Component {

  state = {
    isLoading: true,
    currentWord: null,
    nextWord: null,
    totalScore: null,
    wordCorrectCount: null,
    wordIncorrectCount: null,
    guess: null,
    answer: null,
    isCorrect: null,
  }

  componentDidMount() {
    SpaceRepApiService.getLanguageHead()
      .then(response => this.setState({
        nextWord: response.nextWord,
        totalScore: response.totalScore,
        wordCorrectCount: response.wordCorrectCount,
        wordIncorrectCount: response.wordIncorrectCount,
        isLoading: false
      }))
  }

  guessCardSetState = (apiResponse, guess) => {
    const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount, answer, isCorrect } = apiResponse;
    this.setState({
      currentWord: this.state.nextWord,
      nextWord: nextWord,
      totalScore: totalScore,
      wordCorrectCount: wordCorrectCount,
      wordIncorrectCount: wordIncorrectCount,
      guess: guess,
      answer: answer,
      isCorrect: isCorrect
    });
  }

  resultCardSetState = () => {
    this.setState({
      currentWord: this.state.nextWord,
      guess: null
    });
  }

  render() {
    const { isLoading, nextWord, currentWord, totalScore, wordCorrectCount, wordIncorrectCount, guess, answer, isCorrect } = this.state;
    const apiResponse = { nextWord, totalScore, wordCorrectCount, wordIncorrectCount };
    const result = { currentWord, totalScore, guess, answer, isCorrect }

    const chooseCard = !guess
      ? <GuessCard apiResponse={apiResponse} SetState={this.guessCardSetState} />
      : <ResultCard result={result} SetState={this.resultCardSetState} />;

    return (
      <section className="learning-section">
        {isLoading ? <p className="loading">Loading...</p> : chooseCard}
      </section>
    );
  }
}

export default LearningRoute
