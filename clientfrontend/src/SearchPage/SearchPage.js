import React from 'react';
import './SearchPage.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from '../axios-objects';
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

    render() {
        return (
            <div>
                <HamburgerMenu />
                <header id="showcase">
                    <div className="container showcase-container">
                        
                    </div>
                </header>
            </div>
        );
    }
}

export default SearchPage;