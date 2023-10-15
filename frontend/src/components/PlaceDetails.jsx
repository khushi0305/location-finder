import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PlaceDetails = () => {
    const {id} = useParams();
    const [placeData, setplaceData] = useState(null);

    const fetchPlaceData = async() => {
        const res = await fetch("http://localhost:5000/user/getbyid/" + id)
        const data = await res.json();
        console.log(data);
        setplaceData(data);
    }
    useEffect(() => {
        fetchPlaceData();
    }, [])

    const showPlaceData = () => {
        if(placeData !== null) {
            return(
                <div className='card my-auto'>
                <h3 className='text-primary'>Place Details</h3>
                    <div className='card-body'>
                        <h3>Place: {placeData.place}</h3>
                        <h3> Location: {placeData.location}</h3>
                        <p>Description: {placeData.description}</p>
                        <h3>  Image: <img>{placeData.image}</img></h3>
                    </div>
                </div>
            )
        }
    }
  return (
    <div>{showPlaceData()}</div>
  )
}

export default PlaceDetails;