import axios from 'axios'
import { useState } from 'react'
function App() {

  // async function getData(){
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   console.log(response)
  // }
  // const getData = async ()=>{
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  //   const data = await response.json()
  //   console.log(data)
  // }

  // const getData = async ()=>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  //   console.log(response.data)
  // }

  const [data, setdata] = useState([])
  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
    console.log(data)
  }
  return (
    <>
      <center>
        <button onClick={getData}> Get Data</button>
      </center>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello, {elem.author} {idx}</h3>
        })}
      </div>
    </>
  );
}

export default App;
