import React, { useState} from "react";
// import PlantList from "./PlantList";

function PlantCard({PlantItem}) {

  const [inStock, stockChecker] = useState(true)

  
  function clickHandler(){
    stockChecker(!inStock)
  }


  // console.log(PlantItem)
  return (
    <li className="card">
      <img src={PlantItem.image} alt={PlantItem.name} />
      <h4>{PlantItem.name}</h4>
      <p>Price: {PlantItem.price}</p>
      {inStock ? (
        <button onClick ={clickHandler} className="primary">In Stock</button>
      ) : (
        <button onClick={clickHandler}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
