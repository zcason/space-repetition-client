import React, { Component } from 'react'
import './WordList.css'

class WordList extends Component {
    render() {
        const { words } = this.props;

        let wordList = words.map(word => {
            return <ul>
                <li key={word.id}>
                    <h4>{word.original}</h4>
                    <div className="word-stats">
                        <p className="correct">correct answer count: {word.correct_count}</p>
                        <p className="incorrect">incorrect answer count: {word.incorrect_count}</p>
                    </div>
                </li>
            </ul>
        })

        return (
            <div className="word-list-card">
                <h3>Words to practice</h3>
                {wordList}
                <p className="total-score">Total correct answers: {this.props.totalScore}</p>
                <a href='/learn' className="learn">
                    <button>Start practicing</button>
                </a>
            </div>
        );
    }
}

export default WordList;