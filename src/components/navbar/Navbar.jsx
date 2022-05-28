import './navbar.scss'
import {Person, Mail} from '@material-ui/icons'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* left container start */}
        <div className="left">
        <a href="#intro" className = "logo">Intro</a>
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
          <div className="hamburger">
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
