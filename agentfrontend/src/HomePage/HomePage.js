import React from 'react';
import './HomePage.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

class HomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <HamburgerMenu />
                <header id="showcase">
                    <div className="container showcase-container">
                        <h1>Welcome</h1>
                        <p>Rent a car</p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default HomePage;