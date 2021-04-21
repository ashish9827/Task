import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Update = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    mobile: ""
  });

  const { mobile} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const data = [{
        mobile: user.mobile
    }];
    const body = {
      data
    };
    await axios.post("https://d87e9a6b14f3.ngrok.io/user", body);//https://sheetdb.io/api/v1/9b5sl4j4hm2s9
    // await axios.post("http://localhost:3003/users", user);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Mobile Number"
              name="mobile"
              value={mobile}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Update;