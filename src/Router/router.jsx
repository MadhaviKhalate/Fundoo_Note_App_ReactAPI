import React from 'react'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Signin from '../Pages/Signin/signin'
import Signup from '../Pages/Signup/signup'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function RouterComp() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />  
        </Routes>
      </Router>
    </div>
  )
}

export default RouterComp