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
      "It is a great work you are putting out there. Am impressed and keep it coming!",
    img:
      "/images/chigo.png",
  },
  {
    id: "2",
    name: "Yusuf Muhammad Akah",
    icon: "./images/youtubee.png",
    title: "Agile", 
    desc:
      "Am really impressed with your Agile contents. I cant wait to read more of  it. It has had a great impact on my project growth. Keep the good work coming!",
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
      "This Scorecard user management application saved my day. It makes it very easy to update the students score and for the student to view their performance rate. Nice work, keep it coming!. ",
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
      {data.map((d)=>(
      <div className={d.featured ? "card featured" : "card"}>
        <div className="top">
          < img src="/images/curvearrow1.png" alt=""/>
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
