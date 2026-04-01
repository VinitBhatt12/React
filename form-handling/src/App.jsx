import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  function submitHandler(e){
    e.preventDefault()
    console.log("form Submited")
  }
  return (
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
      <input type="text" name="" id="" />
      <button>submit</button>
    </form>
  )
}

export default App
