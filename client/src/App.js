import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Adminscreen from './screens/adminscreen';
import Userlist from './screens/Userlist';
import Orderlist from './screens/Orderlist';
import Addpizza from './screens/Addpizza';
import Pizzalist from './screens/Pizzalist';
import Editpizza from './screens/editpizza';
import storelist from './screens/storelist';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" exact Component={Homescreen} />
        <Route path="/cart" exact Component={Cartscreen} />
        <Route path="/register" exact Component={Registerscreen} />
        <Route path="/login" exact Component={Loginscreen} />
        <Route path="/admin" Component={Adminscreen}/>
          <Route path="/admin" Component={Userlist} exact /> 
          <Route path="/admin/userlist" Component={Userlist} exact />
          <Route path="/admin/orderlist" Component={Orderlist} exact />
          <Route path="/admin/storelist" Component={storelist} exact />

          <Route path="/admin/pizzalist" Component={Pizzalist} exact />
          <Route path="/admin/addpizza" Component={Addpizza} exact />
          <Route path="/admin/editpizza/:pizzaid" Component={Editpizza} exact />

      


        </Routes> 




      </BrowserRouter>

    </div>
  );
}

export default App;
