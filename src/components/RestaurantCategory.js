import React from "react";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className="bg-gray-100 my-4 p-4 justify-between flex font-semibold rounded-lg shadow-md">
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span> ⬇️</span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
