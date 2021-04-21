import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import {Route, Switch} from "react-router-dom"
import './App.css';
import Home from "./conmponents/Home"
import Insert from "./conmponents/Insert"
import Update from "./conmponents/Update"
import Delete from "./conmponents/Delete"
import Menu from "./conmponents/Menu"
import "../node_modules/bootstrap/dist/css/bootstrap.css"


const App = () =>{
  return (
    <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/insert" component={Insert} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/delete" component={Delete} />
        </Switch>
    </BrowserRouter>
  )
}


// function App() {
//   return (
//     <div>
//     <Home />
//     <Insert />
//     <Update />
//     <Delete />
//     </div>
//   );
// }

export default App;
