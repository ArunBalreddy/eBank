import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import {Navbar, Logo, LogoutButton} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  return (
    <Navbar>
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
    </Navbar>
  )
}

export default withRouter(Header)
