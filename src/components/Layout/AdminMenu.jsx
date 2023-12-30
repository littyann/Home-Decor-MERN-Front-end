import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="shadow text-center ">
        <div className="list-group dashboard-menu p-5">
          <h4>Admin Panel</h4>
          <NavLink style={{textDecorationColor:'none',textDecorationLine:'none'}}
            to="/dashboard/admin/create-category"
            className=" list-group-item-action p-4"
          >
            Create Category
          </NavLink>
          <NavLink style={{textDecorationColor:'none',textDecorationLine:'none'}}
            to="/dashboard/admin/create-product"
            className=" list-group-item-action p-4"
          >
            Create Product
          </NavLink>
          <NavLink style={{textDecorationColor:'none',textDecorationLine:'none'}}
            to="/dashboard/admin/products"
            className=" list-group-item-action p-4"
          >
           Update Products
          </NavLink> 
          {/* <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink> */}
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;