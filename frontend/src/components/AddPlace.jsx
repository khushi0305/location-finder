import React from 'react'

const AddPlace = () => {
  return (
    <div className='py-5 vh-100 bg-body-secondary'>
    <div className='col-md-4 mx-auto'>
      <div className='card'>
        <div className="card-body">
          <h2 className='my-3'>Add New Place: </h2>
        <form >
            <label>Place: </label>
            <input type='text' id='title' className='form-control mb-3'/>
<br/>
<label for="">Location: </label>
        <select>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
        </select>
        <br/>
        <br/>
            <label>Description: </label>
            <input type='text' id='describe' className='form-control'/>
<br/>
            <label>Image: </label>
            
            <input type='file' id='myfile'/>
            <br/>
            <button type='submit' className='btn btn-primary w-100 mt-4'>Submit</button>
        </form>
        </div>
        </div>
        </div>
        </div>
  )
}

export default AddPlace;