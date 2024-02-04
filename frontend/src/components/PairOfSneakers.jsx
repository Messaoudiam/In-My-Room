// react
import { useEffect, useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// style
import "./style/PairOfSneakers.css";

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
        <div className="zzz">
          <Link to={`/shoes/${shoe.id}`}>
            <div className="image">
              <img src={shoe.image} alt="shoe" />
            </div>
            <p key={shoe.id}>
              {shoe.brand} {shoe.model}
            </p>
            <div className="shoeName">
              <p> {shoe.name} </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PairOfSneakers;
