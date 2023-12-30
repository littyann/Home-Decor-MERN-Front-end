import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
       <div className="d-flex">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter new category"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
  
        <div>
            <button style={{marginLeft:"10px",backgroundColor:'rgb(128, 109, 128)',color:'white'}} type="submit" className="btn ">
              Submit
            </button>
        </div>
       </div>
      </form>
    </>
  );
};

export default CategoryForm;