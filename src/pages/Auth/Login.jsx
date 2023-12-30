import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auths";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div style={{width:"100%",height:'100vh'}} className='d-flext justify-content-center align-items-center'>
        <div className="w-75 container mt-5">
         <div style={{backgroundColor:" rgb(128, 109, 128"}} className="card shadow p-5  mt-5">
           <div className="row align-items-center">
           <div className="col-lg-6">
                        <img src="https://img.freepik.com/premium-vector/log-people-isometric-vector-illustration-illustration-with-sign-people-mobile-app-design_123447-4749.jpg?w=360" alt=""  className='rounded-start w-100 h-50'/>
                       
                    </div>
              <div className="col-lg-6">
                <form onSubmit={handleSubmit}>
                  <h4 className="title text-center text-light">LOGIN</h4>
        
                  <div className="mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Email "
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    {/* <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        navigate("/forgot-password");
                      }}
                    >
                      Forgot Password
                    </button> */}
                  </div>
        
                  {/* <button type="submit" className="btn btn-primary">
                    LOGIN
                  </button> */}
                   <div>
                                    <button className="btn btn-light mb-2">Login</button>
                                    <p className="text-light">New User ? Click here to <Link style={{textDecoration:"none",color:"white"}} to={'/register'}>Register</Link></p>
                                </div>
                </form>
              </div>
           </div>
         </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;