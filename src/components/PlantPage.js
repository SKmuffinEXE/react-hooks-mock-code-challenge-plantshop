import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const [searchResult, searchHandler] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlantList(data);
      });
  }, []);

//create a function that sends updated data to PlantList
function updatePlants(plant){
  setPlantList(prev => [...prev, plant])
}

let displayList = plantList.filter((item) => item.name.toLowerCase().includes(searchResult.toLowerCase()))

  


  return (
    <main>
      <NewPlantForm updatePlants = {updatePlants}/>
      <Search searchHandler = {searchHandler}/>
      <PlantList PlantItems = {displayList} />
    </main>
  );
}

export default PlantPage;
