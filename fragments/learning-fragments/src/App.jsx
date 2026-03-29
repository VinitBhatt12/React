import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from "./components/foodItems";
import errorMessage from "./components/errorMessage";
import "./App.css";
function App() {
  return (
    <>
      <h1>Healthy Food</h1>
      <errorMessage></errorMessage>
      <FoodItems/>
    </>
  );
}

export default App;
