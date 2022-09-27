import { useState } from 'react';
import './testimonials.scss'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
  {
    id: "1",
    name: "Ugwu Marcel",
    icon: "./images/twitter.png",
    title: "Web App",
    desc:
      "It is a great work you are putting out there. You are a unique engineer!",
    img:
      "/images/chigo.png",
  },
  {
    id: "2",
    name: "Yusuf Muhammad Akah",
    icon: "./images/youtubee.png",
    title: "Agile", 
    desc:
      "I am quite impressed with your Agile contents. I cannot wait for your next update. You have had a great impact on my growth mindset. Keep the good work coming bro!",
    img:
      "/images/yusuf.png",
    featured: true,
  },
  {
    id: "3",
    name: "Lawrence Mandong",
    icon: "./images/linkdin.png",
    title: "Web App",
    desc:
      "The Scorecard management application saved my day. It made it easier to update students score and for each student to his/her weekly performance. Nice work!",
    img:
      "/images/lawrence.png",
  },
  ]
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
   <div className="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div className="container">
      {data.map((d, i)=>(
      <div key={i} className={d.featured ? "card featured" : "card"}>
        <div className="top">
          < img className="user"
          src={d.img} alt=""/>
          < img className="right"src={d.icon} alt=""/>
        </div>
        <div className="center">{d.desc}</div>
        <div className="bottom">
          <h3>{d.name}</h3> 
          <h4>{d.title}</h4>
        </div>
      </div>
      ))}
    </div>
   </div>
  )
}
