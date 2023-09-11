import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;
    const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo} = resData;
    
    return(
        <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={ CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>Rs.{(costForTwo.split(' ')[0]).slice(1)} FOR TWO</h4>
        </div>
    )
}

export default RestaurantCard;