import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          style={{ backgroundColor: "rgb(128, 109, 128)", color: "white" }}
          className="form-control rounded"
          type="search"
          placeholder="Search.."
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        {/* <button style={{marginRight:"80px"}} type="submit" className="btn  "><i style={{color:"white"}} className="fa fa-search fa-bold w-50"></i></button> */}
      </form>
    </div>
  );
};

export default SearchInput;
