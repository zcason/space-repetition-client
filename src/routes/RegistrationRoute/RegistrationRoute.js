import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationRoute.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    return (
      <section>
        <p className="info">
          Practice learning a language with the spaced reptition revision technique.
        </p>
        <div className="card">
          <h2>Sign Up</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </div>
      </section>

    );
  }
}

export default RegistrationRoute
