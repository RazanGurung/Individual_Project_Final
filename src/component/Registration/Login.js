import { Component } from "react";
import './registration.css';
import axios from 'axios';
import { Container , Row, Col,Form, FormCheck,FormGroup, Button, FormLabel } from "react-bootstrap";
import {GoogleLoginButton} from "react-social-login-buttons";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
        this. state = {
            email : "",
            password : ""
        }
        this.submitLogin=this.submitLogin.bind(this);
    }
   
    changeHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitLogin=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/user/login",this.state)
        .then((response)=>{
            const username = response.data.data.firstname + ' ' +response.data.data.lastname
            localStorage.setItem("username",username);
            localStorage.setItem("userid",response.data.data._id);
            localStorage.setItem("usertype", response.data.data.usertype)
            localStorage.setItem("token", response.data.token);
            this.props.history.push("/account");
        }).catch((err)=>{
            alert("Invalid email or password");
        })  
    }
    render(){
        return (
            <Container fluid className="login">
                <Row>
                    <Col>
                        <Form className = "login__form" >
                            <div className="register__logoContainer">
                                <Link to="/">
                                    <img src="" className="register__logo"/>
                                </Link>
                            </div>
                            <FormGroup>
                                <FormLabel className="login__label">Email</FormLabel>
                                <input className="form-control rounded" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.changeHandler} />
                                <FormLabel className="login__label">Password</FormLabel>
                                <input className="form-control rounded" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                                <FormCheck >
                                    <input type="checkbox" className="login__checkbox"/>
                                    <FormLabel className="form-check-label login__label" >Remember Me</FormLabel> 
                                </FormCheck>   
                            </FormGroup>
                            <Button className ="btn-lg btn-block login__button rounded" onClick={this.submitLogin}>Login</Button>
                            <div className="text-center pt-3 login__label">Or Continue with your social account</div>
                            <GoogleLoginButton className="mt-3 mb-3" />
                            <div className="text-center">
                                <Link to="/signup" className="login__label text-center">Sign up</Link>
                               <span className="login__label text-center">|</span>
                               <Link to="/signup" className="login__label text-center">Forget Password?</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
   
export default withRouter (Login);
