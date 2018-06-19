import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './Heroes.css';
import * as heroActions from '../../actions/heroActions';
import HeroeDetail from './HeroeDetail';


class Heroes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: { Id: 0, name: "" },
           
        }
        this.OnTextChange = this.OnTextChange.bind(this);
        this.saveHero = this.saveHero.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    OnTextChange(h) {
        this.setState(prevState => ({
            heroes: {
                ...prevState.heroes,
                name: h
            }
        }))

    }
    

    saveHero(event) {
        event.preventDefault();
        let h = {...this.state.heroes};
        this.props.actions.saveNewHero(h);
        this.resetForm()
    }

    resetForm(event) {
        this.setState({heroes:{Id:"",name:""}})
    }

    removeHero(hero) {
        this.props.actions.deleteHero(hero)
    }


    render() {
        return (
            <div>
                <h2>My Heroes</h2>
                <div>
                    <label>Hero name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={event => this.OnTextChange(event.target.value)}                        
                        // onChange={this.OnTextChange}
                        value={this.state.heroes.name} />
                    <input
                        type="submit"
                        value="Save"
                        onClick={this.saveHero} />
                </div>

                <div>
                    <ul className="heroes">

                        {this.props.myheroes.map((h, index) =>
                            <li index={index} key={index}>
                                <Link to={{ pathname: `/hero-detail/${h.Id}`, state: { from: this.props.location } }}>
                                    <span className="badge"> {h.Id} </span>
                                    <span >{h.name}</span>
                                </Link>
                                <button className="delete" title="delete hero" onClick={this.removeHero.bind(this,h)}>X</button>

                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
       myheroes:state.heroesReducer || [],   
    };
    
    
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(heroActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);