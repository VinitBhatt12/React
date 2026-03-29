import './App.css'
import ClockHeading from './component/clockheading'
import ClockSlogan from './component/clockSlogan'
import CurrentTime from './component/currentTime'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan/>
    <CurrentTime/>
  </center>
}

export default App
