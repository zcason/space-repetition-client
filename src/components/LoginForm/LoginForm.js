import React, { Component } from 'react'
import { Input } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import Button from '../Button/Button'
import './LoginForm.css'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.context.processLogin(res.authToken)
        this.props.onLoginSuccess()
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
        className='LoginForm'
        onSubmit={this.handleSubmit}
      >
        <div className='log-form-content'>
          <div role='alert'>
            {error && <p>{error}</p>}
          </div>
          <div>
            <Input
              ref={this.firstInput}
              id='login-username-input'
              name='username'
              aria-label='username'
              placeholder="Username"
              required
            />
          </div>
          <div>
            <Input
              id='login-password-input'
              name='password'
              type='password'
              aria-label='pasword'
              placeholder="Password"
              required
            />
          </div>
          <div className="button-section">
            <Button className="log-button" type='submit'>
              Login
            </Button>
          </div>
        </div>
      </form >
    )
  }
}

export default LoginForm
