import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'
import UserContext from '../../contexts/UserContext'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  static contextType = UserContext;

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        const loginCredentials = {
          username: username.value,
          password: password.value
        }
        name.value = ''
        username.value = ''
        password.value = ''
        this.goToDashboard(loginCredentials)
          .then(() => this.props.onRegistrationSuccess())
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  goToDashboard = (credential) => {
    return AuthApiService.postLogin(credential)
      .then(res => {
        this.context.processLogin(res.authToken)
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className="reg-form"
        onSubmit={this.handleSubmit}
      >
        <div className='reg-form-content'>
          <div role='alert'>
            {error && <p>{error}</p>}
          </div>
          <div className="reg-field">
            <Label htmlFor='registration-name-input'>
              Enter your name<Required />
            </Label>
            <Input
              ref={this.firstInput}
              id='registration-name-input'
              name='name'
              required
            />
          </div>
          <div className="reg-field">
            <Label htmlFor='registration-username-input'>
              Choose a username<Required />
            </Label>
            <Input
              id='registration-username-input'
              name='username'
              required
            />
          </div>
          <div className="reg-field">
            <Label htmlFor='registration-password-input'>
              Choose a password<Required />
            </Label>
            <Input
              id='registration-password-input'
              name='password'
              type='password'
              required
            />
          </div>
          <footer>
            <Button type='submit'>
              Sign Up
            </Button>
            {' '}
            <Link className="log-link" to='/login'>
              Already have an account?
            </Link>
          </footer>
        </div>
      </form >
    )
  }
}

export default RegistrationForm
