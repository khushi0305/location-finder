import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const FindPlaces = () => {

  const { loc } = useParams();
  const [placeList, setPlaceList] = useState([]);

  const fetchPlaceData = async () => {
    const res = await fetch('http://localhost:5000/place/getbylocation/' + loc);
    const data = await res.json();
    console.log(data);
    setPlaceList(data);
  }

  useEffect(() => {
    fetchPlaceData();
  }, [])

  const displayPlaces = () => {
    return placeList.map((place) => (
      <div className='card'>
        <div className="row">
          <div className="col-md-4">
            <img className='w-100' src={"http://localhost:5000/" + place.image} alt="" />

          </div>
          <div className="col-md-8">
            <h3>{place.title}</h3>
          </div>
        </div>

      </div>
    ))
  }


  return (
    <div>
      <div className='container'>
        {displayPlaces()}
      </div>
    </div>
  )
}

export default FindPlaces