import React from "react";

import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const { resid } = useParams();
  const resinfo = useRestaurantMenu(resid);

 

  const iteminfo = resinfo[2]?.card?.card?.info;


  const itemcardinfo =
    resinfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;   
   
 

  return resinfo.length === 0 ? (
    <Shimmer />
  ) :(
    <div className="menu">
      <h2>{iteminfo?.name} </h2>
      <h3>{iteminfo?.cuisines.join(",")}</h3>
      <h3>{iteminfo?.costForTwoMessage}</h3>
      <ul>
        {itemcardinfo?.itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} = Rs {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
