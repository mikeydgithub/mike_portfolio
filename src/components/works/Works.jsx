import './works.scss'
import { useState } from 'react';

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "Shopping App",
      img:
        "https://user-images.githubusercontent.com/94988620/171214102-94721c76-7e4e-4a3c-b1df-4b88cc62946d.png",
    },
    {
      id: 2,
      title: "Team Builder Pro",
      img:
        "https://user-images.githubusercontent.com/94988620/169304576-f7a8962c-1f14-4a23-82d3-00a0d915ea58.png",
    },
    {
      id: 3,
      title: "Gadget Blog",
      img:
        "https://user-images.githubusercontent.com/94988620/171004704-f29cad7b-f068-4a96-97ac-f467046a52ad.png",
    },
  ];

  const handleClick = (way) => {
    way === 'left' 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map((d)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="" alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.description}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/leftArrow.png" className="arrow left" alt="" onClick={()=>handleClick('left')}/>
      <img src="assets/rightArrow.png" className="arrow right" alt="" onClick={()=>handleClick('right')}/>
    </div>
  )
}
