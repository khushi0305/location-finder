import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BrowseLocation = () => {
  const [LocList, setLocList] = useState([])

  const fetchLocData= async () => {
    const res = await fetch('http://localhost:5000/project/getall');
    const data = await res.json();
        console.log(data);
        setLocList(data);
  }

  useEffect(() => {
    fetchLocData()
  }, []);
  const showData = () => {
    return LocList.map((loc) => {
      return <div className='col-md-4'>
      <div className='card'>
          <div className="card-body">
              <h3>{loc.place}</h3>
              <h2>{loc.location}</h2>
              <p>{loc.description}</p>
              {/* <img>{loc.image}</img> */}
              <Link to={'/placedetails/' + loc._id}>
                  View More
              </Link>
          </div>
      </div>
  </div>
    })
  }
  return (
    <div className='container'>
            <h5 className='text-center text-dark'  > Let's Explore </h5>
            <h3 className='text-secondary'> Choose your Location  </h3>
            <div className='row'>
                <h1 className='bg-body-dark'> Select your Place to visit </h1>
                {showData()}
            </div>

        </div>
  )
}

export default BrowseLocation;