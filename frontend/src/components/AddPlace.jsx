import React from 'react'

const AddPlace = () => {
  return (
    <div className='container'>
        <form>
            <label>Title: </label>
            <input type='text' id='title' className='form-control mb-3'/>
<br/>
<br/>
            <label>Location: </label>
            <input type='text' id= 'location' className='form-control mb-3'/>
            <br/>
            <br/>

            <label>Description: </label>
            <input type='text' id='describe' className='form-control'/>
        </form>
        </div>
  )
}

export default AddPlace;