import { React, useEffect } from "react";
import { Link, Router, BrowserRouter, useFetcher } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="container-fluid home-class">
            <div className="row">
                <div className="col">
                    <ul className="nav nav-class">
                        <li className="nav-item"><button className="btn" onClick={() => { navigate('/about') }}>About</button></li>
                        <li className="nav-item"><button className="btn" onClick={() => { navigate('/get-started') }}>Get Started!</button></li>
                        <li className="nav-item"><button className="btn" onClick={() => { navigate('/contact') }}>Contact</button></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <img className="main-logo" src="https://res.cloudinary.com/dtnfcxvpg/image/upload/v1640877338/elegant-title_ckbthy.png" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Home


// onClick={() => navigate('/About')}