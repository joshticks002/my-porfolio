import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60, 
      strings: ['Developer', 'Designer', 'Agile Methodologist'],
     });
  },[])
  return (
   <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="images/portfolio1.png" alt="" className="my-img" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Joshua Adeyemo</h1>
        <h3>Software <span ref={textRef}></span></h3>
      </div>
      <a href="#portfolio">
      <img src="images/arrow.png" alt=""/>
      </a>
    </div>
   </div>
  )
}
