import React, { Component } from 'react'
import WordList from '../../components/WordList/WordList'
import SpaceRepApiService from '../../services/space-rep-api-service'
import './DashboardRoute.css'

class DashboardRoute extends Component {
  state = {
    isLoading: true,
    language: {},
    words: {}
  }

  componentDidMount() {
    SpaceRepApiService.getLanguageDets()
      .then(response => this.setState({
        isLoading: false,
        language: response.language,
        words: response.words
      }))
  }

  render() {
    const { isLoading, language, words } = this.state;
    return (
      <section className="dashboard">
        <h2 className="lang-name">{language.name}</h2>
        <div className="word-list">
          {isLoading ? <p className="loading">Loading...</p> : <WordList words={words} totalScore={language.total_score} />}
        </div>
      </section>
    );
  }
}

export default DashboardRoute
