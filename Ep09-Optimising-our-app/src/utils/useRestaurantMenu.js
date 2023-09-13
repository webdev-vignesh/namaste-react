import {useState, useEffect} from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    // local state
    const [resInfo, setResInfo] = useState(null);
    
    // api call
    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data); 
    }

    return resInfo;
}

export default useRestaurantMenu;