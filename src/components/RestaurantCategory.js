import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showitems,setShowindex }) => {
  
  const handleclick=()=>{
    setShowindex();
  }
  return (
    <div className="bg-gray-100 rounded-lg shadow-md">
      <div className=" my-4 p-4 justify-between flex font-bold text-lg cursor-pointer" onClick={()=>handleclick()}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span> ⬇️</span>
      </div>
      {showitems && <div >
        {data.itemCards.map((list) => (
          <ItemList data={list.card?.info} key={list.card?.info?.id} />
        ))}
      </div>}
    </div>
  );
};

export default RestaurantCategory;
