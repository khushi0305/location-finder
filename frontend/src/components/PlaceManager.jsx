import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const PlaceManager = () => {
    const [placeList, setplaceList] = useState([]);

    const getPlaceData = async() => {
        const res = await fetch ('http://localhost:5000/place/getall');
        const data = await res.json();
        setplaceList(data);
    };
    useEffect(() => {
        getPlaceData();
    }, []);

    const deletePlace = async (id) => {
        const res = await fetch('http://localhost:5000/place/delete/'+id, {
            method: 'DELETE'
        })
        console.log(res.status);

        if(res.status === 200){
            getPlaceData();
            toast.success('User Deleted Successfully');
        }
    }
  return (
    <div className='vh-100 bg-body-secondary'>
        <div className='container py-4'>
            <h1 className='text-center'>User Manager</h1>

            <table className='table table-danger'>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Image</th>
                        <th>Place</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        placeList.map((place, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td><img src={`/util/${place.image}`} alt={place.name} /></td>
                                <td>{place.title}</td>
                                <td>{place.location}</td>
                                <td>{place.description}</td>
                                <td><Link to={"/updateplace/"+place._id} className='btn btn-light'>Edit</Link></td>
                                <td><button onClick={()=>{deletePlace(place._id)}} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PlaceManager