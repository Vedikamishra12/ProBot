import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import './Sidebar.css'
import { Context } from '../../context/Context'
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GoHistory } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

const Sidebar = ({toggle}) => {
    const [extended,setExtended]= useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat}= useContext(Context)

    const loadPrompt= async (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
  return (
    <div className={`sidebar ${!toggle ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
        <div className='top '> 
            <IoMenu  onClick={()=> setExtended(prev=> !prev)} className='menu text-2xl' />
            <div onClick={()=>newChat()} className={`new-chat ${!toggle ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}>
                <FaPlus className={`text-xl ${!toggle ? " text-white" : " text-black"}`}/>  
                {extended ? <p className={`text-m ${!toggle ? " text-white" : " text-black"}`}>New Chat</p> : null}
            </div>
            {extended 
            ? <div className='recent'>
                <p className='recent-title'>Recent</p>
                {prevPrompts?.map((item,index)=>{
                    return(
                    <div onClick={()=>loadPrompt(item)} className={`recent-entry  ${!toggle ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}>
                         <FiMessageSquare className='text-xl'/>
                    <p className=''>{item.slice(0,18)}...</p>
                </div> 
                    )
                })}
                 </div> 
            :null}
        </div>
        <div className={`bottom ${!toggle ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
            <div className={`bottom-item recent-entry ${!toggle ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}>
                <AiOutlineQuestionCircle className={`text-xl ${!toggle ? " text-white" : " text-black"}`}/>
                {extended ? <p className={`text-m ${!toggle ? " text-white" : " text-black"}`}>Help</p> : null}
            </div>
            <div className={`bottom-item recent-entry ${!toggle ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}>
                <GoHistory className={`text-xl ${!toggle ? " text-white" : " text-black"}`}/>
                {extended ? <p className={`text-m ${!toggle ? " text-white" : " text-black"}`}>Activity</p> : null}
            </div>
            <div className={`bottom-item recent-entry ${!toggle ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}>
                <MdOutlineSettings className={`text-xl ${!toggle ? " text-white" : " text-black"}`}/>
                {extended ? <p className={`text-m ${!toggle ? " text-white" : " text-black"}`}>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar