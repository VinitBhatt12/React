import { useEffect, useState } from 'react'

function App() {

  const[a,seta] = useState(0)
  const[b,setb] = useState(0)

  function achanging(){
    console.log('a is changing')
  }
  function bchanging(){
    console.log('b is changing')
  }

  useEffect(function(){
    achanging();
    bchanging();
    console.log('Use effect is running')
  },[a,b])

  return (
    <div>
      <h2>A is {a}</h2>
      <h2>B is {b}</h2>
      <button onClick={()=>{
        seta(a+1)
      }}>Set A</button>
      <button onClick={()=>{
        setb(b-1)
      }}>Set B</button>
    </div>
  )
}

export default App
