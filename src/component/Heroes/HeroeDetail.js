import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as heroActions from '../../actions/heroActions';
// import HeroForm from './HeroForm';
import Message from '../Message/Message';



class HeroDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            hero: Object.assign({}, this.props.hero),
            error: {}
        }
        this.updateHeroState = this.updateHeroState.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.state.hero.Id != nextProps.hero.Id) {

            this.setState({ hero: Object.assign({}, nextProps.hero) });
        }
    }

    updateHeroState(h) {

        this.setState(prevState => ({
            hero: {
                ...prevState.hero,
                name: h
            }
        }))
    }

    updateHero(hero) {
        this.props.actions.updateHero(this.state.hero);
        console.log(this.state.hero)
    }

    render() {
        return (
            <div>
                <div>
                    <h2>{this.state.hero.name} Detail</h2>
                    <h4> ID: {this.state.hero.Id}</h4>

                    <label>name:
                    <input type="text"
                            value={this.state.hero.name}
                            onChange={event => this.updateHeroState(event.target.value)}
                        />
                    </label>
                    <h5>
                        {/* <button onClick={this.saveHero}> */}
                        <button onClick={this.updateHero.bind(this,this.state.hero)}>
                            <Link to={this.props.location.state.from} >
                                Save
                            </Link>
                        </button>
                        <button>
                            <Link to={this.props.location.state.from}>
                                Back  
                            </Link>
                        </button>

                    </h5>
                </div>
                <div>
                    <Message />
                </div>
            </div>
        );
    }
}

// HeroDetail.contextTypes = {
//     router: PropTypes
// }

function getHeroById(heroes, id) {

    const hero = heroes.filter(hero => hero.Id == id);
    if (hero) return hero[0];
    return null;
}

function mapStateToProps(state, ownProps) {

    console.log(state.heroesReducer);
    const heroId = ownProps.match.params.Id;
    let hero = { name: '', Id: '' };
    if (heroId && state.heroesReducer.length > 0) {
        hero = getHeroById(state.heroesReducer, heroId);
    }
    console.log(hero);
    return {
       hero:hero,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(heroActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);
