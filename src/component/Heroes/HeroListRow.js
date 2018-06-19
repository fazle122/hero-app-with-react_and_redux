import React from 'react';
import {Link} from 'react-router';

const HeroListRow = ({hero}) =>{
    return(
        <li style={{ listStyleType: 'none' }} >
                {/* <Link to={`/hero-detail/${this.props.heroItem.Id}`}> */}
                <Link to={{ pathname: `/hero-detail/${this.props.heroItem.Id}`, state: { from: this.props.location } }} >
                    <span className="badge"> {this.props.heroItem.Id} </span>
                    {this.props.heroItem.name}
                </Link>

                <button className="delete" title="delete hero" onClick={this.props.removeListItem}>X</button>
            </li>
    );
};


export default HeroListRow;