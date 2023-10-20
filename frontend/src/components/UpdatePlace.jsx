import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePlace = () => {
    const {id} = useParams();
    const [placeData, setplaceData] = useState(null);

    const navigate = useNavigate();

    const fetchPlaceData = async() => {
        const res = await fetch('http://localhost:5000/place/getbyid/'+id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);
    }
  return (
    <div>UpdatePlace</div>
  )
}

export default UpdatePlace