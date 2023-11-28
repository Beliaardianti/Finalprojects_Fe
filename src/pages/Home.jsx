import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    
    
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/productinfo">ProductInfo</Link>
        </li>
        <li>
          <Link to="/reports">Tranksaksi</Link>
        </li>
        <li>
          <Link to="/suppliers">Suppliers</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
       
      </ul>
   
  );
};
export default Home;
