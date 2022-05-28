import './navbar.scss'
import {Person, Mail} from '@material-ui/icons'

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        {/* left container start */}
        <div className="left">
        <a href="#intro" className = "logo">Nav</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span> 954-295-9085</span>
          </div>
          <div className="itemContainer">
          <Mail className="icon"/>
          <span> ampgzo2@gmail.com</span>
          </div>
        </div>
        {/* left container end */}
        {/* right container start */}
        <div className="right">
          <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)
          }>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        {/* right container end */}
      </div>
    </div>
  )
}
