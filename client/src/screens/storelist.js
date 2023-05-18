// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Loading from '../components/loading'
// import Error from '../components/error'
// import Filter from '../components/filter'
// // import { deletestore, getAllStore } from '../actions/userAction'
// import { deleteStore, getAllStores } from '../actions/storeaction'

// export default function Storelist() {
//   const dispatch = useDispatch()
//   const usersstate = useSelector(state => state.getAllStoresReducer)
//   const { error, loading, stores } = usersstate
//   useEffect(() => {

//     dispatch(getAllStores())

//   }, [])
//   return (
//     <div>
//       <h1>Store list</h1>
//       {loading && <Loading />}
//       {error && <Error error="something went wrong" />}
//       <table className='table table-striped table-bordered table-responsive-sm'>
//         <thead className='thead-dark'>
//           <tr>
//             <th>Store id</th>
//             <th>Name</th>
//             <th>location</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {stores && stores.map(store => {
//             return <tr key={store._id}>
//               <td>{store._id}</td>
//               <td>{store.Name}</td>
//               <td>{store.Email}</td>
//               <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteStore(store._id))}}></i></td>
//             </tr>

//           })};
//         </tbody>

//       </table>
//     </div>
//   )
// }
