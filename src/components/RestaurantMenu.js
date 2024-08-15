import React from "react";

import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resinfo = useRestaurantMenu(resid);

  const iteminfo = resinfo[2]?.card?.card?.info;

  const itemcardinfo =
    resinfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resinfo);

  const categories =
    resinfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return resinfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="text-center ">
      <h2 className="font-bold text-2xl">{iteminfo?.name} </h2>
      <h3 className="font-semibold">{iteminfo?.cuisines.join(",")}</h3>
      <h3 className="font-semibold">{iteminfo?.costForTwoMessage}</h3>
      <div className="w-6/12 mx-auto">
        {categories.map((c) => (
          <RestaurantCategory data={c.card?.card} />
        ))}
      </div>

      {/* <ul>
        {itemcardinfo?.itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} = Rs {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
