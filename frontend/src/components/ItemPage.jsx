// react
import { useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// style
import "./style/ItemPage.css";

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
      <div>
        <div className="image">
          <img src={itemData.image} alt="shoe" />
        </div>
        <p key={itemData.id}>
          {itemData.brand} {itemData.model}
        </p>
        <div>
          <p> {itemData.name} </p>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
