import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LocationData from './DummyData'

const BrowseLocation = () => {
  const [LocList, setLocList] = useState(LocationData);

  const locations = ['North', 'South', 'East', 'West'];

  const filterPlace = (e) => {
    const search = e.target.value;
    let filteredData = LocationData.filter( (loc) => {return loc.location === search});
    setLocList(filteredData); 
}

  const showData = () => {
    return LocList.map((loc) => {
      return <div className='col-md-4 mb-4'>
        <div className='card'>
          <img style={{height: 250, objectFit: 'cover'}} src={loc.image} alt="" />
          <div className="card-body">
            <p>{loc.location}</p>
            <h3>{loc.place}</h3>
            <p>{loc.description.substring(0, 175)} ...</p>
            <Link to={'/find/' + loc.place}>
              View More
            </Link>
          </div>
        </div>
      </div>
    })
  }
  return (
    <div className='row p-5'>
                <div className='col-5'>
                    <div className='card'>
                        <div className='card-body'>
                            <h3>Filter Places</h3>
                            <hr/>
                            <select className='form-control' onChange={filterPlace}>
                                <option value="">Select Location</option>
                                {
                                    locations.map((b) => (<option value= {b}>{b}</option>))
                                }
                            </select>
                        </div>
                    </div>
                </div>
    <div className='container p-5'>
      {/* <h1 className=' text-dark'  > Let's Explore!! </h1>
      <h3 className='text-secondary'> Choose your Location...  </h3>
        <h5 className='bg-body-dark'> Select your Place to visit in  a location:</h5> */}
        <div className='row'>
        {showData()}
      </div>
</div>
    </div>
  )
}

export default BrowseLocation;