import './works.scss'
import {useState} from "react"

export default function Works() {
  const [currentSlide, setCurrentSlide]= useState(0) 
  const data =[
    {
      id: 1,
      icon: "https://sigsports.com/wp-content/uploads/2019/03/website-icon-v2.png",
      title: "Web",
      desc: "Getting a quality website is not an expenses but rather an investment.",
      img: "https://i0.wp.com/fiverrpromotion.com/wp-content/uploads/2021/03/I-will-develop-your-website-with-HTML-CSS-and-java-script.jpg?fit=1147%2C792&ssl=1"
    },
    {
      id: 1,
      icon: "/images/agileicon.png",
      title: "Agile",
      desc: "Early and continuous delivery of valuable software.Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.",
      img: "https://i0.wp.com/fiverrpromotion.com/wp-content/uploads/2021/03/I-will-develop-your-website-with-HTML-CSS-and-java-script.jpg?fit=1147%2C792&ssl=1"
    },
  ]
  const handleClick = (way)=>{
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 1) 
    : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
  };
  return (
   <div className="works" id="works">
    <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
      {data.map((d)=>(
      <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer">
                <img src={d.icon}/>
              </div>
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              <span>Project</span>
            </div>
          </div>
          <div className="right">
            <div className="rightContainer">
              <div className="imgRightContainer">
                <img src="https://i0.wp.com/fiverrpromotion.com/wp-content/uploads/2021/03/I-will-develop-your-website-with-HTML-CSS-and-java-script.jpg?fit=1147%2C792&ssl=1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
    <img src="/images/white-arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
    <img src="/images/white-arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
   </div>
  )
}
