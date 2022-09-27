import './contacts.scss'
import {useState} from "react"

export default function Contacts() {
  const [message, setMessage] = useState(false)
  const handleSubmit = (e)=>{ 
    e.preventDefault()
    setMessage(true)
  }
  return (
   <div className="contacts" id="contacts">
    <div className="left">
      <img src="/images/handshake.png" alt=""/>
    </div>
    <div className="right">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <button type="Submit">Send</button>
        {message && <span>Thanks, I will reply ASAP </span>}
      </form>
    </div>
   </div>
  )
} 
