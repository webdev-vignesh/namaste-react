import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId); // custom hook

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item, index) => <li key={index}>{item?.card?.info?.name} - Rs.{(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 1000}</li>)}
            </ul>
        </div>)
}

export default RestaurantMenu;