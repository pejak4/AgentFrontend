import React from 'react';
import './SearchPage.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import {updateObject} from '../utility';

class SearchPage extends React.PureComponent {
    
    constructor(props) {
        super(props);

        this.state = {
            search: {
                cars: []
            }
        }
    }

    componentDidMount = () => {
        let search = updateObject(this.state.search, {
            cars: this.props.location.state.cars
        })
        this.setState({search});
    }

    render() {
        return (
            <div>
                <HamburgerMenu />
                <header id="showcase">
                    <div className="containerSearch showcase-containerSearch" style={{overflowY:'scroll'}}>
                        {this.state.search.cars.map((car, i) => {
                            return (
                                <div key={i} className="car-card">
                                    <h3>{car.brand} {car.model}</h3>
                                    <div className="car-card-inner">
                                        <div className="left-side">
                                            <img alt="Car" src={require('../img/' + car.image)} />
                                        </div>
                                        <div className="right-side">
                                            <div>
                                                <div>
                                                    <img alt="Fuel" src={require('../img/fuelTypeIcon.png')} title="Fuel Type"/>
                                                    <p className="icon-text">{car.fuelType}</p>
                                                </div>
                                                <div>
                                                    <img alt="Seats" src={require('../img/numberOfSeatsIcon.png')} title="Number Of Seats"/>
                                                    <p className="icon-text">{car.capacitySeats}</p>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <div>
                                                    <img alt="Transmission" src={require('../img/transmissionIcon.png')} title="Transmission Type"/>
                                                    <p className="icon-text">{car.transmission}</p>
                                                </div>
                                                <div>
                                                    <img alt="GPS" src={require('../img/gpsIcon.png')} title="GPS"/>
                                                    <p className="icon-text">{car.gps ? 'own' : '-'}</p>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <div>
                                                    <img alt="USB" src={require('../img/usbIcon.png')} title="USB"/>
                                                    <p className="icon-text">{car.usb ? 'own' : '-'}</p>
                                                </div>
                                                <div>
                                                    <img alt="Doors" src={require('../img/doorsIcon.png')} title="Number Of Doors"/>
                                                    <p className="icon-text">{car.doors}</p>
                                                </div>
                                            </div>
                                            
                                            <a href="/">More details </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </header>
            </div>
        );
    }
}

export default SearchPage;