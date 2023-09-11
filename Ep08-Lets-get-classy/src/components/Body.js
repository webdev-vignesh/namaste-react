import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export const Body = () => {

    // local state variable
    const [listOfRestaurants, setListOfRestaurants ] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    let i = 1;
    console.log(i);

    useEffect(() => {
        fetchData();
        console.log("use effect triggered")
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optionally chaining - using ?
        console.log(json)
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length === 0 
    ? ( 
        <Shimmer /> 
    )
    : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <div>
                        <input type="text" className="search-box" value={searchText} 
                        onChange={ (e) => {
                            setSearchText(e.target.value);
                        }} 
                        />
                        <button onClick={() => {
                            // filter the restaurant and update the UI
                            console.log(searchText);
                            let filteredRestaurant = listOfRestaurants.filter((res) => res?.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRestaurant);
                        }}>Search</button>
                    </div>
                    <button 
                        className="filter-btn"
                        onClick={() => {
                            // filter based on rating
                            filteredList = listOfRestaurants.filter(res => res?.info.avgRating > 4.3);
                            setListOfRestaurants(filteredList);
                    }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to={'restaurants/' + restaurant?.info?.id}>
                            <RestaurantCard resData={restaurant?.info} />
                        </Link>        
                    ))
                }
            </div>
        </div>
    )
}

export default Body;