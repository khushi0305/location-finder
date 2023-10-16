import { createContext, useState } from "react";

const PlaceContext = createContext();

export const PlaceProvider = ({children}) => {
    const [placeItems, setplaceItems] = useState([])
}