import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePlace = () => {
  const locations = ['Delhi', 'Uttar Pradesh', 'Kerala', 'Maharashtra', 'Assam', 'Karnataka'];
    const {id} = useParams();
    const [placeData, setplaceData] = useState(null);

    const navigate = useNavigate();

    const fetchPlaceData = async() => {
        const res = await fetch('http://localhost:5000/place/getbyid/'+id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setplaceData(data);
    }
    useEffect(() => {
      fetchPlaceData()
    }, []);

    const submitForm = async (values) => {
      const res = await fetch('https://localhost:5000/place/update/'+id, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
              'Content-Type' : "application/json"
          }
      })
  console.log(res.status);

      if(res.status === 200){
          Swal.fire({
              icon : 'success',
              title: 'updated',
              text : 'place updated successfully'
          })
          navigate('/placemanager');
      }
      console.log(values);
  }
  return (
    <div>
    <div className="col-md-4 mx-auto">
   <div className="card">
     <div className="card-body">
       <h2 className="my-3">Place Update Form</h2>
           {
               placeData!==null ? 
       <Formik
           initialValues={placeData}
           onSubmit={PlaceForm}
       >
           { (PlaceForm) => (
               <form onSubmit={PlaceForm.handleSubmit}>
               <label>Place: </label>
               <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                 {PlaceForm.touched.title && PlaceForm.errors.title}
               </span>
               <input
                 id="title"
                 onChange={PlaceForm.handleChange}
                 value={PlaceForm.values.title}
                 type="text"
                 className="form-control mb-3"
               />
 
               <label for= ''>Location</label>
               <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                 {PlaceForm.touched.email && PlaceForm.errors.email}
               </span>
               <select className='form-control mb-3' id="location" value={PlaceForm.values.location} onChange={PlaceForm.handleChange}>
                <option>Select</option>
                {
                  locations.map(loc => (

                    <option value={loc}>{loc}</option>
                  ))
                }

              </select>
 
               <label>Description: </label>
               <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                 {PlaceForm.touched.description && signupForm.errors.description}
               </span>
               <input type='text' id='description' onChange={PlaceForm.handleChange} value={PlaceForm.values.description} className='form-control mb-3' />
 
               <label>Image: </label>
               <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                 {PlaceForm.touched.confirm && PlaceForm.errors.confirm}
               </span>
               <input type='file' onChange={uploadFile} className='form-control mb-3' />
 
               <button type="submit" className="btn btn-danger w-100 mt-4">
                 Submit
               </button>
             </form>
           ) }
       </Formik>
       :
       <h1>Loading ... </h1>
           }    
     </div>
   </div>
 </div>
</div>
  )
}

export default UpdatePlace