import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import SoundSection from './components/SoundSection'
import DisplaySection from './components/DisplaySection'

const App = () => {
  return (
   <div className="App">
    <Navbar/>
    <Jumbotron/>
    <SoundSection/>
    <DisplaySection/>
   </div>
  )
}

export default App
