import React from "react";
import Restaurantcard, { withPromotedLable } from "./Restaurantcard";
import restList from "../utils/mockdata.js";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantcardPromoted = withPromotedLable(Restaurantcard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <div>
        <h4>
          Looks like you are offline ,please check your internet connection
        </h4>
      </div>
    );
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter m-4 px-4">
        <input
          className="input border-2 border-black rounded-md mx-2 p-2"
          type="text"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        />
        <button
          className="button border-2 border-gray-400 rounded-md shadow-md bg-yellow-400 p-2 mx-2"
          // style={{ padding: 10, marginLeft: 10 }}
          onClick={() => {
            const searchedrestaurant = listofRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setfilteredrestaurant(searchedrestaurant);
          }}
        >
          Search
        </button>

        <button
          className="button border-2 border-gray-400 rounded-md shadow-md bg-yellow-400 p-2 mx-2"
          // style={{ padding: 10 }}
          onClick={() => {
            const filtedRestaurants = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setfilteredrestaurant(filtedRestaurants);
          }}
        >
          Tap to filter Top rated restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredrestaurant.map((card) => (
          <Link to={"/restaurantmenu/" + card.info.id} key={card.info.id}>
            {card.info.promoted ? (
              <RestaurantcardPromoted restdata={card} />
            ) : (
              <Restaurantcard restdata={card} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
