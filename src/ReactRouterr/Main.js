import Form from "./Form";
import Navbar from "./Navbar";
import { BrowserRouter,Routes, Route, Link} from "react-router-dom";
import React from 'react'

function Main() {
  return (
    <div>
         <BrowserRouter>
        <ul>
        <li><Link to="/"><b></b></Link> </li>
        {/* <li><Link to="/Navbar"><b>Navbar</b></Link></li> */}
        </ul>
        <Routes>
          <Route index element={<Form/>}/>
          <Route path="/Navbar" element={<Navbar/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Main