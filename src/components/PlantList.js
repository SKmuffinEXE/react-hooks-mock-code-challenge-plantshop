import React from "react";
import PlantCard from "./PlantCard";

function PlantList({PlantItems}) {

  
  const plants = PlantItems.map(PlantItem => {
    
    return <PlantCard PlantItem = {PlantItem} key = {PlantItem.name}/>
  }
    )

  //pass the json all the way here from plant page
  return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
