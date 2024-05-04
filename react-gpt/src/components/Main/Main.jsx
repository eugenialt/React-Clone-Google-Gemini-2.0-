import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'

function Main() {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beutiful places to see on an road trip  </p>
                    <img src= {assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p> Brifly define what you want to do with your life</p>
                    <img src= {assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm ideas for your next vacation  </p>
                    <img src= {assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Iprove the quality of your life  </p>
                    <img src= {assets.code_icon} alt="" />
                </div>
            </div>
        </div>
     </div>
  )
}

export default Main