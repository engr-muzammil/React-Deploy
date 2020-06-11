import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {anothername} from './actions/myaction'


function Test(props){  

    
        console.log(props);
  return (  
    <div>
        <h1>TESTING OF Async using JSON PLACEHOLDER {props.myname}</h1>
    
    <button onClick={()=>{props.changeName()}}>Change</button>
    </div>   
  );  
}  
const mapStateToProps = (state) =>{
    return {
        myname: state.name
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        //changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
       // changeName:(name)=>{dispatch(anothername(name))}
        changeName:()=>{dispatch(anothername())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Test);