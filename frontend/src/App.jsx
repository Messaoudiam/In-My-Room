// style
import "./App.css";

// assets
import logo from "../public/assets/Vlogo.png";

// components
import PairOfSneakers from "./components/PairOfSneakers";

function App() {
  return (
    <div className="App">
      <img className="INMRlogo" src={logo} alt="IMRSneakers" />
      <PairOfSneakers />
    </div>
  );
}

export default App;
