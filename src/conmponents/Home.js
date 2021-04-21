import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Home = () =>{
    const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
// mongo https://c6d3ae558a70.ngrok.io/get
// sheetdb https://sheetdb.io/api/v1/9b5sl4j4hm2s9
  const loadUsers = async () => {
    const result = await axios.get("https://d87e9a6b14f3.ngrok.io/users");
    console.log('result',result.data);
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
    return (
        <div className="container">
          <div className="py-4">
            <h1>Home Page</h1>
            <table className="table border shadow">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Mobile</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                  <th scope="col">Pincode</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <td>{user.mobile}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>{user.pincode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
    
    export default Home;
