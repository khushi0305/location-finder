import React from 'react';
import useAppContext from '../AppContext';
import { useFormik } from 'formik';


const Login = () => {
  const {setLoggedIn} = useAppContext();
  
  const loginForm= useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit: async (values) => {console.log(values);
    const res = await fetch('')
    }
  })
  
  return (
    <div className='py-5 vh-100 bg-body secondary'>
      <div className='col-md-4 mx-auto'>
      <div className='card'>
        <div className="card-body">
          <h2 className='my-3'>LogIn Form</h2>
          <form >
          
          <label>Email: </label>
          <input type="text" id='email' className='form-control mb-3' />
          <br/>
          <br/>
          <label>Password: </label>
          <input type="password" id='password' className='form-control mb-3' />
<br/>
<br/>
          <button type='submit' className='btn btn-danger w-100 mt-4'>Submit</button>
        </form>
          </div>
          </div>
          </div>
    </div>

  )
}

export default Login