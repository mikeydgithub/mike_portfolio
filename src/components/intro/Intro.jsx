import './intro.scss'
import {KeyboardArrowDown} from '@material-ui/icons'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Engineer"],
    });
  },[]);

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
            Full Stack Web <span ref={textRef}></span>
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
