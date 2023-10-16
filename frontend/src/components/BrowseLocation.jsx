import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LocationData from './DummyData'

const BrowseLocation = () => {
  const [LocList, setLocList] = useState(LocationData)

  // const fetchLocData = async () => {
  //   const res = await fetch('http://localhost:5000/place/getall');
  //   const data = await res.json();
  //   console.log(data);
  //   setLocList(data);
  // }

  // useEffect(() => {
  //   fetchLocData()
  // }, []);

  const showData = () => {
    return LocList.map((loc) => {
      return <div className='col-md-4 mb-4'>
        <div className='card'>
          <img style={{height: 250, objectFit: 'cover'}} src={loc.image} alt="" />
          <div className="card-body">
            <p>{loc.location}</p>
            <h3>{loc.place}</h3>
            <p>{loc.description.substring(0, 50)} ...</p>
            {/* <img>{loc.image}</img> */}
            <Link to={'/find/' + loc.place}>
              View More
            </Link>
          </div>
        </div>
      </div>
    })
  }
  return (
    <div className='container'>
      <h1 className=' text-dark'  > Let's Explore!! </h1>
      <h3 className='text-secondary'> Choose your Location...  </h3>
      <div className='row'>
        <h5 className='bg-body-dark'> Select your Place to visit in  a location:</h5>
        {showData()}
      </div>

    </div>
  )
}

export default BrowseLocation;