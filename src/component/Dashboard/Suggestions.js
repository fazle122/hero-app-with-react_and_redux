import React from 'react';
import SuggestionListItem from './SuggestionItem';
import './Search.css';

class Suggestions extends React.Component {


    render() {

        return (
            <div id="search-component">
                <ul className="search-result">
                    {
                        <SuggestionListItem  heroItem = {this.props.heroes}  handleClick={()=> {this.props.handelHero(this.props.heroes)}} />
                     }

                </ul>
            </div>
        );
    }
}

export default Suggestions;
