import React from 'react';  
// import logo from './logo.svg';  
// import "../node_modules/jquery/dist/jquery.min.js";
import './App.css';  
import NavMenu from './components/NavMenu';
import Login from './Login';  
import Reg from './Reg';  
import Dashboard from './Dashboard';  
import Addstudent from './Student/Addstudent';  
import Studentlist from './Student/Studentlist';  
import EditStudent from './Student/Editstudent';  
import Test from './Test';  
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';   
import logo from './logo.svg';

function App() {  
  return (  

    <Router>    
      
      <div className="container">  

      <NavMenu />
      <img src={logo} alt="Get Started"/>


     
        <br />
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
        <Switch>  
        <Route path='/Test' component={Test} />    
        </Switch>
        
      </div>    
    </Router>   
  );  
}  
export default App;