import { useEffect, useState } from 'react'
import Portfoliolist from '../portfoliolist/Portfoliolist'
import './portfolio.scss'
import {webPortfolio, agilePortfolio} from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("web")
  const [data, setData] = useState([])
  const list = [
    {
      id: "Web",
      title: "Web App",
    },
    {
      id: "agile",
      title: "Agile Content",
    },
  ]
  useEffect(()=>{
    switch(selected){
      case "Web":
        setData(webPortfolio);
        break;
      case "agile":
        setData(agilePortfolio);
        break;
      default:
          setData(webPortfolio);
    }
  },[selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
       {list.map(item=>(
        <Portfoliolist title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
       ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
        <div className="item">
          <img src={d.img} alt=""/>
          <h3>{d.title}</h3>
        </div>
        ))}
      </div> 
    </div>
  
  )
}
