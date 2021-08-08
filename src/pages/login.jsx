import React from 'react' 
import NavigationBar from '../components/NavBar'
import Axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import {connect} from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
import {register, resetRegErr} from '../redux/actions'
import { login, errLoginFalse } from '../redux/actions'

class PageLogin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visibility1:false,
            visibility2: false,
            visibility3: false,
            Error:false,
            ErrorEmail: [false, ""],
            ErrorPwd: [false, ""],
            ErrorRegis: [false, ""]
        }
    }
    EmailValid = (e) => {
        let regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.test(e.target.value)) return this.setState({ emailErr: [true, "Email not valid"] })

        this.setState({ emailErr: [false, ""] })
    }

    PassValid = (e) => {
        let number = /[0-9]/
        let symb = /[!@#$%^&*]/

        if (!symb.test(e.target.value) || !number.test(e.target.value) || e.target.value.length < 6) return this.setState({ passErr: [true, "Password must have 6 character, include number and symbol"] })

        this.setState({ passErr: [false, ""] })
    }

    clickEnter = (e) => {
        if(e.key === 'Enter') {
            this.onLogin()
        }
    }

    onLogin = () => {
        let email = this.refs.email.value
        let password = this.refs.password.value

        if (!email || !password) return this.setState({ registerErr: [true, "Please input all of data"] })

        if (this.state.emailErr[0] || this.state.passErr[0]) return this.setState({ registerErr: [true, "Make sure all of your data is valid"] })

        if (this.refs.confpassword.value !== password) return this.setState({ registerErr: [true, "Confirm password doesn't match with password"] })


        if (!email || !password) {
            return this.setState({ error: true })
        }
        let obj = {
            password,
            cart: []
        }

        // action untuk register
        this.props.register(email, obj)
        this.props.login(email, password)
    }

    render(){
        return(
            <Container fluid="sm">
                <NavigationBar />
                <br></br>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                            <h1>Login</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control ref="email" onChange={(e) => this.EmailValid(e)}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref="password" onChange={(e) => this.PassValid(e)}></Form.Control>
                                </Form.Group>
                                <br></br>
                                <Button onClick={this.onLogin}><i class="fas fa-sign-in-alt"></i> Login</Button>
                            </Form>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errorReg: state.userReducer.errorRegister,
        successReg: state.userReducer.successRegister,
        errorLogin: state.userReducer.errorLogin,
        email: state.userReducer.email
    }
}

export default PageLogin