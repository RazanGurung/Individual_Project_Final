import React,{Component} from 'react';
import './registration.css';
import axios from 'axios';
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Container , Row, Col,Form,FormGroup, Button, FormLabel } from "react-bootstrap";
const option = [
    {
        label : "choose__type"
    },
    {
        label :  "Customer",
        value : "Customer"
    },
    {
        label : "Seller",
        value : "Seller"
    }
]
class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname:"",
            middlename:"",
            lastname:"",
            email:"",
            usertype:"",
            password :""
        };
        this.sendUserInfo=this.sendUserInfo.bind(this);
    }
    
    sendUserInfo=(event)=>{
        event.preventDefault();
        const data = {
            firstname:this.state.firstname,
            middlename:this.state.middlename,
            lastname:this.state.lastname,
            email:this.state.email,
            usertype:this.state.usertype,
            password:this.state.password
        }
        axios.post("http://localhost:8000/user/register",data).then(response=>{
            this.props.history.push("/signin");
        }).catch(err=>{
            alert("Could not Sign Up");
        })
    }
    render(){
        return (
            <Container fluid className="register">
                <Row>
                    <Col>
                         <Form onSubmit={this.sendUserInfo} className = "register__form">
                             <FormGroup>
                                 <div className="register__logoContainer">
                                     <Link to="/">
                                         <img src={logo} className="register__logo"/>
                                     </Link>
                                 </div>
                                 <div className="register__name">
                                     <div className="register__option">
                                         <FormLabel className="register__label">FirstName</FormLabel>
                                         <input className="form-control" type="text" placeholder="FirstName" value={this.state.firstname} onChange={(event)=>{this.setState({firstname:event.target.value})}}/>
                                     </div>
                                     <div className="register__option">
                                         <FormLabel className="register__label">MiddleName</FormLabel>
                                         <input className="form-control" type="text" placeholder="MiddleName" value={this.state.middlename} onChange={(event)=>{this.setState({middlename:event.target.value})}} />
                                     </div>
                                 </div>
                                 <FormLabel className="register__label">LastName</FormLabel>
                                 <input className="form-control" type="text" placeholder="LastName" value={this.state.lastname} onChange={(event)=>{this.setState({lastname:event.target.value})}}/>
                                 <FormLabel className="register__label">Email</FormLabel>
                                 <input className="form-control" type="email" placeholder="Email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
                                <FormLabel className="register__label">User-Type</FormLabel>
                                <select className="form-control" value={this.state.usertype} onChange={(event)=>{this.setState({usertype:event.target.value})}}>
                                    {option.map((option)=>(
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                 <FormLabel className="register__label">Password</FormLabel>
                                 <input className="form-control" type="password" placeholder="Password" />
                                 <FormLabel className="register__label">Confirm Password</FormLabel>
                                 <input className="form-control" type="password" placeholder="Confirm Password" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}}/>
                             </FormGroup>
                            <Button onClick={this.sendUserInfo} className ="register__button btn-lg btn-block">Register</Button>
                         </Form>
                    </Col>
                </Row>
            </Container>
         )
     }
     
    }
export default withRouter(Register);
