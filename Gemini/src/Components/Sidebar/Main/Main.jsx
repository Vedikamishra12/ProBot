import React, { useState } from 'react'
import './Main.css'
import {assets} from '../../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../../context/Context'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { IoMicOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

const Main = ({toggle,handleToggle}) => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input,setRecentPrompt,prevPrompt,setPrevPrompt}=useContext(Context)

  return (
    <div className={`main font-outfit ${!toggle ? "bg-gray-900 min-h-screen text-white":"bg-white text-gray-900"}`}> 
      <div className={`nav ${!toggle ? "bg-gray-900 " : "bg-white"}`}>
        
        <p>ProBot</p>
        <div className='Mode'>
        <div className='dark'>
        {
          !toggle?<MdDarkMode className="box" onClick={handleToggle}/>:<MdLightMode className='box' onClick={handleToggle}/> 
        }
        </div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small/robot-chat-bot-concept-illustration-vector.jpg" />
        </div>
      </div>
      <div className="main-container">

        {!showResult 
        ?<>
           <div className="greet">
            <p><span>Hello, Vedi</span></p>
            <p>How can i help you today?</p>
        </div>
        <div className="cards">
            <div className={`card ${!toggle ? "bg-gray-800 text-gray-500 hover:bg-gray-700 " : "bg-gray-100 hover:bg-gray-200 text-gray-500"}`}>
                <p>Sugest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} />
            </div>
            <div className={`card ${!toggle ? "bg-gray-800 text-gray-500 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200 text-gray-500"}`}>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} />
            </div>
            <div className={`card ${!toggle ? "bg-gray-800 text-gray-500 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200 text-gray-500"}`}>
                <p>Brainstrom team bonding activities for our work retreat</p>
                <img src={assets.message_icon} />
            </div>
            <div className={`card ${!toggle ? "bg-gray-800 text-gray-500 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200 text-gray-500"}`}>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} />
            </div>
        </div>
        </>
        :
           <div className='result'>
          <div className='result-title'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small/robot-chat-bot-concept-illustration-vector.jpg" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon}/>
            {loading
            ?<div className='loader'>
              <hr />
              <hr />
              <hr />
              </div>
              :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
            
          </div>
          </div>
        
      }
      
        <div className="main-bottom">
            <div className={`search-box ${!toggle ? "bg-gray-800" : "bg-gray-100"}`}>
                <input className={`${!toggle ? "bg-gray-800" : "bg-gray-100"}`} onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder='enter a prompt here' />
                <div>
                    <LuImagePlus className={`text-2xl cursor-pointer ${!toggle ? " text-white" : " text-gray-500"}`}/>
                    <IoMicOutline className={`text-2xl cursor-pointer ${!toggle ? " text-white" : " text-gray-500"}`}/>
                    {input ? <VscSend className={`text-2xl cursor-pointer ${!toggle ? " text-white" : " text-gray-500"}`} onClick={()=>onSent()} /> : null}
                </div>
            </div>
            <p className='bottom-info'>
                Gemini may display inaccurate info,including about people, so double-check its respones.Your privacy and Gemini Apps
            </p>
        </div>
      </div>
    </div>
    
  )
  
}

export default Main