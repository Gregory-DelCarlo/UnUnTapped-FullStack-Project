import React from 'react';
import { Link } from 'react-router-dom';
import DrinksIndexItem from './drinks_index_item';
import Navbar from '../navbar/navbar';

export default class DrinksIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDrinks();
    }
    componentWillUnMount() {
        this.props.history.push('/drinks');
    }
    render()  {
        const drinks = this.props.drinks.map( drink => (
            <DrinksIndexItem
                key={drink.id}
                drink={drink}
            />
        ))

        return (
            <div className='page'>
                <Navbar />
                <div className='drinks-box'>
                    <div className='drinks-list-selector'>
                        <div className='list-item'>
                            Whiskey
                        </div>
                        <div className='list-item'>
                            Distillery
                        </div>
                    </div>
                    <ul className='drinks-list'>
                        {drinks}
                    </ul>
                    <Link className='link' to='/drinks/new' >Create a Drink! </Link>
                </div>
            </div>
        )
    }
} 
