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
      <div className="rest-card">
        <img
          className="rest-image"
          alt="food image"
          src={CDN_URL
             +
            cloudinaryImageId
          }
        ></img>
        <div className="card-info">
          <h4>{name}</h4>
          <p>{cuisines.join(",")} </p>
          <p>{costForTwo} </p>  
          <p><strong>Rating</strong>-{avgRating}</p>
          <p><strong>Delivery Time</strong>-{sla.deliveryTime} min.</p>
        </div>
      </div>
    );
  };

  export default Restaurantcard;