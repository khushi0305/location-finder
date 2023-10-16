import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

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

            <table className='table table-light'>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Place</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default PlaceManager