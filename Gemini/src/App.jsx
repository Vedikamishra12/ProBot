import React, { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Sidebar/Main/Main'

const App = () => {
  const [toggle, setToggle] = useState(true) // true = light, false = dark

  const handleToggle = () => setToggle(!toggle)
  return (
    <>
     
    <Sidebar toggle={toggle}/>
    <Main toggle={toggle} handleToggle={handleToggle} />

    </>
  )
}

export default App