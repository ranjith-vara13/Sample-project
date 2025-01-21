import { useState} from "react";
import RestaurantCard from "../components/RestaurantCard";
import resList from "../utils/mockdata";
import React from "react";
const Body = () => {

 const [listOfRestaurant, setListOfRestaurant] = useState(resList);

 const [searchText, setSearchText] = useState("");
         
 return (
 <div className="container body">
 <div className="flex bg-gray-100 ">
 <div className=" flex search m-4 p-2">
   
 <input
 type="text" className="border border-solid border-black m-4 rounded-2xl" value={searchText} onChange={(e) => {
  setSearchText(e.target.value);}}/>

 <button
 className="flex px-4 py-2 bg-green-400 m-4 rounded-2xl "
 onClick={() => {
 

 const filteredRestaurant = listOfRestaurant.filter((res) => {
 return res.data.id.toLowerCase().includes(searchText.toLowerCase());});

 setListOfRestaurant(filteredRestaurant);}}>Search</button>
<div className=" filter-flex px-4 py-2 bg-green-400 m-4 rounded-2xl" ><button onClick={() => {
 const filterLogic = listOfRestaurant.filter((res) => {
 return res.data.avgRating > 4;}); 

 setListOfRestaurant (filterLogic);}}>Top Restaurants</button></div>
 </div> 
 </div>

 <div className="flex flex-wrap">
 {listOfRestaurant.map((restaurant) => (
 <RestaurantCard key={restaurant.data.id} resData={restaurant} />
 ))}
 </div>
 </div>
 );
};
    
export default Body;

