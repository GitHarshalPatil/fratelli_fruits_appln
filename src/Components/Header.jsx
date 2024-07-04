import React from 'react'
import '../Styles/Header.css'
import img1 from '../assets/fratelli-img/loader.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <div className='set-width fixed'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light  bg-white fadeInDown animated">
                            <a className="navbar-brand mx-5 px-5" href="#">
                                {/* <img src="./assets/fratelli-img/loader.png" className="img-fluid" alt="" 
                    style={{'max-width': "70px", 'max-height': "70px"}} /> */}
                                <img src={img1} className="img-fluid" alt=""
                                    style={{ maxWidth: "70px", maxHeight: "70px" }} />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="navbar-nav d-flex justify-content-between">
                                    <Link className="nav-link links" to="/">Home</Link>
                                    <Link className="nav-link links" to="/agronomy">Agronomy</Link>
                                    <Link className="nav-link links" to="/activity">Activity</Link>
                                    <Link className="nav-link links" to="/product">Product</Link>
                                    <Link className="nav-link links" to="/vision">Vision/Mission</Link>
                                    <Link className="nav-link links" to="/contact-us">Contact Us</Link>
                                </div>
                            </div>
                            {/* <div className="cal"></div> */}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header