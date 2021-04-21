import React, { useState } from "react";
import axios from 'axios'

const Insert = () => {
  const [user, setUser] = useState({
    mobile: "",
    name: "",
    email: "",  
    city: "",
    pincode: ""
  });

  const { mobile, name, email, city, pincode } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const data = [{
        mobile: user.mobile, 
        name: user.name, 
        email: user.email,
        city: user.city,
        pincode: user.pincode
    }];
    const body = {
      data
    };
    await axios.post("https://af6f332d9301.ngrok.io/users", body);//https://sheetdb.io/api/v1/9b5sl4j4hm2s9
    // await axios.post("http://localhost:3003/users", user);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
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
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your City"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Pincode"
              name="pincode"
              value={pincode}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Insert;