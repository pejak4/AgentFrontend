import React from 'react';
import './HomePage.css';

class HomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger">
                        <div></div>
                    </div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <header id="showcase">
                    <div className="container showcase-container">
                        <h1>Welcome</h1>
                        <p>Rent a car</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default HomePage;