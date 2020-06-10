import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  // constructor(props) {  
  //   super(props);  
  //   }  
    DeleteStudent= () =>{  
     axios.delete('http://localhost:65164/Api/Student/Deletestudent?id='+this.props.obj.Id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.Name}  
          </td>  
          <td>  
            {this.props.obj.RollNo}  
          </td>  
          <td>  
            {this.props.obj.Class}  
          </td>  
          <td>  
            {this.props.obj.Address}  
          </td>  
          <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
export default Table;