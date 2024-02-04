// react-router-dom
import { Link } from "react-router-dom";

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
      <div className="buttonConnect">
        <Link to="/je-me-connecte">
          <button type="button"> Me connecter </button>
        </Link>
      </div>
      <PairOfSneakers />
    </div>
  );
}

export default App;
