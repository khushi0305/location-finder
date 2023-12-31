import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UserManager = () => {
    const [userList, setuserList] = useState([])

    const getUserData = async () => {
        const res = await fetch ('http://localhost:5000/user/getall');
        const data = await res.json();
        setuserList(data);
    };
    useEffect(() => {
        getUserData();
    }, [])

    const deleteUser = async(id) => {
        const res =await fetch('http://localhost:5000/user/delete/'+id, {
            method: 'DELETE'})
            console.log(res.status);

            if(res.status === 200){
                getUserData();
                toast.success('User Deleted Successfully')
            }
    }
  return (
    <div className='back'>
        <div className='h-100' style={{backdropFilter: 'blur(5px)'}}>
            
        <div className='container py-4'>
            <h1 className='text-center fw-bold'>User Manager</h1>

            <table className='table table-danger'>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                  <Link to={"/updateuser/"+user._id} className="btn btn-light">Edit</Link>
                </td>
                <td>
                                    <button
                                    onClick={() => {deleteUser(user._id)}} 
                                    className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default UserManager;