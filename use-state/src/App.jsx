import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // const [num, setNum] = useState(10)
  // const [username, setUsername] = useState("vinit")
  // function changeNum(){
  //   setNum(30)
  //   setUsername("Anant Singh")
  // }

  // const [num, setNum] = useState(0);
  // function increase() {
  //   setNum(num + 1);
  // }
  // function decrease() {
  //   setNum(num - 1);
  // }

  const [num , setNum] = useState({user:"Vinit Bhatt",age:23})
  const btnClicked = () =>{
    const newNum = {...num}
    newNum.user="Anant Singh"
    setNum(newNum)
  }
  return (
    <center>
      {/* <h1 >The count is {num} <br /> user name is {username}</h1>
      <button onClick={changeNum}>Click me</button> */}

      {/* <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button> */}

      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>

    </center>
  )
}

export default App;
