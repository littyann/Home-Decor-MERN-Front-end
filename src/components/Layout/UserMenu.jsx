import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  
  return (
    <div className="d-flex">
      <div style={{height: '100vh', width: 150,backgroundColor:"rgb(128, 109, 128"}} className="sidebar mt-0  text-light d-flex flex-column">
  <NavLink style={{textDecoration: 'none', marginTop: 10, fontWeight: 'bold', color: 'white',marginLeft:"20px"}} to="/dashboard/user/profile">Edit Profile</NavLink>
  <NavLink style={{textDecoration: 'none', marginTop: 10, fontWeight: 'bold', color: 'white',marginLeft:"20px"}} to="/dashboard/user/orders">My Oders</NavLink>
</div>



        
          {/* <NavLink style={{textDecoration:"none"}}
            to="/dashboard/user/profile"
            className=" list-group-item-action "
          >
           Edit Profile
          </NavLink>
          <NavLink style={{textDecoration:"none"}}
            to="/dashboard/user/orders"
            className=" list-group-item-action"
          >
            Orders
          </NavLink> */}
        </div>
     
   
   
  );
};

export default UserMenu;