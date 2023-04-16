import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

export const Body = () => {

    // local state variable
    const [listOfRestaurants, setListOfRestaurants ] = useState(resList);

    return(
        <div className='body'>
            <div className='filter'>
                <button 
                className="filter-btn"
                onClick={() => {
                    // filter based on rating
                    filteredList = listOfRestaurants.filter(res => res.data.avgRating > 4);
                    setListOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} 
                    />))
                }
            </div>
        </div>
    )
}

export default Body;