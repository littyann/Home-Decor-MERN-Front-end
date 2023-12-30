import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auths";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
 
         {/* <h1 style={{marginLeft:"200px"}} className="mt-5">Welcome {auth?.user?.name}</h1> */}
     
      <div className="d-flex">
        <div>
              
            <UserMenu />
        </div>
        <div class="dashboard p-3 w-100">
        <h1>Welcome {auth?.user?.name}</h1>
    </div>
      </div>

        {/* <h1>Welcome {auth?.user?.name}</h1> */}
          <div >
            {/* <div style={{border:"none"}} className="card p-3"> */}
             
              {/* <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3> */}
              {/* <UserMenu /> */}
            </div>
          
          {/* <div className="col-md-3">
            <UserMenu />
          </div> */}
        
      
    </Layout>
  );
};

export default Dashboard;