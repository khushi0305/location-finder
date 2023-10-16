import { swap, useFormik } from 'formik';
import React, { useState } from 'react';
import Swal from 'sweetalert2';


const AddPlace = () => {

  const locations = ['Delhi', 'Uttar Pradesh', 'Kerala', 'Maharashtra', 'Assam', 'Karnataka'];
  const [selImg, setSelImg] = useState('');

  const PlaceForm = useFormik({
    initialValues: {
      title: '',
      location: '',
      description: '',
      image: ''
    },
    onSubmit: async (values) => {
      values.image = selImg;
      console.log(values);
      const res = await fetch('http://localhost:5000/place/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'New Place Added Successfully!'
        })
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem('place', JSON.stringify(data));
      }
      else if(res.json === 400){
        Swal.fire({
          icon: 'error',
          title: 'Add Again!'
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Try Again Later'
        })
      }
    }
  })

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelImg(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div className='py-5 vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto'>
        <div className='card'>
          <div className="card-body">
            <h2 className='my-3'>Add New Place: </h2>
            <form onSubmit={PlaceForm.handleSubmit}>
              <label>Place: </label>
              <input type='text' id='title' onChange={PlaceForm.handleChange} value={PlaceForm.values.title} className='form-control mb-3' />
              <br />
              <label for="">Location: </label>
              <select className='form-control' id="location" value={PlaceForm.values.location} onChange={PlaceForm.handleChange}>
                <option>Select</option>
                {
                  locations.map(loc => (

                    <option value={loc}>{loc}</option>
                  ))
                }

              </select>
              <br />
              <br />
              <label>Description: </label>
              <input type='text' id='description' onChange={PlaceForm.handleChange} value={PlaceForm.values.description} className='form-control' />
              <br />
              <label>Image: </label>
              <input type='file' onChange={uploadFile} className='form-control' />
              <br />
              <button type='submit' className='btn btn-danger w-100 mt-4'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPlace;