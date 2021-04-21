import React from "react"
import {Link} from "react-router-dom"


const Menu = () =>{
 return (
     <div>
            <Link to="/" className="btn btn-light">Home</Link>
            <Link to="/insert" className="btn btn-light">Insert</Link>
            <Link to="/update" className="btn btn-light">Update</Link>
            <Link to="/delete" className="btn btn-light">Delete</Link>
     </div>
 );
}

export default Menu;