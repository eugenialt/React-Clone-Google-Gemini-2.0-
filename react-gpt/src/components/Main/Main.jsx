import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

function Main() {

  const {onSent, recentPromt, showResult, loading, resultData,setInput, input} = useContext(Context)
  
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult
            ?<>
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
            </>
            :<div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPromt}</p>
                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{ __html: JSON.stringify(resultData) }}></p>
                     }
                </div>
            </div>
        }
           

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Enter your promt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">Powered by OpenAI</p>
            </div>
        </div>
     </div>
  )
}

export default Main