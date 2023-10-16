import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignUp = () => {
  const navigate = useNavigate();
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: ''
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }

      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully',
          text: 'Login to Continue!'
        })
        navigate('/login');
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong!'
        })
      }
    },

    validationSchema: SignupSchema
  })

  

  return (
    <div className='py-5 vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto'>
        <div className='card'>
          <div className="card-body">
            <h2 className='my-3'>SignUp Form</h2>

            <form onSubmit={signupForm.handleSubmit}>
              <label>Name: </label>

              <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }}>{signupForm.touched.name && signupForm.errors.name}</span>
              <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text" className='form-control mb-3' />
              <br />
              <label>Email: </label>
              <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }}>{signupForm.touched.email && signupForm.errors.email}</span>
              <input type="text" id='email' onChange={signupForm.handleChange} value={signupForm.values.email} className='form-control mb-3' />
              <br />
              <label>Password: </label>
              <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }}>{signupForm.touched.password && signupForm.errors.password}</span>
              <input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} className='form-control mb-3' />
              <br />
              <label>Confirm Password: </label>
              <span style={{ fontSize: 10, marginLeft: '10px', color: 'red' }}>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
              <input type="password" id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm} className='form-control mb-3' />
              <br />
              <button type='submit' className='btn btn-danger w-100 mt-4'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp