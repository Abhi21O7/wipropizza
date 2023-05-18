import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
// import Userlist from './Userlist';
// import Orderlist from './Orderlist';
// import Pizzalist from './Pizzalist';
// import Addpizza from './Addpizza';
// import {Switch} from 'react-router-dom'
// import { BrowserRouter  as Router} from 'react-router-dom';
// import { Switch } from 'react-router-dom/cjs/react-router-dom';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


export default function Adminscreen() {
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    useEffect(() => {

        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }

    }, [])
    return (
        <div>
            <div className="row justify-content-center p-3">
                <div className='col-md-10'>
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
                    <ul className='adminfunctions'>
                        <li><Link to={'/admin/userlist'}>User list</Link></li>
                        <li><Link to={"/admin/pizzalist"}>Pizzas list</Link></li>
                        <li><Link to={"/admin/addpizza"}>Add New Pizza</Link></li>
                        <li><Link to={"/admin/orderlist"}>Order list</Link></li>
                        {/* <li><Link to={"/admin/storelist"}>storelist</Link></li> */}

                    </ul>

                       {/* <Routes> */}
                      
                        {/* <Route path="/admin/userlist"  Component={Userlist} exact />
                        <Route path="/admin/orderlist" Component={Orderlist}  exact/>
                        <Route path="/admin/pizzalist" Component={Pizzalist} exact />
                        <Route path="/admin/addpizza"  Component={Addpizza} exact/> */}
                      {/* </Routes> */}

                      
                     
                    

                </div>

            </div>

        </div>
    )
}
