

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/loading'
import Error from '../components/error'
import Filter from '../components/filter'
import { deleteUser, getAllUsers } from '../actions/userAction'

export default function Userlist() {
  const dispatch = useDispatch()
  const usersstate = useSelector(state => state.getAllUsersReducer)
  const { error, loading, users } = usersstate
  useEffect(() => {

    dispatch(getAllUsers())

  }, [])
  return (
    <div>
      <h1>User list</h1>
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      <table className='table table-striped table-bordered table-responsive-sm'>
        <thead className='thead-dark'>
          <tr>
            <th>User id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user => {
            return <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
            </tr>

          })};
        </tbody>

      </table>
    </div>
  )
}
