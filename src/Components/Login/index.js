import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  BgContainer,
  LoginContainer,
  LoginImageContainer,
  LoginImage,
  FormContainer,
  Heading,
  InputContainer,
  Label,
  InputEl,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', showErrMsg: false, errMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()

    const {userId, pin} = this.state

    const userDetails = {
      user_id: userId,
      pin,
    }

    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})

      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({showErrMsg: true, errMsg: data.error_msg})
    }
  }

  render() {
    const {userId, pin, showErrMsg, errMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <BgContainer>
        <LoginContainer>
          <LoginImageContainer>
            <LoginImage
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </LoginImageContainer>
          <FormContainer onSubmit={this.onSubmit}>
            <Heading>Welcome Back!</Heading>
            <InputContainer>
              <Label htmlFor="userid">User ID</Label>
              <InputEl
                type="text"
                onChange={this.onChangeUserId}
                placeholder="Enter User ID"
                value={userId}
                id="userid"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="pin">PIN</Label>
              <InputEl
                type="password"
                onChange={this.onChangePin}
                placeholder="Enter PIN"
                value={pin}
                id="pin"
              />
            </InputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrMsg && <ErrorMsg>*{errMsg}</ErrorMsg>}
          </FormContainer>
        </LoginContainer>
      </BgContainer>
    )
  }
}

export default Login
