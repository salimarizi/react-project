// import logo from '../logo.svg';
import '../App.css';
import '../css/styles.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { logout } from '../actions/Auth'

const Header = (props) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token')
        setToken(token)
    }, [])

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                            <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
                        </ul>
                        <form className="d-flex">
                            {
                                token != '' && token != null ? 
                                <>
                                    <Link to="/cart" className="btn btn-outline-dark mr-2">
                                        <i className="bi-cart-fill me-1"></i>
                                        Cart
                                        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                                    </Link>
                                    &nbsp;
                                    <button 
                                        className="btn btn-outline-dark"
                                        onClick={() => {
                                            props.logout()
                                            localStorage.clear()
                                            window.location.reload()
                                        }}>
                                        Logout
                                    </button>
                                </>
                                :
                                <Link to="/auth" className="btn btn-outline-dark">
                                    Login
                                </Link>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    user_data: state.AuthReducer.user_data
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
