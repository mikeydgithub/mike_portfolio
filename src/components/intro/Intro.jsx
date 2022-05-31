import './intro.scss'
import {KeyboardArrowDown} from '@material-ui/icons';
import TypewriterComponent from 'typewriter-effect';


export default function Intro() {
  return (
    <div className="intro" id="intro">
      {/* left side start */}
      <div className="left">
        <div className="imgContainer">
          <img src="assets/self.jpg" alt=""/>
        </div>
      </div>
      {/* left side end */}
      {/* right side start */}
      <div className="right">
        <div className="wrapper">
          <h1>Michael Diamond</h1>
          <h3>
            Full Stack Web <span>
            <TypewriterComponent 
            options={{ 
            strings:["Developer", "Designer", "Content Creater"],
            autoStart:true,
            delay:75,
            loop:true
            }}
            />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="icon"/>
        </a>
      </div>
      {/* right side end */}
    </div>
  )
}
