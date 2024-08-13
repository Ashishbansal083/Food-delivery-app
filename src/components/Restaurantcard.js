import { CDN_URL } from "../utils/constants.js";

const Restaurantcard = (props) => {
    const { restdata } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      sla,
      costForTwo,
    } = restdata?.info;
    return (
      <div className="m-4 p-2 w-[220px] bg-[#f0f0f0] shadow-lg rounded-md ">
        <img
          className="shadow-2xl rounded-md"
          alt="food image"
          src={CDN_URL
             +
            cloudinaryImageId
          }
        ></img>
        <div className="flex-col flex-wrap ">
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm">{cuisines.join(" "+","+" ")} </p>
          <p className="font-semibold">{costForTwo} </p>  
          <p><strong>Rating</strong>-{avgRating}</p>
          <p><strong>Delivery Time</strong>-{sla.deliveryTime} min.</p>
        </div>
      </div>
    );
  };

  export default Restaurantcard;