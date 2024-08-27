import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItems = (data)=>{
    dispatch(addItems(data))
  }
  
  return (
    <div className="border-b-2  p-4 m-4 flex justify-between h-32">
      <div className="flex flex-col items-start">
        <span className="font-semibold text-lg">{data.name}</span>
        <span className="text-lg">₹{data.price / 100}</span>
      </div>
      <div className="w-2/12 h-full relative">
        <img src={CDN_URL + data.imageId} className="h-full w-full rounded-lg" alt="image N/A"></img>
        <button className="absolute bottom-0 left-0 bg-black text-white rounded-sm text-sm font-semibold"
        onClick={()=>handleAddItems(data)}>ADD+</button>
      </div>
    </div>
  );
};

export default ItemList;
