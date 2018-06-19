import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Tour of Heroes</h1>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/heroes">Heroes</Link>
                </nav>
            </div>
        );
    }
}

export default Header;