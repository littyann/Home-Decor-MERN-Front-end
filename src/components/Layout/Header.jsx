import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auths";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./HeaderStyles.css";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" style={{ color: "white" }}>
              <span>T H E D E C O R k A R T</span>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link "
                  style={{ color: "white" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown" style={{ color: "white" }}>
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                  style={{ color: "white" }}
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-content">
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li className="dropdown-content">
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <SearchInput />

              {!auth?.user ? (
                <>
                  {/* <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                    <span style={{color:"white"}}>  SignUp</span>
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      <span style={{ color: "white", fontSize: "25px" }}>
                        <FaRegUser />
                      </span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown ">
                    <NavLink
                      className="nav-link dropdown-toggle "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ color: "white", fontSize: "bold"}}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu ">
                      <li className="dropdown-content">
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li className="dropdown-content">
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li className="nav-item">
                <Badge
                  style={{
                    backgroundColor: "white",
                    fontWeight: "lighter",
                    marginRight: "20px",
                    borderRadius: "10px",
                    color: "rgb(128, 109, 128",
                  }}
                  count={cart?.length}
                  showZero
                >
                  <NavLink to="/cart" className="nav-link">
                    {/* <i style={{color:"white",fontWeight:"bold",marginRight:"10px"}} id="cart" class="fa-solid fa-cart-shopping"></i> */}
                    <FaCartShopping
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        marginRight: "10px",
                        fontSize: "23px",
                      }}
                    />
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
