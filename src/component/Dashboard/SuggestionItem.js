import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import './Search.css';


class SuggestionListItem extends React.Component {


    render() {

        return (
            <div>
                <li>
                    <Link to={{pathname:`/hero-detail/${this.props.heroItem.Id}`,state: { from: this.props.location }}} >
                        {this.props.heroItem.name}
                    </Link>

                </li>
                
            </div>
        );
    }
}

export default withRouter(SuggestionListItem);