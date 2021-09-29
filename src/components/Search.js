import React, { useState, useEffect } from "react";

function Search({searchHandler}) {
  const [query, setQuery] = useState("");
  const[formData, setFormData] = useState('');
  
//testing this thing I found online, currently inactive
useEffect(() => {
  const timeOutId = setTimeout(() => setFormData(query), 500);
  searchHandler(formData)
    return () => clearTimeout(timeOutId);
  }, [query]);

  function changeHandler(e){
    setFormData(e.target.value)
    searchHandler(formData)
  }

  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        name ="name"
        placeholder="Type a name to search..."
        // value = {query}
        value = {formData}
        // onChange= {event => setQuery(event.target.value)}
        onChange ={changeHandler}
        onKeyDown={(e)=>{if(e.keyCode === 8) {
          changeHandler(e)}}}
      />
    </div>
  );
}

export default Search;
