import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
const { resData } = props;


  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  
  return (
    <div className=" m-6 p-3  rounded-sms w-[250px] bg-gray-100 hover:bg-gray-200 ">
      <img className="rounded-lg  w-full md:w-1/1 h-48 object-cover" src={ CDN_URL+cloudinaryImageId} />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h5>{costForTwo / 100} FOR TWO</h5>
      <h6>{deliveryTime} minutes</h6>
    </div>
  );
};

export default RestaurantCard;