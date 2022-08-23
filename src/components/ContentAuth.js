import '../App.css';
import '../css/styles.css';

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { login, getProfile } from '../actions/Auth'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Login = (props) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        checkLoggedIn()
    }, [])

    const checkLoggedIn = () => {
        let token = localStorage.getItem('token')
        if (token != '' && token != null) {
            props.getProfile(token)

            if (props.user_data.name != '') {
                navigate('/')
            }
        }
    }

    return (
        <div className='container-fluid' style={{minHeight: 600}}>
            <div className='row py-5'>
                <div className='col-md-6 offset-3'>
                    <Tabs
                        defaultActiveKey="login"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="login" title="Login">
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="loginName">Email</label>
                                    <input 
                                        type="email"
                                        id="loginName"
                                        className="form-control"
                                        onChange={
                                            (e) => setEmail(e.target.value)
                                        }/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                    <input 
                                        type="password"
                                        id="loginPassword"
                                        className="form-control"
                                        onChange={
                                            (e) => setPassword(e.target.value)
                                        }
                                        />
                                </div>

                                <button 
                                    type="button"
                                    className="btn btn-primary btn-block mb-4"
                                    onClick={
                                        () => {
                                            let formData = {
                                                email: email,
                                                password: password
                                            }

                                            props.login(formData)

                                            localStorage.setItem('token', props.user_data.token)
                                            checkLoggedIn()
                                        }
                                    }>
                                        Sign in
                                </button>
                            </form>
                        </Tab>
                        <Tab eventKey="register" title="Register">
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="registerName">Name</label>
                                    <input type="text" id="registerName" className="form-control" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="registerEmail">Email</label>
                                    <input type="email" id="registerEmail" className="form-control" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="registerPassword">Password</label>
                                    <input type="password" id="registerPassword" className="form-control" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                                    <input type="password" id="registerRepeatPassword" className="form-control" />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
                            </form>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    user_data: state.AuthReducer.user_data
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login, getProfile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
