import React, { Component } from 'react'
import GuessCard from '../../components/GuessCard/GuessCard'
import SpaceRepApiService from '../../services/space-rep-api-service'
import './LearningRoute.css'

class LearningRoute extends Component {

  state = {
    isLoading: true,
    nextWord: null
  }

  componentDidMount() {
    SpaceRepApiService.getLanguageHead()
      .then(repsonse => this.setState({
        nextWord: repsonse.nextWord,
        isLoading: false
      }))
  }
  render() {
    const { nextWord, isLoading } = this.state;
    return (
      <section>
        {isLoading ? <p className="loading">Loading...</p> : <GuessCard nextWord={nextWord} />}
      </section>
    );
  }
}

export default LearningRoute
