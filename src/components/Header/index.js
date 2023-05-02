// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />

      <ul className="nav-menu">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
    </div>
  </nav>
)

export default Header
