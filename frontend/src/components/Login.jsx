import React from 'react'
import { useFormik } from 'formik';
import { Swal } from "sweetalert2";
import useAppContext from "../AppContext";

const Login = () => {

    const { setLoggedIn } = useAppContext();
  
    const loginForm = useFormik({
      initialValues:{
        email:'',
        password:''
      },
      onSubmit: async (values) => {console.log(values);

        const res = await fetch('http://localhost:5000/user/authenticate', {                      //authentication
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);
      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Login Success'
        })
        setLoggedIn(true);

        const data = await res.json();
        console.log(data);

        sessionStorage.setItem('user', JSON.stringify(data));                
      }
      else if(res.status === 400){
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Email or Password invalid!!'
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Login Failed!!'
        })
      }
    }
  })
  
  return (
    <div className='py-5 vh-100 bg-body secondary'>
      <div className='col-md-4 mx-auto'>
      <div className='card'>
        <div className="card-body">
          <h2 className='my-3'>LogIn Form</h2>
          <form onSubmit={loginForm.handleSubmit}>
          
          <label>Email</label>
          <input type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mb-3' />
          
          <label>Password</label>
          <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mb-3' />

          <button type='submit' className='btn btn-primary w-100 mt-4'>Submit</button>
        </form>
          </div>
          </div>
          </div>
    </div>

  )
}

export default Login