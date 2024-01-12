import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import SoundSection from './components/SoundSection'

const App = () => {
  return (
   <div className="App">
    <Navbar/>
    <Jumbotron/>
    <SoundSection/>
   </div>
  )
}

export default App
