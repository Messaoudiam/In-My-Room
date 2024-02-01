// react
import { useEffect, useState } from "react";
// style
import "./style/PairOfSneakers.css";

// assets
// import cortez from "../assets/cortavavez.png";

function PairOfSneakers() {
  const [shoesData, setShoesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3311/api/shoes/")
      .then((response) => response.json())
      .then((data) => setShoesData(data));
  }, []);

  return (
    <div className="aaa">
      {shoesData.map((shoe) => (
        <div>
          <div className="image">
            <img src={shoe.image} alt="shoe" />
          </div>
          <p key={shoe.id}>
            {shoe.brand} {shoe.model}
          </p>
          <div>
            <p> {shoe.name} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PairOfSneakers;

//       {shoesData.map((shoe) => (
