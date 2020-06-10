import React from 'react';  
// import logo from './logo.svg';  
// import "../node_modules/jquery/dist/jquery.min.js";
import './App.css';  
import Login from './Login';  
import Reg from './Reg';  
import Dashboard from './Dashboard';  
import Addstudent from './Student/Addstudent';  
import Studentlist from './Student/Studentlist';  
import EditStudent from './Student/Editstudent';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
function App() {  
  return (  
    <Router>    
      
      <div className="container">    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="google.com">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">    
            <ul className="navbar-nav">    
              <li className="nav-item">    
                <Link to={'/Login'} className="nav-link">Login</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/Signup'} className="nav-link">Sign Up</Link>    
              </li>  
              <li className="nav-item">  
                <Link to={'/Addstudent'} className="nav-link">Addstudent</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Studentlist'} className="nav-link">Student List</Link>  
              </li>    
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/Login' component={Login} />    
          <Route path='/Signup' component={Reg} />    
        </Switch>    
        <Switch>  
        <Route path='/Dashboard' component={Dashboard} />    
        </Switch>  
        <Switch>  
          <Route exact path='/Addstudent' component={Addstudent} />  
          <Route path='/edit/:id' component={EditStudent} />  
          <Route path='/Studentlist' component={Studentlist} />  
        </Switch> 
      </div>    
    </Router>   
  );  
}  
export default App;