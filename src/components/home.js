import React from "react";

const Home = () => {
    return (
        <div className="container-fluid home-class">
            <div className="row">
                <div className="col">
                    <ul className="nav nav-class">
                        <li className="nav-item"><button className="btn">About</button></li>
                        <li className="nav-item"><button className="btn">Get Started!</button></li>
                        <li className="nav-item"><button className="btn">Contact</button></li>
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