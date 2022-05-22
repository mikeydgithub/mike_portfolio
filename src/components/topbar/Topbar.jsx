import './topbar.scss';
import { Person, Mail } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius</a>
          <div className="itemContainter">
            <Person className="icon"/>
              <span>Mike Diamond</span>
          </div>
          <div className="itemContainter">
            <Mail className="icon"/>
            <span>ampgzo2@gmail.com</span>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}
