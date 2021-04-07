import React from 'react';
import { Link } from 'react-router-dom'; 
import DrinkSearchContainer from '../search/drink_search_container';
// use to make nav list actual links when ready

export default class Navbar extends React.Component {
    render () {
        return (
            <div className="navbar-container">
                <div className='navbar-items'>
                    <h1>UNBLENDED</h1>
                    <ul className='nav-list'>
                        <li>The Pub</li>
                        <li>Top Rated</li>
                        <li><Link to='/drinks'>All Drinks</Link></li>
                    </ul>
                    <div className='profile-icon' >
                        DD
                    </div>
                    <DrinkSearchContainer />
                </div>
            </div>
        )}
}