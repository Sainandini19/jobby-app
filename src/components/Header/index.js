import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillTerminalFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <div>
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </div>

      <ul className="mobile-container">
        <Link to="/" className="link-item">
          <li>
            <AiFillHome />
          </li>
        </Link>
        <Link to="/jobs" className="link-item">
          <li>
            <BsFillTerminalFill />
          </li>
        </Link>
        <li>
          <button type="button" onClick={onClickLogout}>
            <FiLogOut />
          </button>
        </li>
      </ul>

      <ul className="header-list-items">
        <Link to="/" className="link-item">
          <li className="home-heading home">Home</li>
        </Link>
        <Link to="/jobs" className="link-item">
          <li className="jon-heading home">Jobs</li>
        </Link>
      </ul>

      <div>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
