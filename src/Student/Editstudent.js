import React from 'react';   
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../Student/Addstudent.css'  
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
    this.onChangeName = this.onChangeName.bind(this);  
    this.onChangeRollNo = this.onChangeRollNo.bind(this);  
    this.onChangeClass = this.onChangeClass.bind(this);  
    this.onChangeAddress = this.onChangeAddress.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
         this.state = {  
            Name: '',  
            RollNo: '',  
            Class: '',  
            Address: ''  
        }  
    }  
  componentDidMount() {  
      axios.get('http://localhost:65164/Api/Student/StudentdetailById?id='+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                Name: response.data.Name,   
                RollNo: response.data.RollNo,  
                Class: response.data.Class,  
                Address: response.data.Address });  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  onChangeName(e) {  
    this.setState({  
        Name: e.target.value  
    });  
  }  
  onChangeRollNo(e) {  
    this.setState({  
        RollNo: e.target.value  
    });    
  }  
  onChangeClass(e) {  
    this.setState({  
        Class: e.target.value  
    });  
}  
    onChangeAddress(e) {  
        this.setState({  
            Address: e.target.value  
        });  
  }  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        Id:this.props.match.params.id,  
      Name: this.state.Name,  
      RollNo: this.state.RollNo,  
      Class: this.state.Class,  
      Address: this.state.Address  
    };  
    axios.post('http://localhost:65164/Api/Student/AddotrUpdatestudent/', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/Studentlist')  
  }  
    render() {  
        return (  
            <Container className="App">  
             <h4 className="PageHeading">Update Student Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Name" value={this.state.Name} onChange={this.onChangeName}  
                                placeholder="Enter Name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>RollNo</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="RollNo" value={this.state.RollNo} onChange={this.onChangeRollNo} placeholder="Enter RollNo" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Class</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Class" value={this.state.Class} onChange={this.onChangeClass} placeholder="Enter Class" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Address</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Address"value={this.state.Address} onChange={this.onChangeAddress} placeholder="Enter Address" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
                            </Col>  
                            <Col sm={1}>  
                                <Button color="danger">Cancel</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
            </Container>  
        );  
    }  
}  
export default Edit;