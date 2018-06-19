import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dashboardActions from '../../actions/dashboardAction';
import Suggestions from './Suggestions';
import './Search.css';
import './Dashboard.css'




class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            hero: Object.assign({}, this.props.hero),
            heroes: { Id: 0, name: "" }
        }
        this.handelSearch = this.handelSearch.bind(this);
    }

    handelSearch(event) {
        let data = event.target.value;
        if (data && data.length > 0) {
            this.setState({ keyword: data, search: true });
        } else {
            this.setState({ keyword: '', search: false });

        }
    }
    render() {
        const searchList = this.state.search;
        let filteredHeroes = this.props.topHeroes.filter(
            (hero) => {
                return hero.name.indexOf(this.state.keyword) !== -1;
            }
        );
        return (
            <div>
                <h3>Top Heroes</h3>
                <div className="grid grid-pad">
                    <ul>
                        <div >
                            {this.props.topHeroes.slice(1, 5).map((hero, index) =>
                                <li key={index} index={index} className="col-1-4" style={{ listStyleType: 'none' }}>
                                    <Link
                                        to={{ pathname: `/hero-detail/${hero.Id}`, state: { from: this.props.location } }}
                                        className="module hero">
                                        {hero.name}
                                    </Link>

                                </li>

                            )}
                        </div>
                    </ul>
                </div>
                <div>
                    <div >
                        <h4>Hero Search:</h4>
                                <input
                                className="searchBox"
                                id="search-box"
                                type='text'
                                value={this.state.keyword}
                                placeholder="Search for..."
                                onChange={this.handelSearch}
                            />
                        
                        {filteredHeroes.map((hero) =>

                            searchList ? <Suggestions key={hero.Id} heroes={hero} /> : ''
                        )}

                    </div>


                </div>

            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {

    return {
        topHeroes: state.heroesReducer || [],
       heroMessages:state.heroesReducer.heroMessage || [] 
        

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dashboardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);