// react
import { useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// style
import "./style/ItemPage.css";

// assets
import logo from "../../public/assets/Vlogo.png";

function ItemPage() {
  const { id } = useParams();

  const [itemData, setItemData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3311/api/shoes/${id}`)
      .then((response) => response.json())
      .then((data) => setItemData(data));
  }, [id]); // Assurez-vous d'inclure id comme dépendance pour recharger lorsque id change

  return (
    <div className="itemPage">
      <div className="INMRlogo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div className="itemImage">
          <img className="imagedanslitem" src={itemData.image} alt="shoe" />
        </div>
        <div className="textUnderImage">
          <div className="brandModelItem">
            <p key={itemData.id}>
              {itemData.brand} {itemData.model}
            </p>
            <p>
              {" "}
              <span> {itemData.name} </span>{" "}
            </p>
            <div className="detailsItem">
              <p> Color: {itemData.color} </p>
              <p> Date de sortie: {itemData.date_release}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
